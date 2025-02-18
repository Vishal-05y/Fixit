"use client";

import { getAllServiceCategories, getServicesByCategory } from "@/data/homeservices";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ServiceList = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    const categories = getAllServiceCategories();
    
    let categoryServices = {};
    if (category) {
        categoryServices[category] = getServicesByCategory(category);
    } else {
        categories.forEach(cat => {
            categoryServices[cat] = getServicesByCategory(cat);
        });
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 ">
            <div className="bg-white dark:bg-gray-800 p-6 w-full max-w-5xl rounded-xl">
                {/* Responsive Heading */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 dark:text-gray-300 break-words">
                    SERVICE CATEGORIES
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <Link key={cat} href={`/homeservices/category/services?category=${encodeURIComponent(cat)}`}>
                            <div className="w-full dark:bg-gray-700 shadow-md rounded-2xl p-4 sm:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col h-full">
                                <h2 className="text-xl font-semibold  dark:text-gray-300 mb-2 sm:mb-4">
                                    {cat}
                                </h2>
                                {/* No Scrollbar on Large Screens & Equal Height */}
                                <div className="flex-grow">
                                    {categoryServices[cat].map((service) => (
                                        <p key={service.name} className=" dark:text-gray-400 text-sm sm:text-base">
                                            {service.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
