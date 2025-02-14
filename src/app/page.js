'use client'

import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center p-8">
            <Link href='/homeservices'>CATEGORIES</Link>
        </div>
    );
}