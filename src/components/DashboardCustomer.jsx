import { auth } from "@/auth";
import { getUsersByEmail } from "@/queries/users";
import { getBookingsByEmail } from "@/queries/bookings";

const DashboardCustomer = async () => {
    const session = await auth();
    const loggedInUser = session?.user;

    if (!loggedInUser) {
        return <p>Sign in to view your dashboard</p>;
    }

    const user = await getUsersByEmail(loggedInUser.email);
    
    // Fetch only customer's bookings
    const bookings = await getBookingsByEmail(user.email, null);

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <div className="mt-6 w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Profile</h1>
                <li className="border p-4 rounded-lg shadow-md">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Street:</strong> {user.street}</p>
                    <p><strong>City:</strong> {user.city}</p>
                    <p><strong>State:</strong> {user.state}</p>
                </li>

                <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Bookings</h1>
                {bookings.length > 0 ? (
                    bookings.map((booking, index) => (
                        <li key={index} className="border p-4 rounded-lg shadow-md">
                            <p><strong>Service:</strong> {booking.service}</p>
                            <p><strong>Booking Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                        </li>
                    ))
                ) : (
                    <p>You have no bookings yet.</p>
                )}
            </div>
        </div>
    );
};

export default DashboardCustomer;
