import { MongoClient } from "mongodb";

// var mongoose = require("mongoose");
// const Listing = mongoose.models.listing;

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URL);
  const db = client.db();
  const listing = db.collection("listing");
  let { make, model, price, distance, zipcode } = req.body;
  let defaultPrice: string = "0 - 100000";

  let pricesArr =
    price !== "no price" ? price.split(" ") : defaultPrice.split(" ");
  const sanitizedPricesArr = pricesArr.filter((price) => price !== "-");
  const minPrice = Number(sanitizedPricesArr[0].replace(/\D/g, "")) || 0;
  const maxPrice = Number(sanitizedPricesArr[1].replace(/\D/g, "")) || 100000;

  make = make.toUpperCase();
  model = model.toUpperCase();

  const obj = {
    ...(make !== "ALL" && { make }),
    ...(!model.includes("ALL") && { model }),
    ...{
      listing_price: {
        $gte: minPrice,

        $lte: maxPrice,
      },
    },
    ...(zipcode !== undefined && { zip_code: zipcode }),
    // ...{ distance },
  };
  console.log(obj);
  try {
    let result = await listing.find(obj).toArray();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
