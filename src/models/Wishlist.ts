import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWishlist extends Document {
  userId: string;
  products: mongoose.Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const WishlistSchema = new Schema<IWishlist>(
  {
    userId: { type: String, required: true, unique: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

const Wishlist: Model<IWishlist> =
  mongoose.models.Wishlist || mongoose.model<IWishlist>("Wishlist", WishlistSchema);
export default Wishlist;
