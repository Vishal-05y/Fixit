'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
    const router = useRouter();
    const [pathname, setPathname] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPathname(router.pathname);
        }
    }, [router.pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex justify-between items-center p-5 bg-white shadow-md">
            <div className="flex items-center font-bold text-3xl gap-2 pl-6">
                <Image src="/engineer.png" width={40} height={40} alt="logo"/>
                <Link href="/"
                     className="text-black">FIXIT
                </Link>
            </div>
            <nav className="hidden md:flex gap-5 text-slate-600 text-xl pr-6">
                <Link href="/signin"
                     className={pathname === '/signin' ? 'border-b-2 border-indigo-500' : ''}>SignIn
                </Link>
                <Link href="/signup"
                     className={pathname === '/signup' ? 'border-b-2 border-indigo-500' : ''}>SignUp
                </Link>
                <Link href="/contact"
                     className={pathname === '/contact' ? 'border-b-2 border-indigo-500' : ''}>Contact
                </Link>
            </nav>
            <button className="md:hidden flex items-center" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 right-0 bg-white shadow-md rounded-lg p-5">
                    <nav className="flex flex-col gap-4 text-slate-600 text-xl">
                        <Link href="/signin"
                             className={pathname === '/signin' ? 'border-b-2 border-indigo-500' : ''} onClick={toggleMobileMenu}>SignIn
                        </Link>
                        <Link href="/signup"
                             className={pathname === '/signup' ? 'border-b-2 border-indigo-500' : ''} onClick={toggleMobileMenu}>SignUp
                        </Link>
                        <Link href="/contact"
                             className={pathname === '/contact' ? 'border-b-2 border-indigo-500' : ''} onClick={toggleMobileMenu}>Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}