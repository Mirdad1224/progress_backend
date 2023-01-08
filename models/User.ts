import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 255,
  },
  roles: {
    type: [String],
    default: ["Employee"],
  },
  favorates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  basket: {
    totalAmount: {
      type: Number,
      default: 0,
    },
    totalQTY: {
      type: Number,
      default: 0,
    },
    cartItems: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        cartQuantity: {
          type: Number,
        },
      },
    ],
  },
  refreshToken: String,
});

export default mongoose.model("User", userSchema);
