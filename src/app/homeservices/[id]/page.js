import { auth } from "@/auth";
import { getServiceById } from "@/data/homeservices";
import {getUsersByService } from "@/queries/users";
import Link from "next/link";

const ServiceDetailsPage = async ({ params: { id } }) => {
  const service = await getServiceById(id);
  const session = await auth();

  // Fetch users offering this service
  const workers = await getUsersByService(service.name);

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <p className="text-5xl">{service.image}</p>
      <p className="text-3xl font-bold">{service.name}</p>
      <p className="my-3">{service.details}</p>

      {/* Display Workers */}
      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Available Workers</h2>
        {workers.length > 0 ? (
          <ul className="space-y-4">
            {workers.map((worker) => (
              <li key={worker._id} className="border p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold">{worker.username}</p>
                <p>Email: {worker.email}</p>
                <p>Phone: {worker.phone}</p>
                {/* <p>Category: {worker.category}</p> */}
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
