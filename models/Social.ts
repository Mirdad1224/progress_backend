import mongoose from "mongoose";

const socialSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  profileUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default mongoose.model("Social", socialSchema);
