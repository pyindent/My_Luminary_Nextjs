export const resolvers = {
    Query: {
      async users(_parent, _args, _context, _info) {
        try {
          const usersCollection = _context.db.collection('users');
          const users = await usersCollection.find().toArray();
          return users;
        } catch (e) {
          console.log('---> error while querying the users collection', e);
          throw e;
        }
      },
    },
  }
  