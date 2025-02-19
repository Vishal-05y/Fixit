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
                router.push("/homeservices");
            }
        } catch (error) {
            setError("Check your credentials");
        }
    }

  return (
    <>
        <form id="signup-form" onSubmit={handleFormSubmit} className="space-y-4">
            <div className="mb-4 bg-gray-700">
                <label htmlFor="usename" className="text-lg font-medium text-gray-300">Username</label>
                <input type="username" id="username" name="username" required placeholder="Enter Username" className="mt-1 w-full px-3 py-2 border text-gray-200 border-gray-500 bg-gray-700 rounded-md shadow-sm focus:outline-slate-600 " />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="text-lg font-medium text-gray-300">Password</label>
                <input type="password" id="password" name="password" required placeholder="Enter Password" className="mb-5 mt-1 w-full px-3 py-2 border text-gray-200 border-gray-500 bg-gray-700 rounded-md shadow-sm focus:outline-slate-600" />
            </div>
            <div className="text-red-500 text-center">{error}</div>
            <button type="submit" className="w-full bg-gray-500 text-white py-2 px-4 rounded-md text-xl">SignIn</button>
        </form>
    </>
  )
}

export default SignIn;