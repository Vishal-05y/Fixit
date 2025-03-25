"use client";

import { getAllServiceCategories, getServicesByCategory } from "@/data/homeservices";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
};

const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.5,
            type: "spring",
            stiffness: 100
        } 
    }
};

const serviceImages = [
    "/beautyandwellness.jpg",
    "/homeservicess.jpg",
    "/domestichelp.jpg",
    "/professionalservices.jpg"
];

const ServiceList = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    const categories = getAllServiceCategories();
    const categoryServices = new Map();
    
    if (category) {
        categoryServices.set(category, getServicesByCategory(category));
    } else {
        categories.forEach(cat => {
            categoryServices.set(cat, getServicesByCategory(cat));
        });
    }

    return (
        <div className="flex justify-center items-center min-h-screen custom-bg_text p-4 overflow-hidden">
            <motion.div 
                className="custom-bg_text p-6 w-full max-w-5xl"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 
                    className="text-4xl sm:text-5xl font-extrabold text-center mb-10 
                    bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 
                    inline-block text-transparent bg-clip-text 
                    tracking-tight leading-tight 
                    dark:from-blue-400 dark:via-purple-300 dark:to-indigo-200"
                    variants={titleVariants}
                >
                    SERVICE CATEGORIES
                </motion.h1>

                <motion.div 
                    className="grid grid-cols-1 gap-8"
                    variants={containerVariants}
                >
                    {[...categoryServices.keys()].map((cat, index) => {
                        const imageIndex = index % serviceImages.length;
                        
                        return (
                            <Link key={cat} href={`/homeservices/category/services?category=${encodeURIComponent(cat)}`}>
                                <div 
                                    className="relative w-full h-[600px] bg-white dark:bg-gray-700 shadow-2xl rounded-3xl overflow-hidden group"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={serviceImages[imageIndex]}
                                            alt={cat}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={index < 2}
                                        />
                                    </div>
                                    
                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                                        <div className="relative z-20 p-6 text-white w-full">
                                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 
                                                bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 
                                                text-white inline-block px-4 py-2 rounded-lg 
                                                bg-opacity-80 shadow-lg border-b-2 border-blue-400">
                                                {cat}
                                            </h2>
                                            <div className="space-y-3">
                                                {categoryServices.get(cat).map((service) => (
                                                    <p 
                                                        key={service.name} 
                                                        className="text-lg sm:text-xl font-medium 
                                                        opacity-80 hover:opacity-100 
                                                        hover:translate-x-2 transition-all duration-300 
                                                        pl-2 border-l-2 border-transparent hover:border-white"
                                                    >
                                                        {service.name}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ServiceList;