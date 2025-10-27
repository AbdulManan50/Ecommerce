import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  googleId?: string;
  githubId?: string;
  image?: string;
}

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: function () {
        return !this.googleId && !this.githubId; 
      },
    },
    image: { type: String },
    googleId: { type: String },
    githubId: { type: String },
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", userSchema);

export default User;
