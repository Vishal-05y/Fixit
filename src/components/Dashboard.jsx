// import { auth } from "@/auth";
// import { getUserByEmail } from "@/queries/users";
// import { getBookingsByEmail } from "@/queries/bookings";

// const Dashboard = async () => {

//     const session = await auth();
//     const loggedInUser = session?.user;
    
//     const user = await getUserByEmail(loggedInUser.email);
//     const booking = await getBookingByEmail(loggedInUser.email);

//   return (
//     <div className="flex flex-col justify-center items-center p-8">
//       {/* Display Workers */}
//       <div className="mt-6 w-full max-w-2xl">
//           <ul className="space-y-4">
//             {loggedInUser? (
//               <>
//               <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Profile</h1>
//                 <li className="border p-4 rounded-lg shadow-md">
//                   <p>Email: {user.email}</p>
//                   <p>Username: {user.username}</p>
//                   <p>Phone: {user.phone}</p>
//                   {
//                     user.service ? (
//                       <>
//                         <p>Category: {user.category}</p>
//                         <p>Service: {user.service}</p>
//                       </>
//                     ) : (
//                       <>
//                         <p>Street: {user.street}</p>
//                         <p>City: {user.city}</p>
//                         <p>State: {user.state}</p>
//                       </>
//                     )
//                   }
//                 </li>
//                 <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Bookings</h1>
//                 <li className="border p-4 rounded-lg shadow-md">
//                   <p>Service: {booking.service}</p>
//                 </li>
//               </>
//             ):(
//                 <p>Sign in to view workers</p>
//             )}
//           </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";
import { getBookingsByEmail } from "@/queries/bookings";

const Dashboard = async () => {
    const session = await auth();
    const loggedInUser = session?.user;

    if (!loggedInUser) {
        return <p>Sign in to view your dashboard</p>;
    }

    const user = await getUserByEmail(loggedInUser.email);
    
    // Pass `user.service` for workers, `null` for customers
    const bookings = await getBookingsByEmail(user.email, user.service || null);

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <div className="mt-6 w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Profile</h1>
                <li className="border p-4 rounded-lg shadow-md">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    
                    {user.service ? (
                        <>
                            <p><strong>Category:</strong> {user.category}</p>
                            <p><strong>Service:</strong> {user.service}</p>
                        </>
                    ) : (
                        <>
                            <p><strong>Street:</strong> {user.street}</p>
                            <p><strong>City:</strong> {user.city}</p>
                            <p><strong>State:</strong> {user.state}</p>
                        </>
                    )}
                </li>


                <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">
                    {user.service ? "Orders" : "Bookings"}
                </h1>
                {user.service ? (
                    // If Worker, show all customers who booked this service
                    bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                            <li key={index} className="border p-4 rounded-lg shadow-md">
                                <p><strong>Customer:</strong> {booking.username}</p>
                                <p><strong>Email:</strong> {booking.email}</p>
                                <p><strong>Phone:</strong> {booking.phone}</p>
                                <p><strong>Address:</strong> {booking.street}, {booking.city}, {booking.state}</p>
                                {/* <p><strong>Booking Date:</strong> {new Date(booking.date).toLocaleDateString()}</p> */}
                            </li>
                        ))
                    ) : (
                        <p>No customers have booked your service yet.</p>
                    )
                ) : (
                    // If Customer, show their booked services
                    bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                            <li key={index} className="border p-4 rounded-lg shadow-md">
                                <p><strong>Service:</strong> {booking.service}</p>
                                <p><strong>Booking Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                            </li>
                        ))
                    ) : (
                        <p>You have no bookings yet.</p>
                    )
                )}
            </div>
        </div>
    );
};


export default Dashboard;

