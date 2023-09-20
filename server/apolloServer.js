import { ApolloServer } from 'apollo-server-micro';
import { MongoClient } from 'mongodb';
import { schema } from './schemas';
require('dotenv').config()


let db = null;

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI);
        await dbClient.connect();
        db = dbClient.db('myluminary_db');
      } catch (e) {
        console.log('--->error while connecting with graphql context (db)', e);
      }
    }
    return { db };
  },
});


export default apolloServer