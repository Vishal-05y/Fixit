'use client'

import React, { useState } from 'react';

const serviceCategories = {
    'BEAUTY AND WELLNESS': [
        'Beautician',
        'Barber',
        'Massage Therapist',
        'Fitness Trainer',
        'Yoga Trainer',
        'Spa Therapist'
    ],
    'HOME SERVICES': [
        'Carpenter',
        'Electrician',
        'Plumber',
        'AC Technician',
        'Home Cleaner',
        'Pest Control Expert',
        'Appliance Repair Technician',
        'Painter',
        'Plumbing Expert'
    ],
    'DOMESTIC HELP': [
        'Housekeeping Staff',
        'Maid Service',
        'Nannies/Babysitter',
        'Gardening Service',
        'Laundry Service'
    ],
    'PROFESSIONAL SERVICES': [
        'Interior Designer',
        'Photographer',
        'Event Planner',
        'Security Guard',
        'Driver'
    ]
};

const serviceImages = {
    'Beautician': '/engineer.png',
    'Barber': '/engineer.png',
    'Massage Therapist': '/engineer.png',
    'Fitness Trainer': '/engineer.png',
    'Yoga Trainer': '/engineer.png',
    'Spa Therapist': '/engineer.png',
    'Carpenter': '/engineer.png',
    'Electrician': '/engineer.png',
    'Plumber': '/engineer.png',
    'AC Technician': '/engineer.png',
    'Home Cleaner': '/engineer.png',
    'Pest Control Expert': '/engineer.png',
    'Appliance Repair Technician': '/engineer.png',
    'Painter': '/engineer.png',
    'Plumbing Expert': '/engineer.png',
    'Housekeeping Staff': '/engineer.png',
    'Maid Service': '/engineer.png',
    'Nannies/Babysitter': '/engineer.png',
    'Gardening Service': '/engineer.png',
    'Laundry Service': '/engineer.png',
    'Interior Designer': '/engineer.png',
    'Photographer': '/engineer.png',
    'Event Planner': '/engineer.png',
    'Security Guard': '/engineer.png',
    'Driver': '/engineer.png'
};

const ServiceCard = ({ service, onBooking }) => {
    return (
        <div className="service-card bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <img
                src={serviceImages[service]}
                width={40}
                height={40}
                alt={`${service} icon`}
                className="mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{service}</h3>
            <button
                onClick={() => onBooking(service)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
                Book Service
            </button>
        </div>
    );
};

const BookingModal = ({ service, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Booking submitted:', Object.fromEntries(formData));
        onClose();
    };

    return (
        <div id="booking-modal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <span className="text-gray-500 hover:text-gray-700 cursor-pointer float-right" onClick={onClose}>×</span>
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Book Service</h2>
                <h3 id="selected-service" className="mb-4 text-gray-700 font-medium">{service}</h3>
                <form id="booking-form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="text" name="name" placeholder="Your Name" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <input type="email" name="email" placeholder="Your Email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <textarea name="notes" placeholder="Additional Notes" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">Book Service</button>
                </form>
            </div>
        </div>
    );
};

export default function ProfileHome() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBooking = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const filteredServices = Object.keys(serviceCategories).reduce((acc, category) => {
        const services = serviceCategories[category].filter(service =>
            service.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (services.length > 0) {
            acc[category] = services;
        }
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">OUR SERVICES</h1>
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search for a service..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-700 text-center">
                    {Object.keys(filteredServices).map((category) => (
                        <div key={category}>
                            <h2 className="text-xl font-semibold mb-4">{category}</h2>
                            <div className="grid grid-cols-1 gap-4 text-gray-600">
                                {filteredServices[category].map((service) => (
                                    <ServiceCard key={service} service={service} onBooking={handleBooking} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && <BookingModal service={selectedService} onClose={closeModal} />}
        </div>
    );
}