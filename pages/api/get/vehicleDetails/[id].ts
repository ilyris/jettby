import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URL);
  const db = client.db();
  const listing = db.collection("listing");

  try {
    const { id } = req.query;
    console.log(id);
    const result = await listing.find({ _id: new ObjectId(id) }).toArray();
    console.log(result);
    res.status(200).json(result[0]);
  } catch (err) {
    res.status(500).json(err);
  }
}

// get listings

// specific listing
//   router.get("/find/:listingId", async (req, res) => {
//     try {
//       const meetup = await Meetup.findById(req.params.meetupId);
//       res.status(200).json(meetup);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
