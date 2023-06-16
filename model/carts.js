const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    min: [0, " < min price "],
    required: true,
  },
  discountPercentage: Number,
  rating: {
    type: Number,
    min: [0, " < min rate "],
    max: [5, " >  max rate"],
    required: true,
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Cart = mongoose.model("Cart", cartSchema);
