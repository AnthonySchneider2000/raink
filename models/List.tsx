import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  private: {
    type: Boolean,
    default: false,
  },
  description: String,
  image: String,
  firstItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
});

export default mongoose.models.List || mongoose.model("List", listSchema);