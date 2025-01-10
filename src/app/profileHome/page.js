// filepath: /c:/Users/visha/Desktop/Projects/fixit/src/app/profileHome/page.js
'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import SignOutPage from "../signout/page";
import React, { useEffect, useState } from "react";
import { auth } from "@/auth";

export default function ProfileHomePage() {
    const [session, setSession] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchSession() {
            const response = await fetch('/api/session');
            const data = await response.json();
            const session = await auth();
            if (!session?.user) {
                router.push('/');
            } else {
                setSession(session);
            }
        }
        fetchSession();
    }, [router]);

    if (session) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-20">
            <h1>{session?.user?.name}</h1>
            <h1>Pandagow</h1>
            <SignOutPage />  
        </div>
    );
}