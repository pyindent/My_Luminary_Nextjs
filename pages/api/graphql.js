import { ApolloServer } from 'apollo-server-micro';
import { MongoClient } from 'mongodb';
import { schema } from './schemas';

require('dotenv').config()


let db = null

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI)
        console.log(process.env.MONGO_DB_URI)
        await dbClient.connect()
        db = dbClient.db('myluminary_db')
      } catch (e) {
        console.log('--->error while connecting with graphql context (db)', e)
      }
    }

    return { db }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = apolloServer.start();

export default async function handler(req, res) {

  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql/",
  })(req, res);
}
