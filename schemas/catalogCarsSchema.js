import mongoose from "mongoose";
import User from "./userSchema.js";

const catalogSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  _id: { type: String, required: [true, "_id is required"] },
  price: { type: Number, required: [true, "price is required"] },
  favorite: { type: Boolean, default: false },
  rating: { type: Number, required: [true, "rating is required"] },
  location: { type: String, required: [true, "location is required"] },
  adults: { type: Number, required: [true, "adults is required"] },
  children: { type: Number, required: [true, "children is required"] },
  engine: { type: String, required: [true, "engine is required"] },
  transmission: String,
  form: String,
  length: String,
  width: String,
  height: String,
  tank: String,
  consumption: String,
  description: String,
  details: Object,
  gallery: { type: [String], default: [] },
  reviews: { type: [String], default: [] },
});
export default mongoose.model("Catalog", catalogSchema);

// engine
// petrol

// String
// transmission
// automatic

// String
// form
// alcove

// String
// length
// 7.3m

// String
// width
// 2.65m

// String
// height
// 3.65m

// String
// tank
// 208l

// String
// consumption
// 30l/100km

// String
// description
// Embark on an unforgettable journey with the Road Bear C 23-25, an epitome of comfort and convenience on wheels. This alcove-style motorhome is meticulously designed to cater to the needs of families and small groups, ensuring a seamless and enjoyable road trip experience. The sleek exterior houses a spacious and thoughtfully laid out interior, making it your home away from home. The Road Bear C 23-25 boasts a stylish and modern design, coupled with top-notch amenities to enhance your travel adventures. The interior is not only aesthetically pleasing but also functional, providing ample living and sleeping space. Whether you're cruising along scenic highways or parked in a picturesque campsite, this RV offers the perfect blend of functionality and comfort. Inside, you'll find a fully equipped kitchen, complete with a refrigerator, microwave, and a three-burner hob, allowing you to prepare delicious meals on the go. The bathroom is fitted with a shower and toilet, ensuring you have the convenience of home wherever your travels take you. The sleeping quarters are designed for relaxation, with three comfortable beds to accommodate both adults and children. Additional features include air conditioning, a TV, CD player, radio, and ample storage space for all your travel essentials. The Road Bear C 23-25 is equipped with a 35kg gas supply for cooking, and a water tank with a capacity of 151 liters to meet your daily needs. Fuelled by petrol and featuring an automatic transmission, this motorhome is not only easy to drive but also fuel-efficient, allowing you to focus on enjoying the journey rather than worrying about logistics. Create lasting memories with your loved ones as you navigate the roads in the Road Bear C 23-25. It's not just an RV; it's a mobile sanctuary for your adventures, promising comfort, style, and the freedom to explore at your own pace.

// String

// details
// Object

// Object

// gallery
// Array (3)

// Array

// reviews
// Array (2)
