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
  darkMode: {
    type: Boolean,
    default: true,
  },
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  // probably change this to settings
});

export default mongoose.models.User || mongoose.model("User", userSchema);
