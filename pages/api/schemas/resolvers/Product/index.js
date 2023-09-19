export default {
  Query: {
    products: async (_parent, _args, _context, _info) => {
      try {
        const products = await _context.db.collection("products").find().toArray();
        console.log(products);
        return products;
      } catch (e) {
        throw e;
      }
    },
  },
  Product: {
    categories: async (parent, _args, _context, _info) => {
      try {
        const categoryIds = parent.categories;
        const categories = await _context.db
          .collection("categories")
          .find({ _id: { $in: categoryIds } })
          .toArray();
        return categories;
      } catch (e) {
        throw e;
      }
    },
    pictures: async (parent, _args, _context, _info) => {
      try {
        const pictureIds = parent.pictures;
        const pictures = await _context.db
          .collection("media")
          .find({ _id: { $in: pictureIds } })
          .toArray();
        return pictures;
      } catch (e) {
        throw e;
      }
    },
    small_pictures: async (parent, _args, _context, _info) => {
      try {
        const smallPictureIds = parent.small_pictures;
        const smallPictures = await _context.db
          .collection("media")
          .find({ _id: { $in: smallPictureIds } })
          .toArray();
        return smallPictures;
      } catch (e) {
        throw e;
      }
    },
    large_pictures: async (parent, _args, _context, _info) => {
      try {
        const largePictureIds = parent.large_pictures;
        const largePictures = await _context.db
          .collection("media")
          .find({ _id: { $in: largePictureIds } })
          .toArray();
        return largePictures;
      } catch (e) {
        throw e;
      }
    },
  },
};