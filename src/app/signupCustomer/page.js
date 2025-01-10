"use client"
import React from 'react';

export default function SignUpCustomerPage() {
    const submitForm = (event) => {
        event.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-7 pb-7">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
                <form id="signupForm" onSubmit={submitForm}>
                    <h2 className="text-xl font-semibold mb-4 text-slate-600">Customer Information</h2><br />
                    <div className="mb-4 text-left">
                        <label htmlFor="fullName" className="block text-m font-medium text-gray-700">Full Name</label>
                        <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="email" className="block text-m font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="phone" className="block text-m font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="password" className="block text-m font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="confirmPassword" className="block text-m font-medium text-gray-700">Re-enter Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter your password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <h2 className="text-xl font-semibold mb-4 text-slate-600 pt-4">Address</h2>
                    <div className="mb-4 text-left">
                        <label htmlFor="street" className="block text-m font-medium text-gray-700">Street Address</label>
                        <input type="text" id="street" name="street" placeholder="Enter your street address" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="city" className="block text-m font-medium text-gray-700">City</label>
                        <input type="text" id="city" name="city" placeholder="Enter your city" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="state" className="block text-m font-medium text-gray-700">State</label>
                        <input type="text" id="state" name="state" placeholder="Enter your state" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <h2 className="text-xl font-semibold mb-4 text-slate-600 text-center pt-5">Verification</h2>
                    <div className="mb-4 text-left">
                        <label htmlFor="otp" className="block text-m font-medium text-gray-700">Enter OTP</label>
                        <input type="text" id="otp" name="otp" placeholder="Enter the OTP sent to your phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full text-white py-2 px-4 rounded-md bg-blue-500">Sign Up</button>
                </form>
            </div>
        </div>
    );
}