import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    // required: s,
    type: String,
  },
  password: {
    // required: true,
    type: String,
  },
  email: {
    // required: true,
    type: String,
  },
  phone: {
    // required: true,
    type: String,
  },
  street: {
    // required: false,
    type: String,
  },
  city: {
    // required: false,
    type: String,
  },
  state: {
    // required: false,
    type: String,
  },
  category: {
    // required: false,
    type: String,
  },
  service: {
    // required: false,
    type: String,
  },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);