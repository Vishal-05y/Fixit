"use client"
import { useState } from 'react';

export default function SignUpEmployeePage() {
    const serviceCategories = {
        "Beauty & Wellnes": [
            "Beautician",
            "Barber",
            "Massage Therapist",
            "Spa Therapist",
            "Fitness Trainer",
            "Yoga Trainer"
        ],
        "Home Services": [
            "Carpenter",
            "Electrician",
            "Plumber",
            "AC Technician",
            "Home Cleaner",
            "Pest Control Expert",
            "Appliance Repair Technician",
            "Painter",
            "Interior Designer",
            "Gardening Service"
        ],
        "Domestic Help": [
            "Housekeeping Staff",
            "Maid Services",
            "Nannie/Babysitter",
            "Laundry Service",
            "Driver"
        ],
        "Professional Services": [
            "Home Tutor",
            "Photographer",
            "Security Guard",
            "Event Planner"
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedService, setSelectedService] = useState("");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedService("");
    };

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mb-12">
                <form id="signupForm" onSubmit={submitForm}>
                <h2 className="text-xl font-semibold mb-4 text-slate-600">Employee Information</h2><br />
                <div className="mb-4 text-left">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 pt-5">
                        <label htmlFor="category" className="block text-xl font-medium text-slate-600 pb-3">Service</label>
                        <select id="category" name="category" value={selectedCategory} onChange={handleCategoryChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                            <option value="" disabled>Select a category</option>
                            {Object.keys(serviceCategories).map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    {selectedCategory && (
                        <div className="mb-4">
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                            <select id="service" name="service" value={selectedService} onChange={handleServiceChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                <option value="" disabled>Select a service</option>
                                {serviceCategories[selectedCategory].map((service) => (
                                    <option key={service} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">Sign Up</button>
                </form>
            </div>
        </div>
    );
}