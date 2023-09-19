import Category from "../../models/Category"

export default {
  Query: {
    categories: async (_parent, _args, _context, _info) => {
      try {
        const categories = await Category.find().toArray()
        return categories;
      } catch (e) {
        throw e;
      }
    },
  },
}