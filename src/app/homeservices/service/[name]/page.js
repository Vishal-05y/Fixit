import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import { getServiceByName } from "@/data/homeservices";
import { getUserByEmail } from "@/queries/users";

const ServiceDetailsPage = async ({ params }) => {
    const session = await auth();
    const loggedInUser = session?.user;

    console.log("Route Params:", params); // Debugging
    const { name } = params;

    if (!name) {
        return <p className="text-center text-red-500 p-8">Invalid service selection.</p>;
    }

    const service = getServiceByName(name);
    console.log("Service Data:", service); // Debugging

    if (!service) {
        return <p className="text-center text-red-500 p-8">Currently, this service is not available.</p>;
    }

    let user = null;
    if (loggedInUser?.email) {
        user = await getUserByEmail(loggedInUser.email);
    }

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl font-bold">{service.name}</h1>

            {loggedInUser ? (
                user ? (
                    <div className="border p-6 rounded-lg shadow-md mt-6 bg-white w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">User Details</h2>
                        <p><span className="font-semibold">Email:</span> {user.email}</p>
                        <p><span className="font-semibold">Username:</span> {user.username}</p>
                        <p><span className="font-semibold">Phone:</span> {user.phone}</p>

                        {user.service ? (
                            <>
                                <p><span className="font-semibold">Category:</span> {user.category}</p>
                                <p><span className="font-semibold">Service:</span> {user.service}</p>
                            </>
                        ) : (
                            <>
                                <p><span className="font-semibold">Street:</span> {user.street}</p>
                                <p><span className="font-semibold">City:</span> {user.city}</p>
                                <p><span className="font-semibold">State:</span> {user.state}</p>
                            </>
                        )}
                    </div>
                ) : (
                    <p className="text-red-500 mt-4">User details not found.</p>
                )
            ) : (
                <div className="mt-6 text-center">
                    <p className="mb-3">Sign in to book this service.</p>
                    <SignIn />
                </div>
            )}
        </div>
    );
};

export default ServiceDetailsPage;


