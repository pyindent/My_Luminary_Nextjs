import Cors from "micro-cors";
import apolloServer from "../../server/apolloServer";

const cors = Cors();

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  try {

    if (req.method === "OPTIONS") {
      res.end();
      return false;
    }

    await startServer;

    return await apolloServer.createHandler({
      path: "/api/graphql/",
    })(req, res);
    
  } catch (e) {
    console.log('--->error while creating Apollo server handler', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});