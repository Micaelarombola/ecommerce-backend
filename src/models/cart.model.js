import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    products: { type: Array, default: [] }
  },
  { timestamps: true }
);

export const CartModel = mongoose.model("Carts", cartSchema);
