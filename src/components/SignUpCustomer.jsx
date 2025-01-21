'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpCustomer = () => {

    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit (event) {

        event.preventDefault();
        
        try {
            const formData = new FormData(event.currentTarget);

            const username=formData.get('username');
            const email=formData.get('email');
            const phone=formData.get('phone');
            const password=formData.get('password');
            const street=formData.get('street');
            const city=formData.get('city');
            const state=formData.get('state');

            // const response = await fetch('/api/signupcustomer', {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    username, 
                    email, 
                    phone, 
                    password, 
                    street, 
                    city, 
                    state
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-7 pb-7">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
                <form id="signupForm" onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold mb-4 text-slate-600">Customer Information</h2><br />
                    <div className="mb-4 text-left">
                        <label htmlFor="username" className="block text-m font-medium text-gray-700">Username</label>
                        <input type="username" id="username" name="username" placeholder="Enter Username" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="email" className="block text-m font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="phone" className="block text-m font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter Phone-Number" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="password" className="block text-m font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <h2 className="text-xl font-semibold mb-4 text-slate-600 pt-4">Address</h2>
                    <div className="mb-4 text-left">
                        <label htmlFor="street" className="block text-m font-medium text-gray-700">Street Address</label>
                        <input type="text" id="street" name="street" placeholder="Enter Street Address" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="city" className="block text-m font-medium text-gray-700">City</label>
                        <input type="text" id="city" name="city" placeholder="Enter City" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="state" className="block text-m font-medium text-gray-700">State</label>
                        <input type="text" id="state" name="state" placeholder="Enter State" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    {/* <h2 className="text-xl font-semibold mb-4 text-slate-600 text-center pt-5">Verification</h2> */}
                    {/* <div className="mb-4 text-left">
                        <label htmlFor="otp" className="block text-m font-medium text-gray-700">Enter OTP</label>
                        <input type="text" id="otp" name="otp" placeholder="Enter the OTP sent to your phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div> */}
                    <div className="text-red-500 text-center">{error}</div>
                    <button type="submit" className="w-full text-white py-2 px-4 rounded-md bg-blue-500">Sign Up</button>
                </form>
            </div>
        </div>
  )
}

export default SignUpCustomer;



