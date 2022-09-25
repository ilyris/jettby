import { MongoClient } from "mongodb";

var mongoose = require("mongoose");
const Listing = mongoose.models.listing;

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URL);
  const db = client.db();
  const yourCollection = db.collection("listing");
  console.log(yourCollection);
  // create listing

  // const savedListing = await newListing.save();
  // console.log(savedListing);
  try {
    const newListing = new Listing(req.body.formState);
    const result = await yourCollection.insertOne(newListing);
    console.log({ result });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}
