'use client'

import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-gray-300 bg-gray-800 justify-start items-center p-8">
            <Link href='/homeservices' className='text-2xl font-semi-bold'>CATEGORIES</Link>
        </div>
    );
}