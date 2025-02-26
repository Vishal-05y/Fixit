import { AcceptedBooking } from "@/model/acceptedBooking-model";

export async function createAcceptedBooking(acceptedBooking) {
  try{
    await AcceptedBooking.create(acceptedBooking);
  } catch(e){
    throw new Error(e)
  }
}


export const getAcceptedBookingsByEmail = async (email, service) => {
  try {
      const bookings = await AcceptedBooking.find({ employeeEmail: email, service }).lean();
      return bookings;
  } catch (error) {
      console.error("Error fetching accepted bookings:", error);
      return [];
  }
};

