import { getAllServices } from "@/data/homeservices";
import Link from "next/link";

const serviceImages = {
    'Beautician': '/engineer.png',
    'Barber': '/engineer.png',
    'MassageTherapist': '/engineer.png',
    'FitnessTrainer': '/engineer.png',
    'YogaTrainer': '/engineer.png',
    'SpaTherapist': '/engineer.png',
    'Carpenter': '/engineer.png',
    'Electrician': '/engineer.png',
    'Plumber': '/engineer.png',
    'ACTechnician': '/engineer.png',
    'HomeCleaner': '/engineer.png',
    'PestControlExpert': '/engineer.png',
    'ApplianceRepairTechnician': '/engineer.png',
    'Painter': '/engineer.png',
    'PlumbingExpert': '/engineer.png',
    'HousekeepingStaff': '/engineer.png',
    'MaidService': '/engineer.png',
    'Nannies/Babysitter': '/engineer.png',
    'GardeningService': '/engineer.png',
    'LaundryService': '/engineer.png',
    'InteriorDesigner': '/engineer.png',
    'Photographer': '/engineer.png',
    'EventPlanner': '/engineer.png',
    'SecurityGuard': '/engineer.png',
    'Driver': '/engineer.png'
};

const ServiceList = () => {
    const services = getAllServices();
    return (
        <div className="flex flex-wrap justify-center gap-6 p-8">
            {services.map((service) => (
                <Link key={service.name} href={`/homeservices/${service.name}`}>
                    <div className="w-64 bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                        <img src={serviceImages[service.name]}
                            width={40}
                            height={40}
                            alt='fghj'
                            className="mb-4"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ServiceList;
