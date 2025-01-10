"use client"
import { useState } from 'react';
import Link from 'next/link';
import { doSocialSignIn } from '../actions/signinaction';

export default function SignInPage() {
    // State to manage the visibility of login forms
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [showAdminLogin, setShowAdminLogin] = useState(false);

    // Sample validation function
    const validateForm = (event) => {
        event.preventDefault();
        // Add your validation logic here
        return true;  // or false based on validation
    };

    const validateLogin = (type) => {
        // Your login validation logic
        console.log(`Validating ${type} login`);
        return true; // or false based on login validation
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex-col bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-12">
            <div className="">
                <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Sign In</h1>
                <form id="signup-form" onSubmit={validateForm}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-m font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required placeholder="Enter Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-m font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" required placeholder="Enter Password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg">Sign In</button>
                </form>
            </div>
            <div className='text-center pt-6'>
                <span className='text-black-800'>OR USE</span>
            </div>
            <div className='pt-8 '>
                <form action={doSocialSignIn}>
                    <div className='flex gap-4'>
                        <button type='submit' name='action' value='google' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            Google
                        </button>
                        <button type='submit' name='action' value='github' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            GitHub
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}