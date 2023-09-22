import Category from '~/server/schemas/models/Category'

export default {
  Query: {
    categories: async (_parent, _args, _context, _info) => {
      try {
        const categories = await Category.find()
        return categories;
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
    }
  },
  Mutation: {
    createCategory: async (_parent, _args, _context, _info) => {
      const newCategory = await Category.create({
        title: _args.input.title,
        description: _args.input.description,
        parent: _args.input.parentId,
        status: _args.input.status,
        slug: _args.input.slug
      })
      return newCategory
    },
    updateCategory: async(_parent, _args, _context, info) => {
      const result = await Category.findByIdAndUpdate({_id:_args._id}, {$set:{..._args.input} })
      return result
    },
    deleteCategory: async (_parent, _args, _context, _info) => {
      const newCategory = await Category.findByIdAndDelete({_id:_args._id})
      return newCategory
    }
  }
}