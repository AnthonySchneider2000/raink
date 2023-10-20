import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true, // remove whitespace
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
