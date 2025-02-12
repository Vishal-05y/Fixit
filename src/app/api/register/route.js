import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";

import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";

export const POST = async (request) => {
  const {username, email, phone, password, street, city, state, category, service} = await request.json();
  console.log(username, email, password);

  // Create a DB Conenction
  await dbConnect();
  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5);
  // Form a DB payload
  const newUser = {
    username, 
    email, 
    phone, 
    password: hashedPassword,
    street, 
    city, 
    state,
    category,
    service
  }
  // Update the DB
  try {
    await createUser(newUser);
  } catch (err) {
    return new NextResponse(err.mesage, {
      status: 500,
    });
  }

  return new NextResponse("User has been created", {
    status: 201,
  });

 }