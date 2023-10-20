import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  },
  description: String,
  image: String,
  nextItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  previousItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
});

export default mongoose.models.Item || mongoose.model("Item", itemSchema);
