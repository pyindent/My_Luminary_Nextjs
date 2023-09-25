import Product from "../../models/Product"
import Media from "../../models/Media"
import Category from "../../models/Category";

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
        const { limit = 10, skip = 0, filter = {} } = input;
        const { name, category } = filter;

        const query = {};
    
        if (name) {
          query.name = { $regex: name, $options: 'i' };
        }
    
        if (category) {
          query.category = category;
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
      const result = await Product.create({
        ..._args.input
      })
      return result
    },
    updateProduct: async(_parent, _args, _context, _info) => {
      const result = await Product.findByIdAndUpdate({_id:_args._id}, {$set: {..._args.input}});
      return result
    },
    deleteProduct: async (_parent, _args, _context, _info) => {
      await Product.findByIdAndDelete({_id:_args._id})
      return "Successfully Removed"
    }
  }
};