"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignIn from "@/components/SignIn";

const BookingPage = () => {
    const searchParams = useSearchParams();
    const serviceName = searchParams.get("service"); // ✅ Get service name from URL

    const [user, setUser] = useState(null);
    const [selectedDate, setSelectedDate] = useState(""); // ✅ New state for date
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState(""); // ✅ Success message state
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/api/user");
                if (!response.ok) throw new Error("Failed to fetch user");

                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!user || !selectedDate) return;
    
        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    street: user.street,
                    city: user.city,
                    state: user.state,
                    service: serviceName,
                    date: selectedDate,
                }),
            });
    
            // ✅ Handle both JSON and plain text responses
            const data = response.headers.get("content-type")?.includes("application/json")
                ? await response.json()
                : await response.text();
    
            if (!response.ok) {
                // ✅ Show "No worker available" message
                if (data.message === "No worker available for this service." || data === "No worker available for this service.") {
                    setSuccessMessage("Currently, no worker is available for this service.");
                } else {
                    setError(typeof data === "string" ? data : data.message);
                }
            } else {
                // ✅ Show success message & Redirect after 3 seconds
                setSuccessMessage("Your booking has been confirmed! 🎉");
                setTimeout(() => router.push("/"), 3000);
            }
        } catch (error) {
            setError(error.message);
        }
    };
    
    

    if (loading) return <p>Loading...</p>;

    return (
        <div className="flex justify-center shadow-lg rounded-lg items-center min-h-screen bg-gray-100 pt-7 pb-7">
            {user ? (
                user.service ? (
                    <h1 className="text-2xl font-semibold text-red-600">You cannot book a service</h1>
                ) : (
                    <div className="p-6 rounded-lg mt-6 bg-white w-full max-w-md shadow-md">
                        <h2 className="text-xl font-semibold mb-4">User Details</h2>
                        <p><span className="font-semibold">Email:</span> {user.email}</p>
                        <p><span className="font-semibold">Username:</span> {user.username}</p>
                        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                        <p><span className="font-semibold">Street:</span> {user.street}</p>
                        <p><span className="font-semibold">City:</span> {user.city}</p>
                        <p><span className="font-semibold">State:</span> {user.state}</p>
                        <p><span className="font-semibold">Service:</span> {serviceName || "No service selected"}</p> {/* ✅ Show service name */}

                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {
                            successMessage === "Currently, no worker is available for this service." 
                                ?
                                    <p className="text-red-500 mt-2 font-semibold">{successMessage}</p>
                                :
                                    <p className="text-green-500 mt-2 font-semibold">{successMessage}</p>
                        }

                        {!successMessage && (  // ✅ Hide form after successful booking
                            <form onSubmit={handleSubmit} className="mt-4">
                                <label htmlFor="date" className="block font-semibold">Select Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="mt-2 border px-2 py-1 rounded w-full"
                                    required
                                    min={new Date().toISOString().split("T")[0]} // ✅ Disable past dates
                                />     
                                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full">
                                    Confirm booking
                                </button>
                            </form>
                        )}
                    </div>
                )
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold mb-6 text-center text-slate-700">Sign in to book a service</h1>
                    <div className="flex-col bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                        <SignIn />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingPage;
