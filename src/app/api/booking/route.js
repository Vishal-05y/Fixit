import { NextResponse } from "next/server";
import { createBooking } from "@/queries/bookings";

import { dbConnect } from "@/lib/mongo";

export const POST = async (request) => {
  const {username, email, phone, password, street, city, state,  service} = await request.json();
  // console.log(username, email, password);

  // Create a DB Conenction
  await dbConnect();

  // Form a DB payload
  const newBooking = {
    username, 
    email, 
    phone,
    street, 
    city, 
    state,
    service
  }
  // Update the DB
  try {
    await createBooking(newBooking);
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }

  return new NextResponse("User has been created", {
    status: 201,
  });

 }



