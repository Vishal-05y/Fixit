"use client";
import { useSearchParams } from "next/navigation";
import { getServicesByCategory } from "@/data/homeservices";
import Link from "next/link";

const CategoryServicesPage = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    if (!category) {
        return <p className="text-center p-8 text-xl dark:text-gray-200">Invalid category selected.</p>;
    }

    const services = getServicesByCategory(category);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6 transition-colors duration-300">
            <div className="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-6 w-full max-w-5xl transition-colors duration-300">
                {/* Responsive Heading */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 dark:text-gray-200 break-words">
                    {category.toUpperCase()}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <Link key={service.name} href={`/homeservices/service/${encodeURIComponent(service.name)}`}>
                            <div className="w-full bg-gray-50 dark:bg-gray-600 shadow-md rounded-2xl p-4 sm:p-6 text-center transform transition duration-300  hover:shadow-lg cursor-pointer flex flex-col h-full">
                                <h2 className="text-lg sm:text-xl font-semibold dark:text-gray-300 mb-2 sm:mb-4">
                                    {service.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryServicesPage;
