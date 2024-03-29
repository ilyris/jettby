import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(NEXT_PUBLIC_MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("jettby");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
