export default {
  Query: {
    categories: async (_parent, _args, _context, _info) => {
      try {
        const categories = await _context.db.collection("categories").find().toArray()
        return categories;
      } catch (e) {
        throw e;
      }
    },
  },
}