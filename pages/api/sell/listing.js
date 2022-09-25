// import nextConnect from "next-connect";
// import middleware from "../../middleware/database";

const router = require("express").Router();
const Listing = require("../models/Listing");

// const handler = nextConnect();

// handler.use(middleware);

// handler.get(async (req, res) => {
//   let doc = await req.db.collection("daily").findOne();
//   console.log(doc);
//   res.json(doc);
// });

// export default handler;

// update listing
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedMeetup = await Course.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedMeetup);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Deleting a course
// router.delete("/:id", async (req, res) => {
//   try {
//     await Meetup.findByIdAndDelete(req.params.id);
//     res.status(200).json("Meetup has been deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
