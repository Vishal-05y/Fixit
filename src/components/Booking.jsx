"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignIn from "@/components/SignIn";
import { motion } from "framer-motion";

const BookingPage = () => {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get("service");

  const [user, setUser] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  // Get today's date in YYYY-MM-DD format for min date validation
  const today = new Date().toISOString().split("T")[0];
  
  // Calculate current time for time validation
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Time validation function
  const isTimeValid = (date, time) => {
    if (date > today) return true; // Future date is always valid
    
    if (date === today) {
      // For today, check if time is in the future
      const [hours, minutes] = time.split(":").map(Number);
      if (hours > currentHour) return true;
      if (hours === currentHour && minutes > currentMinute) return true;
      return false; // Time is in the past
    }
    
    return false; // Date is in the past
  };

  // Handler for date change
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    
    // If we have both date and time, validate the combination
    if (selectedTime && newDate) {
      if (!isTimeValid(newDate, selectedTime)) {
        setError("Please select a future time.");
      } else {
        setError("");
      }
    }
  };

  // Handler for time change
  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setSelectedTime(newTime);
    
    // If we have both date and time, validate the combination
    if (selectedDate && newTime) {
      if (!isTimeValid(selectedDate, newTime)) {
        setError("Please select a future time.");
      } else {
        setError("");
      }
    }
  };

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
    
    if (!user || !selectedDate || !selectedTime) {
      setError("Please select both date and time.");
      return;
    }
    
    // Final validation before submission
    if (!isTimeValid(selectedDate, selectedTime)) {
      setError("Cannot book in the past. Please select a future date and time.");
      return;
    }

    try {
      setError("");
      setLoading(true);
      
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
          time: selectedTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        setSuccessMessage("Your booking has been confirmed");
        setTimeout(() => router.push("/"), 3000);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex justify-center items-center p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="w-full max-w-md"
      >
        {user ? (
          user.service ? (
            <div className="bg-gray-800/80 backdrop-blur shadow-2xl rounded-2xl p-8 border border-gray-700">
              <h1 className="text-2xl font-semibold text-red-400 text-center">
                You cannot book a service as a service provider
              </h1>
            </div>
          ) : (
            <div className="bg-gray-800/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-gray-700 transform transition-all duration-300">
              <div className="relative mb-8">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-center mb-2 text-white">Book Your Service</h2>
              <h3 className="text-xl font-medium text-center mb-6 text-blue-400">{serviceName || "No service selected"}</h3>
              
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-4">
                  <p className="text-red-400 text-sm text-center">{error}</p>
                </div>
              )}
              
              {successMessage && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 my-4"
                >
                  <p className="text-green-400 text-center font-medium">
                    {successMessage}
                  </p>
                  <p className="text-gray-400 text-center text-sm mt-2">
                    Redirecting you to home page...
                  </p>
                </motion.div>
              )}
              
              {!successMessage && (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="date" className="block font-medium text-gray-300">
                      Select Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="mt-1 pl-10 block w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-200 text-gray-200 px-3 py-2"
                        required
                        min={today}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="time" className="block font-medium text-gray-300">
                      Select Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <input
                        type="time"
                        id="time"
                        value={selectedTime}
                        onChange={handleTimeChange}
                        className="mt-1 pl-10 block w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-200 text-gray-200 px-3 py-2"
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Confirm Booking
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          )
        ) : (
          <div className="bg-gray-800/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-gray-700">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">
              Sign In to Book
            </h1>
            <p className="text-gray-400 text-center mb-6">
              You need to sign in before booking a service
            </p>
            <SignIn />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BookingPage;