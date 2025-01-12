import { NextResponse } from "next/server";
import { createCustomer } from "@/queries/customers";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";

export const POST = async (request) => {
    //Extracting the data from the request
    const {username, email, phone, password, street, city, state} = await request.json();

    console.log(username, email, phone, password, street, city, state);

    //Creating a connection to the database
    await dbConnect();

    //Hashing the password
    const hashedPassword = await bcrypt.hash(password, 5);

    //Creating a new customer object
    const newCustomer = {
        username,
        email,
        phone,
        password: hashedPassword,
        street,
        city,
        state,
    };

    //Creating a new customer
    try{
        await createCustomer(newCustomer);
    }catch(error){
        return new NextResponse("An error occurred", {
            status: 500,
        });
    }

    //Returning a response
    return new NextResponse("User has been created", {
        status: 201,
    });
}


// import { NextResponse } from "next/server";
// import { createCustomer } from "@/queries/customers";
// import bcrypt from "bcryptjs";
// import { dbConnect } from "@/lib/mongo";

// export const POST = async (request) => {
//     try {
//         // Extracting the data from the request
//         const { username, email, phone, password, street, city, state } = await request.json();

//         console.log("Received data:", { username, email, phone, password, street, city, state });

//         // Creating a connection to the database
//         await dbConnect();
//         console.log("Database connected");

//         // Hashing the password
//         const hashedPassword = await bcrypt.hash(password, 10);
//         console.log("Password hashed");

//         // Creating a new customer object
//         const newCustomer = {
//             username,
//             email,
//             phone,
//             password: hashedPassword,
//             street,
//             city,
//             state,
//         };

//         // Saving the new customer to the database
//         const customer = await createCustomer(newCustomer);
//         console.log("Customer created:", customer);

//         return NextResponse.json({ success: true, customer }, { status: 201 });
//     } catch (error) {
//         console.error("Error in POST /api/signupcustomer:", error);
//         return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//     }
// };