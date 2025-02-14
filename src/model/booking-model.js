// import mongoose, { Schema } from "mongoose";
// // import dbConnect from "@/lib/mongo";

// // await dbConnect();

// const bookingSchema = new Schema({
//   username: { required: true, type: String,},
//   email: { required: true,type: String,},
//   phone: { required: true,type: String,},
//   street: { type: String },
//   city: { type: String },
//   state: { type: String },
//   service: { type: String },
// });

// export const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);


import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  username: { required: true, type: String },
  email: { required: true, type: String },
  phone: { required: true, type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  service: { type: String },
  // date: { type: Date, default: Date.now } // ✅ Add date field
});

export const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
