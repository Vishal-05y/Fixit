"use client"

import { useState } from "react"

export default function SignUpPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center mb-20">
                <h1 className="text-3xl font-bold mb-10 text-slate-700">Sign Up</h1>
                <div className="flex gap-4">
                    <button 
                        onClick={() => (window.location.href = '/signupCustomer')} 
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                        Customer
                    </button>
                    <button 
                        onClick={() => (window.location.href = '/signupEmployee')} 
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                        Employee
                    </button>
                </div>
            </div>
        </div>
    )
}