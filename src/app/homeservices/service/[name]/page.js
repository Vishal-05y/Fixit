import { auth } from "@/auth";
import { getServiceByName } from "@/data/homeservices";
import { getUsersByService } from "@/queries/users";
import Link from "next/link";

const ServiceDetailsPage = async ({ params }) => {
    console.log("Route Params:", params); // Debugging line
    const { name } = params;

    if (!name) {
        return <p className="text-center text-red-500 p-8">Invalid service selection.</p>;
    }

    const service = getServiceByName(name);
    console.log("Service Data:", service); // Debugging line

    if (!service) {
        return <p className="text-center text-red-500 p-8">Currently Workers are not available</p>;
    }

    const session = await auth();
    const workers = await getUsersByService(service.name || "");

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl font-bold">{service.name}</h1>
            {/* <p className="my-3">Available Workers</p> */}

            <div className="mt-6 w-full max-w-2xl">
                <h2 className="text-2xl font-semibold mb-4">Available Workers</h2>
                {workers.length > 0 ? (
                    <ul className="space-y-4">
                        {workers.map((worker) => (
                            <li key={worker._id} className="border p-4 rounded-lg shadow-md">
                                <p className="text-lg font-semibold">{worker.username}</p>
                                <p>Email: {worker.email}</p>
                                <p>Phone: {worker.phone}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No workers available for this service.</p>
                )}
            </div>
        </div>
    );
};

export default ServiceDetailsPage;


