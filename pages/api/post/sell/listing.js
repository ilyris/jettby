import { MongoClient } from "mongodb";

// var mongoose = require("mongoose");
// const Listing = mongoose.models.listing;

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URL);
  const db = client.db();
  const listing = db.collection("listing");

  const cloudinaryUrls = req.body.cloudImgs.map((img) => img.secure_url);
  const body = { ...req.body.formState, cloudinary_urls: cloudinaryUrls };
  // create listing

  // const savedListing = await newListing.save();
  // console.log(savedListing);
  try {
    // console.log(body);
    const result = await listing.insertOne(body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
