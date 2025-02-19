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
    
        async function submitForm (event) {
            event.preventDefault();
            // Add form submission logic here
            try{
                const formData = new FormData(event.currentTarget);

                const username=formData.get('username');
                const email=formData.get('email');
                const phone=formData.get('phone');
                const password=formData.get('password');
                const category=formData.get('category');
                const service=formData.get('service');

                // const response = await fetch('/api/signupemployee', {
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
        <div className="pt-7 flex justify-center items-center min-h-screen bg-gray-800 text-center">
            <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-lg mb-12">
                <form id="signupForm" onSubmit={submitForm}>
                <h2 className="text-2xl font-semibold mb-4 text-gray-300">Employee Information</h2><br />
                <div className="mb-4 text-left">
                        <label htmlFor="username" className="text-lg font-medium text-gray-300">Username</label>
                        <input type="username" id="username" name="username" placeholder="Enter Username" required className="mt-1 w-full px-3 py-2 border text-gray-200 border-gray-500 bg-gray-700 rounded-md shadow-sm focus:outline-slate-600" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="email" className="text-lg font-medium text-gray-300">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email" required className="mt-1 w-full px-3 py-2 border text-gray-200 border-gray-500 bg-gray-700 rounded-md shadow-sm focus:outline-slate-600" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="phone" className="text-lg font-medium text-gray-300">Phone Number</label>
                        <input type="phone" id="phone" name="phone" placeholder="Enter Phone number" required className="mt-1 w-full px-3 py-2 border text-gray-200 border-gray-500 bg-gray-700 rounded-md shadow-sm focus:outline-slate-600" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="password" className="text-lg font-medium text-gray-300">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" required className="mt-1 w-full px-3 py-2 border text-gray-200 border-gray-500 bg-gray-700 rounded-md shadow-sm focus:outline-slate-600" />
                    </div>
                    <div className="mb-4 pt-5">
                        <label htmlFor="category" className="block text-2xl font-medium text-gray-300 pb-3">Service</label>
                        <select id="category" name="category" value={selectedCategory} onChange={handleCategoryChange} required className="mt-1 w-full px-3 py-2 border text-gray-200 border-gray-500 bg-gray-700 rounded-md shadow-sm focus:outline-slate-600">
                            <option value="" disabled>Select a category</option>
                            {Object.keys(serviceCategories).map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    {selectedCategory && (
                        <div className="mb-4">
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                            <select id="service" name="service" value={selectedService} onChange={handleServiceChange} required className="mt-1 w-full px-3 py-2 border text-gray-200 border-gray-500 bg-gray-700 rounded-md shadow-sm focus:outline-slate-600">
                                <option value="" disabled>Select a service</option>
                                {serviceCategories[selectedCategory].map((service) => (
                                    <option key={service} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="text-red-500 text-center">{error}</div>
                    <button type="submit" className="mt-8 w-full bg-gray-500 text-gray-300 py-2 px-4 rounded-md">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpEmployee;