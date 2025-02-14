"use client";
import { useSearchParams } from "next/navigation";
import { getServicesByCategory } from "@/data/homeservices";
import Link from "next/link";

const CategoryServicesPage = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    if (!category) {
        return <p className="text-center p-8 text-xl">Invalid category selected.</p>;
    }

    const services = getServicesByCategory(category);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{category}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <Link key={service.name} href={`/homeservices/service/${encodeURIComponent(service.name)}`}>
                    <div className="bg-white shadow-lg rounded-2xl p-4 text-center transform transition duration-300 hover:scale-105 cursor-pointer">
                        <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                </Link>                
                ))}
            </div>
        </div>
    );
};

export default CategoryServicesPage;


