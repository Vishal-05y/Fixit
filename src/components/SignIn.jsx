"use client"

import SocialSignIn from "./SocialSignIn";
import { doCredentialSignIn } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
    const router= useRouter();
    const [error, setError] = useState("");

    async function handleFormSubmit (event){
        event.preventDefault()
        try {
            const formData = new FormData(event.currentTarget);
            const response = await doCredentialSignIn(formData);

            if(!!response.error){
                setError(response.error.message);
            }
            else{
                router.push("/profileHome");
            }
        } catch (error) {
            setError("Check your credentials");
        }
    }

  return (
    <>
        <form id="signup-form" onSubmit={handleFormSubmit} className="space-y-4">
            <div className="mb-4">
                <label htmlFor="usename" className="block text-m font-medium text-gray-700">Username</label>
                <input type="username" id="username" name="username" required placeholder="Enter Usename" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-m font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" required placeholder="Enter Password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="text-red-500 text-center">{error}</div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg">Sign In</button>
        </form>
    </>
  )
}

export default SignIn;