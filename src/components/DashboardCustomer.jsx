import { auth } from "@/auth";
import { getUsersByEmail } from "@/queries/users";
import { getBookingsByEmail } from "@/queries/bookings";

const DashboardCustomer = async () => {
    const session = await auth();
    const loggedInUser = session?.user;

    if (!loggedInUser) {
        return <p className="text-center text-red-500 text-lg font-semibold">Sign in to view your dashboard</p>;
    }

    const user = await getUsersByEmail(loggedInUser.email);
    const bookings = await getBookingsByEmail(user.email, null);

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
                            <img src="/address.png" className="w-6 h-6" />
                            <strong className="text-gray-300">Address :</strong> {user.street}, {user.city}, {user.state}
                        </li>
                    </ul>
                </div>

                <div className="pt-10">
                    <h2 className="text-2xl font-semibold text-gray-300 mb-4">Bookings</h2>
                    {bookings.length > 0 ? (
                        <div className="space-y-4">
                            {bookings.map((booking, index) => (
                                <div key={index} className="flex flex-col p-4 border-l-4 border-gray-400 bg-gray-700 rounded-lg shadow gap-4">
                                    <p className="text-lg font-medium text-gray-300"><strong>Service Name : </strong>{booking.service}</p>
                                    <p className="text-gray-400">Booking Date : {new Date(booking.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-2xl text-gray-400 text-center">You have no bookings yet</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardCustomer;
