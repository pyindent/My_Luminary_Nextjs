import { ApolloServer } from 'apollo-server-micro';
import { schema } from './schemas';


const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    // if (!db) {
    //   try {
    //     const dbClient = new MongoClient(process.env.MONGO_DB_URI);
    //     await dbClient.connect();
    //     db = dbClient.db('myluminary_db');
    //   } catch (e) {
    //     console.log('--->error while connecting with graphql context (db)', e);
    //   }
    // }
    // return { db };
    return {context: "context"};
  },
});


export default apolloServer