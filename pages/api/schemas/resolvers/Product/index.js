export default {
    Query: {
      async products(_parent, _args, _context, _info) {
        try {
          const productsCollection = _context.db.collection('products');
          const products = await productsCollection.find().toArray();
          return products;
        } catch (e) {
          console.log('---> error while querying the users collection', e);
          throw e;
        }
      },
    },
  }
  