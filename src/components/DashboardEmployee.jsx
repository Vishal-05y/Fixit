import { auth } from "@/auth";
import { getUsersByEmail } from "@/queries/users";
import { getBookingsByEmail } from "@/queries/bookings";

const DashboardEmployee = async () => {
    const session = await auth();
    const loggedInUser = session?.user;

    if (!loggedInUser) {
        return <p className="text-center text-red-500 text-lg font-semibold">Sign in to view your dashboard</p>;
    }

    const user = await getUsersByEmail(loggedInUser.email);
    
    if (!user.service) {
        return <p className="text-center text-yellow-400 text-lg font-semibold">You are not registered as a worker.</p>;
    }

    // Get bookings for this worker's service
    const bookings = await getBookingsByEmail(null, user.service);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-800 p-8">
            <div className="w-full max-w-4xl bg-gray-800">
                <h1 className="text-2xl font-semibold text-gray-300 mb-4">Profile</h1>
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <ul className="flex flex-col text-lg gap-4 text-gray-400">
                        <li className="flex items-center gap-3">
                            <img src="/username.png" className="w-6 h-6" />
                            <strong className="text-gray-300">Username :</strong> {user.username}
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/email.png" className="w-6 h-6" />
                            <strong className="text-gray-300">Email :</strong> {user.email}
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/phone.png" className="w-6 h-6" />
                            <strong className="text-gray-300">Phone :</strong> {user.phone}
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/category.png" className="w-6 h-6" />
                            <strong className="text-gray-300">Category :</strong> {user.category}
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/service.png" className="w-6 h-6" />
                            <strong className="text-gray-300">Service :</strong> {user.service}
                        </li>
                    </ul>
                </div>

                <div className="pt-10">
                    <h2 className="text-2xl font-semibold text-gray-300 mb-4">Orders</h2>
                    {bookings.length > 0 ? (
                        <div className="space-y-4">
                            {bookings.map((booking, index) => (
                                <div key={index} className="flex flex-col p-4 border-l-4 border-gray-400 bg-gray-700 rounded-lg shadow gap-4">
                                    <p className="text-lg font-medium text-gray-300"><strong>Customer Name : </strong>{booking.username}</p>
                                    <p className="text-gray-400"><strong>Email :</strong> {booking.email}</p>
                                    <p className="text-gray-400"><strong>Phone :</strong> {booking.phone}</p>
                                    <p className="text-gray-400"><strong>Address :</strong> {booking.street}, {booking.city}, {booking.state}</p>
                                    <p className="text-gray-400"><strong>Booking Date :</strong> {new Date(booking.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-2xl text-gray-400 text-center">No customers have booked your service yet</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardEmployee;
