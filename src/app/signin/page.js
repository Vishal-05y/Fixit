"use client"

import SignIn from '@/components/SignIn';
import SocialSignIn from '@/components/SocialSignIn';

export default function SignInPage() {
    return (
        <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex-col bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-12">
                <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Sign In</h1>
                <SignIn/>
                <div className='text-center pt-6'>
                    <span className='text-black-800'>OR USE</span>
                </div>
                <SocialSignIn />
            </div>
        </div>
    </>
    );
}