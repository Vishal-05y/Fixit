import { auth } from "@/auth";
import { getUsersByEmail } from "@/queries/users";
import { getBookingsByEmail } from "@/queries/bookings";

const DashboardEmployee = async () => {
    const session = await auth();
    const loggedInUser = session?.user;

    if (!loggedInUser) {
        return <p>Sign in to view your dashboard</p>;
    }

    const user = await getUsersByEmail(loggedInUser.email);
    
    if (!user.service) {
        return <p>You are not registered as a worker.</p>;
    }

    // Get bookings for this worker's service
    const bookings = await getBookingsByEmail(null, user.service);

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <div className="mt-6 w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Worker Dashboard</h1>
                <li className="border p-4 rounded-lg shadow-md">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Category:</strong> {user.category}</p>
                    <p><strong>Service:</strong> {user.service}</p>
                </li>

                <h1 className="text-3xl font-bold mt-6 mb-4 text-center text-slate-700">Orders</h1>
                {bookings.length > 0 ? (
                    bookings.map((booking, index) => (
                        <li key={index} className="border p-4 rounded-lg shadow-md mb-4">
                            <p><strong>Customer:</strong> {booking.username}</p>
                            <p><strong>Email:</strong> {booking.email}</p>
                            <p><strong>Phone:</strong> {booking.phone}</p>
                            <p><strong>Address:</strong> {booking.street}, {booking.city}, {booking.state}</p>
                            <p><strong>Booking Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                        </li>
                    ))
                ) : (
                    <p>No customers have booked your service yet.</p>
                )}
            </div>
        </div>
    );
};

export default DashboardEmployee;
