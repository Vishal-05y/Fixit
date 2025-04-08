import { auth } from "@/auth";
import { getServiceByName } from "@/data/homeservices";
import { getUsersByEmail } from "@/queries/users";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceDetailsPage = async ({ params }) => {
    const session = await auth();
    const loggedInUser = session?.user;
    const { name } = params;

    if (!name) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-center text-red-400 font-medium">Invalid service selection.</p>
                </div>
            </div>
        );
    }

    const service = getServiceByName(name);
    if (!service) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-center text-red-400 font-medium">Currently, this service is not available.</p>
                </div>
            </div>
        );
    }

    let user = null;
    if (loggedInUser?.email) {
        user = await getUsersByEmail(loggedInUser.email);
    }

    const faqItems = [
        { question: "How soon can you provide this service?", answer: "We offer same-day service for most locations with priority scheduling available." },
        { question: "What happens if I'm not satisfied?", answer: "We have a 100% satisfaction guarantee. If you're not completely happy with our work, we'll fix it at no additional cost." },
        { question: "Are your professionals certified?", answer: "Yes, all our professionals are fully certified, background-checked, and have at least 5 years of experience." },
        { question: "How do I prepare for your service?", answer: "We'll send you a detailed preparation checklist after you book. For most services, minimal preparation is needed." },
    ];

    const serviceProcess = [
        { step: 1, title: "Book Online", description: "Select your service and choose a convenient time slot", icon: "📅" },
        { step: 2, title: "Confirmation", description: "Receive immediate confirmation and preparation details", icon: "✅" },
        { step: 3, title: "Service Delivery", description: "Our professional arrives and completes the service", icon: "🛠️" },
        { step: 4, title: "Quality Check", description: "Verify your satisfaction before we consider the job done", icon: "🔍" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Hero Section with Floating Elements */}
            <div className="relative overflow-hidden pt-12 pb-24">
                {/* Decorative floating elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
                
                {/* Main content card */}
                <div className="container mx-auto px-4">
                    <div className="w-full max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm text-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                        {/* Header Section with Enhanced Effects */}
                        <div className="relative group">
                            {service.image && (
                                <div className="w-full h-[450px] relative overflow-hidden">
                                    {/* Overlay with enhanced gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 z-10 
                                                  group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/70 transition-all duration-700" />
                                    
                                    {/* Interactive Patterns Overlay */}
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY86LTYgNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptLTMwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700" />
                                    
                                    {/* Main image with enhanced animation */}
                                    <img 
                                        src={service.image} 
                                        alt={`${service.name}`} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-1000 
                                                 animate-kenburns"
                                    />
                                    
                                    {/* Content overlay with badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                                            <span className="mr-1">●</span> Available Now
                                        </span>
                                    </div>
                                    
                                    {/* Title section */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                        <div className="overflow-hidden">
                                            <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-2 transform translate-y-0 transition-all duration-500 group-hover:translate-y-0">
                                                Premium Service
                                            </span>
                                            <h1 className="text-5xl font-bold text-white drop-shadow-xl
                                                        transform transition-all duration-700 
                                                        group-hover:scale-105 group-hover:tracking-wide animate-slideRight">
                                                {service.name}
                                            </h1>
                                        </div>
                                        
                                        {/* Animated underline */}
                                        <div className="w-40 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 
                                                      transition-transform duration-700 origin-center rounded-full opacity-0 
                                                      group-hover:opacity-100" />
                                                      
                                        {/* Decorative elements */}
                                        <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                                            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></span>
                                            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions Bar */}
                        <div className="bg-gray-800 border-b border-gray-700">
                            <div className="flex flex-wrap justify-between items-center px-6 py-3">
                                <div className="flex items-center space-x-6">
                                    <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        Save
                                    </button>
                                    <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                        Share
                                    </button>
                                </div>
                                <div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-900/60 text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Limited Time Offer
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 transform transition-all duration-500">
                            {/* Service description */}
                            <div className="bg-gradient-to-br from-gray-700/70 to-gray-800/70 p-6 rounded-xl border border-gray-600/50 shadow-inner">
                                <h2 className="text-2xl font-bold text-white mb-4">About This Service</h2>
                                <p className="text-gray-200 leading-relaxed text-lg">
                                    {service.about}
                                </p>
                                
                                {/* Key points */}
                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    {["Professional Experts", "Cutting-edge Tools", "Timely Delivery", "Satisfaction Guaranteed"].map((point, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="ml-2 text-gray-300">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Process Steps */}
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
                                <div className="relative">
                                    {/* Connecting line */}
                                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                                    
                                    {/* Process steps */}
                                    <div className="space-y-6">
                                        {serviceProcess.map((step, index) => (
                                            <div key={step.step} className="flex items-start group">
                                                <div className="flex-shrink-0 relative">
                                                    <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl
                                                                ${index === 0 ? 'border-blue-500 bg-blue-500/20 text-blue-300' : 
                                                                  index === 1 ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300' :
                                                                  index === 2 ? 'border-purple-500 bg-purple-500/20 text-purple-300' :
                                                                                'border-pink-500 bg-pink-500/20 text-pink-300'}`}>
                                                        {step.icon}
                                                    </div>
                                                    
                                                    {/* Step number badge */}
                                                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center text-xs font-bold text-white">
                                                        {step.step}
                                                    </div>
                                                </div>
                                                
                                                <div className="ml-6 transform transition-all duration-300 group-hover:translate-x-1">
                                                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                                                    <p className="mt-1 text-gray-300">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Service Highlights */}
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold text-white mb-6">Service Highlights</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-5 rounded-xl transform transition-all duration-300 
                                                hover:scale-105 hover:shadow-lg group/feature cursor-pointer border border-gray-600/30">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 
                                                     group-hover/feature:bg-blue-500/30 transition-all duration-300">
                                            <span className="text-2xl transform transition-all duration-300 group-hover/feature:rotate-12 text-blue-400">✨</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Premium Quality</h3>
                                        <p className="text-gray-300 text-sm">Our expert professionals have verified credentials and years of experience delivering superior results.</p>
                                    </div>
                                    
                                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-5 rounded-xl transform transition-all duration-300 
                                                hover:scale-105 hover:shadow-lg group/feature cursor-pointer border border-gray-600/30">
                                        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 
                                                     group-hover/feature:bg-purple-500/30 transition-all duration-300">
                                            <span className="text-2xl transform transition-all duration-300 group-hover/feature:rotate-12 text-purple-400">⚡</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Fast Response</h3>
                                        <p className="text-gray-300 text-sm">We offer 24/7 customer support and quick service with same-day availability in most locations.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Features */}
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-4 rounded-xl text-center border border-gray-600/20
                                             hover:border-blue-500/30 hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300 group/card">
                                    <div className="w-10 h-10 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center mb-3
                                                 group-hover/card:scale-110 transition-transform duration-300">
                                        <span className="text-blue-300 text-xl">⭐</span>
                                    </div>
                                    <h3 className="text-white font-semibold">Top Rated</h3>
                                    <p className="text-gray-300 text-xs mt-1">Consistent excellent feedback</p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-4 rounded-xl text-center border border-gray-600/20
                                             hover:border-green-500/30 hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300 group/card">
                                    <div className="w-10 h-10 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-3
                                                 group-hover/card:scale-110 transition-transform duration-300">
                                        <span className="text-green-300 text-xl">🛡️</span>
                                    </div>
                                    <h3 className="text-white font-semibold">Guaranteed</h3>
                                    <p className="text-gray-300 text-xs mt-1">100% satisfaction promise</p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-4 rounded-xl text-center border border-gray-600/20
                                             hover:border-amber-500/30 hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300 group/card">
                                    <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center mb-3
                                                 group-hover/card:scale-110 transition-transform duration-300">
                                        <span className="text-amber-300 text-xl">⚙️</span>
                                    </div>
                                    <h3 className="text-white font-semibold">Customizable</h3>
                                    <p className="text-gray-300 text-xs mt-1">Tailored to your needs</p>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-16">
                                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqItems.map((item, index) => (
                                        <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
                                            <details className="group">
                                                <summary className="flex justify-between items-center font-medium cursor-pointer px-6 py-4">
                                                    <span className="text-gray-100">{item.question}</span>
                                                    <span className="transition group-open:rotate-180">
                                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-gray-400">
                                                            <path d="M6 9l6 6 6-6"></path>
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <div className="px-6 pb-6 pt-2 text-gray-300">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </details>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-16">
                                <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/70 to-purple-900/70 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                                    
                                    <div className="relative z-10 text-center">
                                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                                        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                                            Experience our premium {service.name} service today. Schedule your appointment now.
                                        </p>
                                        
                                        <div className="flex justify-center space-x-4">
                                            <Link
                                                href={`/booking?service=${encodeURIComponent(service.name)}`}
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20 transform hover:-translate-y-0.5"
                                            >
                                                Schedule Now
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="bg-transparent border border-blue-400 text-blue-100 hover:bg-blue-800/20 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Trust Badges */}
                            <div className="mt-16 pb-8">
                                <div className="text-center">
                                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-6">Trusted By</h3>
                                    <div className="flex justify-center items-center space-x-8 opacity-60">
                                        {["Secure Booking", "Certified Experts", "24/7 Support", "Satisfaction Guarantee"].map((badge, index) => (
                                            <div key={index} className="flex items-center">
                                                <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-300 text-sm font-medium">{badge}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;