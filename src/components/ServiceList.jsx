// import { getAllServiceCategories, getAllServiceCategories } from "@/data/homeservices";
// import Link from "next/link";

// const serviceImages = {
//     'Beautician': '/engineer.png',
//     'Barber': '/engineer.png',
//     'MassageTherapist': '/engineer.png',
//     'FitnessTrainer': '/engineer.png',
//     'YogaTrainer': '/engineer.png',
//     'SpaTherapist': '/engineer.png',
//     'Carpenter': '/engineer.png',
//     'Electrician': '/engineer.png',
//     'Plumber': '/engineer.png',
//     'ACTechnician': '/engineer.png',
//     'HomeCleaner': '/engineer.png',
//     'PestControlExpert': '/engineer.png',
//     'ApplianceRepairTechnician': '/engineer.png',
//     'Painter': '/engineer.png',
//     'PlumbingExpert': '/engineer.png',
//     'HousekeepingStaff': '/engineer.png',
//     'MaidService': '/engineer.png',
//     'Nannies/Babysitter': '/engineer.png',
//     'GardeningService': '/engineer.png',
//     'LaundryService': '/engineer.png',
//     'InteriorDesigner': '/engineer.png',
//     'Photographer': '/engineer.png',
//     'EventPlanner': '/engineer.png',
//     'SecurityGuard': '/engineer.png',
//     'Driver': '/engineer.png'
// };

// const ServiceList = () => {
//     const services = getAllServiceCategories();
//     return (
//         <div className="flex flex-wrap justify-center gap-6 p-8">
//             {services.map((service) => (
//                 <Link key={service.name} href={`/homeservices/${service.name}`}>
//                     <div className="w-64 bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
//                         <img src={serviceImages[service.name]}
//                             width={40}
//                             height={40}
//                             alt='fghj'
//                             className="mb-4"
//                         />
//                         <div className="p-4 text-center">
//                             <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
//                         </div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// };

// export default ServiceList;


"use client";

import { getAllServiceCategories, getServicesByCategory } from "@/data/homeservices";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ServiceList = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    const categories = getAllServiceCategories();
    
    // If a category is selected, get services for that category.
    // Otherwise, get all services grouped by category.
    let categoryServices = {};
    if (category) {
        categoryServices[category] = getServicesByCategory(category);
    } else {
        categories.forEach(cat => {
            categoryServices[cat] = getServicesByCategory(cat);
        });
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-xl rounded-3xl p-8 max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Service Categories</h1>
                <div className="grid grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <Link key={cat} href={`/homeservices/category/services?category=${encodeURIComponent(cat)}`}>
                            <div className="w-full h-80 bg-gray-50 shadow-md rounded-2xl p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">{cat}</h2>
                                {/* Display the services inside the category box */}
                                <div className="overflow-y-auto h-full">
                                    {categoryServices[cat].map((service) => (
                                        <p key={service.name} className="text-gray-600">{service.name}</p>
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





