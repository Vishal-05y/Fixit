import { Booking } from "@/model/booking-model";

export async function createBooking(booking) {
  try{
    await Booking.create(booking);
  } catch(e){
    throw new Error(e)
  }
}

// Get user from database by service
// export const getUsersByService = async (serviceName) => {
//   return await User.find({ service: serviceName }).select("-password").lean();
// };


// export async function getUserByEmail(email) {
//   return await User.findOne({ email }).select("-password").lean();
// }

// export async function updateUser(userEmail, updatedData) {
//   return await User.findOneAndUpdate({ email: userEmail }, updatedData, { new: true });
// }
