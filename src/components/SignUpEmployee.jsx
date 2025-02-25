'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUpEmployee = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    
    const serviceCategories = {
        "BeautyAndWellness": [
            "Beautician",
            "Barber",
            "MassageTherapist",
            "FitnessTrainer",
            "YogaTrainer",
            "SpaTherapist",
        ],
        "HomeServices": [
            "Carpenter",
            "Electrician",
            "Plumber",
            "ACTechnician",
            "HomeCleaner",
            "PestControlExpert",
            "ApplianceRepairTechnician",
            "Painter",
            "PlumbingExpert"
        ],
        "DomesticHelp": [
            "HousekeepingStaff",
            "MaidService",
            "Nannies/Babysitter",
            "GardeningService",
            "LaundryService"
        ],
        "ProfessionalServices": [
            "InteriorDesigner",
            "Photographer",
            "EventPlanner",
            "SecurityGuard",
            "Driver"
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
    
    async function submitForm(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const username = formData.get('username');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const password = formData.get('password');
            const category = formData.get('category');
            const service = formData.get('service');

            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    username, 
                    email, 
                    phone, 
                    password,
                    category, 
                    service
                }),
            });

            if(response.status !== 201){
                setError(response.error.message);
            }
            else{
                response.status === 201 && router.push('/signin');       
            }
        } catch (error) {
            setError("User already exists");
        }
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all hover:shadow-indigo-500/10">
                <div className="px-6 py-8">
                    <div className="mb-6 text-center">
                        <h2 className="text-3xl font-bold text-white">Service Provider Registration</h2>
                        <p className="mt-2 text-sm text-gray-400">Join our platform and offer your professional services</p>
                    </div>
                    
                    <form id="signupForm" onSubmit={submitForm} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
                            <div className="mt-1">
                                <input 
                                    type="text" 
                                    id="username" 
                                    name="username" 
                                    placeholder="Enter Username" 
                                    required 
                                    className="appearance-none block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300" 
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                            <div className="mt-1">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="name@example.com" 
                                    required 
                                    className="appearance-none block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300" 
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                            <div className="mt-1">
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Enter Phone Number" 
                                    required 
                                    className="appearance-none block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300" 
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                            <div className="mt-1">
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    placeholder="Create a strong password" 
                                    required 
                                    className="appearance-none block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300" 
                                />
                            </div>
                        </div>
                        
                        <div className="pt-2">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-300">Service Category</label>
                            <div className="mt-1">
                                <select 
                                    id="category" 
                                    name="category" 
                                    value={selectedCategory} 
                                    onChange={handleCategoryChange} 
                                    required 
                                    className="appearance-none block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300" 
                                >
                                    <option value="" disabled>Select a category</option>
                                    {Object.keys(serviceCategories).map((category) => (
                                        <option key={category} value={category}>{category.replace(/([A-Z])/g, ' $1').trim()}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        {selectedCategory && (
                            <div className="pt-2">
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300">Service Type</label>
                                <div className="mt-1">
                                    <select 
                                        id="service" 
                                        name="service" 
                                        value={selectedService} 
                                        onChange={handleServiceChange} 
                                        required 
                                        className="appearance-none block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300" 
                                    >
                                        <option value="" disabled>Select a service</option>
                                        {serviceCategories[selectedCategory].map((service) => (
                                            <option key={service} value={service}>{service.replace(/([A-Z])/g, ' $1').trim()}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}
                        
                        {error && (
                            <div className="rounded-md bg-red-900/50 p-3">
                                <div className="flex">
                                    <div className="text-sm text-red-400">{error}</div>
                                </div>
                            </div>
                        )}
                        
                        <div className="pt-3">
                            <button 
                                type="submit" 
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 font-medium"
                            >
                                Register as Service Provider
                            </button>
                        </div>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account?{" "}
                            <a href="/signin" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                                Sign In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpEmployee;