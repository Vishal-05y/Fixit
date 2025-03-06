'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen text-gray-300">
            {/* Background Image */}
            <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10" style={{ backgroundImage: "url('/background2.jpg')" }}></div>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center p-10 bg-gray-900 bg-opacity-60 text-white">
                <h1 className="text-4xl font-bold mb-4">Find Trusted Professionals for Any Service – Fast & Easy!</h1>
                <div className="flex gap-4">
                    <Link href="/homeservices" passHref>
                        <button className="px-6 py-3 bg-green-500 rounded-lg">Book a Service</button> 
                    </Link>
                    <Link href="/signupEmployee" passHref>
                        <button className="px-6 py-3 bg-blue-500 rounded-lg">Join as a Service Provider</button>
                    </Link>
                </div>
            </section>

            {/* How It Works */}
            <section className="p-10 text-center bg-gray-800 bg-opacity-95">
                <h2 className="text-3xl font-semibold mb-6">How FixIt Works?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {['Choose a Service', 'Book Instantly or Schedule', 'Get Service at Your Doorstep', 'Pay Securely & Review'].map((step, index) => (
                        <div key={index} className="p-5 bg-gray-700 rounded-lg">
                            <h3 className="text-xl font-bold">{step}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Services */}
            <section className="p-10 text-center bg-gray-800 bg-opacity-95">
                <h2 className="text-3xl font-semibold mb-6">Trending Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {['Electricians', 'Home Cleaning', 'Beauty & Spa', 'Plumbing', 'Appliance Repair', 'Carpenters'].map((service, index) => (
                        <div key={index} className="p-4 bg-gray-700 rounded-lg">
                            <h3 className="text-lg font-bold">{service}</h3>
                            <button className="mt-2 px-4 py-2 bg-green-500 rounded-md">Book Now</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose FixIt */}
            <section className="p-10 text-center bg-gray-800 bg-opacity-95">
                <h2 className="text-3xl font-semibold mb-6">Why Choose FixIt?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Verified Professionals', 'Instant & Scheduled Bookings', 'Affordable Pricing', '24/7 Support', 'Satisfaction Guarantee'].map((feature, index) => (
                        <div key={index} className="p-5 bg-gray-700 rounded-lg">
                            <h3 className="text-xl font-bold">{feature}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="p-10 text-center bg-gray-900 bg-opacity-60">
                <h2 className="text-3xl font-semibold mb-6">Happy Customers Say</h2>
                <div className="flex overflow-x-scroll space-x-4 p-4">
                    {["FixIt was amazing!", "The cleaning service was perfect!", "Highly recommend FixIt!"].map((review, index) => (
                        <div key={index} className="p-4 bg-gray-700 rounded-lg min-w-[250px]">
                            <p>{review}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="p-10 text-center bg-gray-800 bg-opacity-95">
                <h2 className="text-3xl font-semibold mb-6">Ready to Fix It? Get Started Today!</h2>
                <div className="flex gap-4 justify-center">
                    <Link href="/homeservices" >
                        <button className="px-6 py-3 bg-green-500 rounded-lg">Book a Service</button>
                    </Link>
                    <Link href="/signupEmployee">
                        <button className="px-6 py-3 bg-blue-500 rounded-lg">Join as a Service Provider</button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-10 bg-gray-900 bg-opacity-95 text-center">
                <div className="flex justify-center gap-6 mb-4">
                    <Link href='/about'>About Us</Link>
                    <Link href='/contact'>Contact Us</Link>
                    <Link href='/faq'>FAQs</Link>
                    <Link href='/terms'>Terms & Policies</Link>
                </div>
                <p>Available in major cities worldwide</p>
            </footer>
        </div>
    );
}