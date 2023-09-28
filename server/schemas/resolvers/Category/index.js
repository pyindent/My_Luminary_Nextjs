import Category from '~/server/schemas/models/Category'
import Media from '../../models/Media';

export default {
  Query: {
    category: async (_parent, _args, _context, _info) => {
      try {
        return await Category.findById(_args._id)
      } catch (e) {
        throw e;
      }
    },
    categories: async (_parent, _args, _context, _info) => {
      try {
        const categories = await Category.find()
        return categories;
      } catch (e) {
        throw e;
      }
    },
    sideCategories: async(_parent, _args, _context, _info) => {
      try {
        const categories = await Category.find({ parent: { $exists: false } });
        return categories
      } catch (e) {
        throw e;
      }
    },
  },
  Category: {
    children: async (parent, _args, _context, _info) => {
      try {
        const categories = await Category
          .find({ parent: parent._id })
        return categories;
      } catch (e) {
        throw e;
      }
    },
    parent: async (parent, _args, _context, _info) => {
      try {
        const category = await Category
          .find({ _id: parent.parent})
        return category[0];
      } catch (e) {
        throw e;
      }
    },
    picture: async (parent, _args, _context, _info) => {
      try{
        if (parent.picture){
          const media = await Media.findById({_id:parent.picture})
          return media
        }
        return null
      } catch (e) {
        throw e;
      }
    }
  },
  Mutation: {
    createCategory: async (_parent, _args, _context, _info) => {

      // Check if a category with the same title already exists
      const existingCategory = await Category.findOne({ title: _args.input.title });
      if (existingCategory) {
        throw new Error('Category with this title already exists.');
      }

      const newCategory = await Category.create({
        ..._args.input
      })
      return newCategory
    },
    updateCategory: async(_parent, _args, _context, info) => {

       // Check if a category with the same title already exists
       const existingCategory = await Category.findOne({
        title: _args.input.title,
        _id: { $ne: _args._id }, // Exclude the current category from the check
      });
      
      if (existingCategory) {
        throw new Error('Category with this title already exists');
      }

      const result = await Category.findByIdAndUpdate({_id:_args._id}, {$set:{..._args.input} })
      return result
    },
    deleteCategory: async (_parent, _args, _context, _info) => {
      const deletedCategory = await Category.findByIdAndDelete({_id:_args._id})
      return deletedCategory
    }
  }
}