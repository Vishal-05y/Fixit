import { Booking } from "@/model/booking-model";

export async function createBooking(booking) {
  try{
    await Booking.create(booking);
  } catch(e){
    throw new Error(e)
  }
}

// Get user from database by service
// export const getBookingsByService = async (serviceName) => {
//   return await Booking.find({ service: serviceName }).select("-password").lean();
// };

export const getBookingsByEmail = async (email, service = null) => {
  if (service) {
      // If user is a worker, fetch bookings where the service matches
      return await Booking.find({ service });
  } else {
      // If user is a customer, fetch bookings they made
      return await Booking.find({ email });
  }
};

// export async function updateUser(userEmail, updatedData) {
//   return await User.findOneAndUpdate({ email: userEmail }, updatedData, { new: true });
// }
