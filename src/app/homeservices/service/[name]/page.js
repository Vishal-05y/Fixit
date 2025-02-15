import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import { getServiceByName } from "@/data/homeservices";
import { getUsersByEmail } from "@/queries/users";
import Link from "next/link";

const ServiceDetailsPage = async ({ params }) => {
    const session = await auth();
    const loggedInUser = session?.user;

    console.log("Route Params:", params); // Debugging
    const { name } = params;

    if (!name) {
        return <p className="text-center text-red-500 p-8">Invalid service selection.</p>;
    }

    const service = getServiceByName(name);
    // console.log("Service Data:", service); 

    if (!service) {
        return <p className="text-center text-red-500 p-8">Currently, this service is not available.</p>;
    }

    let user = null;
    if (loggedInUser?.email) {
        user = await getUsersByEmail(loggedInUser.email);
    }

    return (
        <div className="flex flex-col justify-center items-center p-8 gap-5">
            <h1 className="text-3xl font-bold">{service.name}</h1>
            <p>{service.about}</p>
            <Link href={`/booking?service=${encodeURIComponent(service.name)}`} className="bg-slate-500 text-white px-4 py-2 rounded">
                Book Service
            </Link>

        </div>
    );
};

export default ServiceDetailsPage;


