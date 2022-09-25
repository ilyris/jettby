const router = require("express").Router();
const Listing = require("../models/Listing");

// get listings
router.get("/", async (req, res) => {
  try {
    const meetups = await Meetup.find();
    res.status(200).json(meetups);
  } catch (err) {
    res.status(500).json(err);
  }
});

// specific listing
router.get("/find/:listingId", async (req, res) => {
  try {
    const meetup = await Meetup.findById(req.params.meetupId);
    res.status(200).json(meetup);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create listing
router.post("/", async (req, res) => {
  console.log(req.body);
  const newListing = new Listing(req.body);
  try {
    const savedListing = await newListing.save();
    res.status(200).json(savedListing);
  } catch (err) {
    res.status(500).json(err);
  }
});

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
