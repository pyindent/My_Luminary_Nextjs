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
  Category: {
    children: async (parent, _args, _context, _info) => {
      try {
        const categories = await _context.db
          .collection("categories")
          .find({ parent: parent._id })
          .toArray();
        return categories;
      } catch (e) {
        throw e;
      }
    },
    parent: async (parent, _args, _context, _info) => {
      try {
        const category = await _context.db
          .collection("categories")
          .find({ _id: parent.parent})
          .toArray();
        return category[0];
      } catch (e) {
        throw e;
      }
    }
  }
}