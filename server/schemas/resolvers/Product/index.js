import Product from "../../models/Product"
import Media from "../../models/Media"
import Category from "../../models/Category";
import Variant from "../../models/Variant";

export default {
  Query: {
    product: async (_parent, _args, _context, _info) => {
      try{
        const product = await Product.findById(_args._id)
        return product
      } catch (e) {
        throw e;
      }
    },
    products: async (_parent, _args, _context, _info) => {
      try {
        const { input } = _args;

        const limit = input.limit || 6;
        const skip = input.skip || 0
        const filter = input.filter || {};

        const { name, category } = filter;


        const query = {};
    
        if (name) {
          query.name = { $regex: name, $options: 'i' };
        }
    
        if (category) {
          const selectedCategory = await Category.aggregate([
            { $match: { slug: category } },
            {
              $graphLookup: {
                from: 'categories',
                startWith: '$_id',
                connectFromField: '_id',
                connectToField: 'parent',
                as: 'childrenCategories',
              },
            },
            {
              $project: {
                categoryIds: {
                  $concatArrays: [
                    ['$_id'],
                    '$childrenCategories._id',
                  ],
                },
              },
            },
          ]);
        
          if (selectedCategory.length > 0) {
            query.category = { $in: selectedCategory[0].categoryIds };
          }
        }
    
      const [products, totalProducts] = await Promise.all([
        Product.find(query).skip(skip).limit(limit).lean(),
        Product.countDocuments(query)
      ]);
      return {
        products,
        totalProducts
      }
      } catch (e) {
        throw new Error('Failed to get products');
      }
    }
  },
  Product: {
    category: async (_parent, _args, _context, _info) => {
      try{
        const _id = _parent.category
        return await Category.findById(_id)
      } catch (e){
        throw new Error("Failed to get categories")
      }
    },
    variants: async (_parent, _args, _context, _info) => {
      try{
        const variantsdata = await Variant.find({product: _parent._id})
        return variantsdata
      } catch (e) {
        throw new Error("Failed to get pictures")
      }
    },
    pictures: async (_parent, _args, _context, _info) => {
      try{
        if(_parent.pictures && _parent.pictures.length > 0){
          const medias = await Media.find({_id: {$in: _parent.pictures}})
          return medias
        }
        return []
      } catch (e) {
        throw new Error("Failed to get pictures")
      }
    }
  },
  Mutation: {
    createProduct: async(_parent, _args, _context, _info) => {
      // Check if a category with the same title already exists
      const existingProduct = await Product.findOne({ name: _args.input.name });
      if (existingProduct) {
        throw new Error('Product with this name already exists.');
      }
      const result = await Product.create({
        ..._args.input
      })
      return result
    },
    updateProduct: async(_parent, _args, _context, _info) => {
       // Check if a category with the same title already exists
      const existingProduct = await Product.findOne({
        name: _args.input.name,
        _id: { $ne: _args._id }, // Exclude the current category from the check
      });

      if (existingProduct) {
        throw new Error('Category with this title already exists');
      }
      const result = await Product.findByIdAndUpdate({_id:_args._id}, {$set: {..._args.input}});
      return result
    },
    deleteProduct: async (_parent, _args, _context, _info) => {
      await Product.findByIdAndDelete({_id:_args._id})
      return "Successfully Removed"
    }
  }
};