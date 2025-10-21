import { Schema } from "mongoose";

interface User {
  name: string;
  email?: string;
  password?: string;
}

const userScheema = new Schema({
  name: { type: String, required: true },
});
