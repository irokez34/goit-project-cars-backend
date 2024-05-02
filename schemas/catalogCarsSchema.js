import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  // id: {
  //   type: Number,
  //   required: [true, "_id is required"],
  //   unique: true,
  // },
  // price: {
  //   type: Number,
  //   required: [true, "price is required"],
  // },
  // favorite: {
  //   type: Boolean,
  //   default: false,
  // },
  // rating: {
  //   type: Number,
  //   required: [true, "rating is required"],
  // },
  // location: {
  //   type: String,
  //   required: [true, "location is required"],
  // },
  // adults: {
  //   type: Number,
  //   required: [true, "adults is required"],
  // },
  // children: {
  //   type: Number,
  //   required: [true, "children is required"],
  // },
  // children: {
  //   type: Number,
  //   required: [true, "children is required"],
  // },
});
export default mongoose.model("Catalog", catalogSchema);

