import mongoose from "mongoose";
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["new User", "old User", "pro User"],
    default: "new User",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
  },
  id: {
    type: String,
  },
  // verify: {
  //   type: Boolean,
  //   default: false,
  // },
  // verificationToken: {
  //   type: String,
  //   required: [true, "Verify token is required"],
  // },
});

export default mongoose.model("User", userSchema);
