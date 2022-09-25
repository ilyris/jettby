const mongoose = require("mongoose");

const ListingSchema = mongoose.Schema(
  {
    // Step 1 during listing car process
    // createdById: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    mileage: { type: String, required: true },
    zip_code: { type: String, required: true },
    exterior_color: { type: String, required: false },
    interior_color: { type: String, required: false },

    // Step 2
    origional_owner: { type: Boolean, required: true },
    drivetrain: { type: String, required: true },
    transmission: { type: String, required: true },
    engine: { type: String, required: true },

    //Step 3
    convience_options: { type: Array, required: false },
    entertainment_options: { type: Array, required: false },
    exterior_options: { type: Array, required: false },
    saftey_options: { type: Array, required: false },
    seating_options: { type: Array, required: false },

    // Step 4
    listing_price: { type: String, required: true },
    additional_information: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("listing", ListingSchema);
