import mongoose, { Schema } from "mongoose";
// import dbConnect from "@/lib/mongo";

// await dbConnect();

const userSchema = new Schema({
  username: { required: true, type: String,},
  password: { required: true, type: String,},
  email: { required: true,type: String,},
  phone: { required: true,type: String,},
  street: { type: String },
  city: { type: String },
  state: { type: String },
  category: { type: String },
  service: { type: String },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);