'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { useEffect, useState } from 'react';
import Footer from './Footer';

export default function MainHome() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoTransition, setVideoTransition] = useState('slide-in');

  const videos = [
    '/carpenter.mp4',
    '/electrician.mp4',
    '/spa.mp4',
    '/painting.mp4',
    '/yogatrainer.mp4',
    '/housecleaning.mp4',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoTransition('slide-out');
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setVideoTransition('slide-in');
      }, 400); // Reduced transition duration
    }, 4000); // Reduced video change interval

    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-3">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-5 animate-fade-in tracking-tight text-white">
            <span className="text-green-400">Find</span> Trusted Professionals
          </h1>
          <p className="text-xl mb-8 text-gray-300 font-light">Fast, Easy, and Reliable Solutions at Your Fingertips</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link href="/homeservices" passHref>
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-green-500/30 text-base font-medium transform hover:-translate-y-1">
                Book a Service
              </button>
            </Link>
            <Link href="/signupEmployee" passHref>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-500/30 text-base font-medium transform hover:-translate-y-1">
                Become a Provider
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row justify-center gap-8 px-5 py-12 max-w-6xl mx-auto">
        {/* Trending Services */}
        <div className="bg-gray-800/80 p-8 rounded-xl w-full md:w-1/2 shadow-xl border border-gray-700/50 transition-all duration-300 hover:shadow-gray-700/20 backdrop-blur-sm transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-6 text-white tracking-wide border-b border-gray-700 pb-3">
            <span className="text-green-400">Trending</span> Services
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: 'Barber', icon: '/barber.png', link: '/homeservices/service/Barber' },
              { name: 'Carpenter', icon: '/carpenter.png', link: '/homeservices/service/Carpenter' },
              { name: 'Electrician', icon: '/electrician.png', link: '/homeservices/service/Electrician' },
              { name: 'Plumber', icon: '/plumber.png', link: '/homeservices/service/Plumber' },
              { name: 'Painter', icon: '/painter.png', link: '/homeservices/service/Painter' },
              { name: 'Maid Service', icon: '/maid.png', link: '/homeservices/service/MaidService' },
              { name: 'Laundry', icon: '/laundry.png', link: '/homeservices/service/LaundryService' },
              { name: 'Photographer', icon: '/photographer.png', link: '/homeservices/service/Photographer' },
              { name: 'Web Developer', icon: '/webdeveloper.png', link: '/homeservices/service/WebDeveloper' },
            ].map((service, index) => (
              <Link key={index} href={service.link} passHref>
                <div className="flex flex-col items-center cursor-pointer group transform transition-all duration-300 hover:scale-105">
                  <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl group-hover:from-blue-500 group-hover:to-blue-600 transition-colors duration-300 shadow-sm group-hover:shadow-blue-500/20">
                    <Image src={service.icon} alt={service.name} width={40} height={40} className="filter group-hover:brightness-150" />
                  </div>
                  <p className="text-xs mt-3 font-medium group-hover:text-white transition-colors duration-300">{service.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="max-w-[600px] h-[360px] overflow-hidden rounded-xl mx-auto shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
            <div className={`transition-transform duration-400 ${videoTransition}`}>
              <video
                key={videos[currentVideoIndex]}
                src={videos[currentVideoIndex]}
                autoPlay
                muted
                loop={false}
                className="w-[600px] h-[360px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1.5 z-20">
              {videos.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentVideoIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentVideoIndex(index)}
                  aria-label={`Go to video ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Sections */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-8">
        {/* Spa for Women Section */}
        <section className="px-5 py-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-left mb-8 tracking-wide pl-3 border-l-4 border-green-400">
            Spa for Women
          </h2>
          <div className="flex flex-row gap-5 justify-start overflow-x-auto pb-3 pl-3">
            {[
              { src: '/spa1.jpg', text: 'Massage Therapy', link: '/homeservices/service/MassageTherapy' },
              { src: '/spa2.jpg', text: 'Beautician', link: '/homeservices/service/Beautician' },
              { src: '/spa3.jpg', text: 'Spa Therapy', link: '/homeservices/service/SpaTherapist' },
              { src: '/spa4.jpg', text: 'Hair Spa', link: '/homeservices/service/Barber' },
            ].map((item, index) => (
              <Link key={index} href={item.link} passHref>
                <div className="relative flex flex-col items-start cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105 group">
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={200}
                    height={200}
                    className="rounded-xl object-cover shadow-md h-52"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl opacity-80 group-hover:opacity-70 transition-opacity"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white font-semibold text-base py-1.5 px-3">
                    {item.text}
                    <div className="mt-1.5">
                      <span className="bg-white text-green-600 text-xs font-medium py-1 px-2.5 rounded-full shadow-sm">
                        Book Now
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Technician Experts Section */}
        <section className="px-5 py-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-left mb-8 tracking-wide pl-3 border-l-4 border-blue-400">
            Technician Experts
          </h2>
          <div className="flex flex-row gap-5 justify-start overflow-x-auto pb-3 pl-3">
            {[
              { src: '/tech1.jpg', text: 'Electrician', link: '/homeservices/service/Electrician' },
              { src: '/tech2.jpg', text: 'AC Technician', link: '/homeservices/service/ACTechnician' },
              { src: '/tech3.jpg', text: 'Appliance Repair', link: '/homeservices/service/ApplianceRepair' },
              { src: '/tech4.jpg', text: 'Plumber', link: '/homeservices/service/Plumber' },
            ].map((item, index) => (
              <Link key={index} href={item.link} passHref>
                <div className="relative flex flex-col items-start cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105 group">
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={200}
                    height={200}
                    className="rounded-xl object-cover shadow-md h-52"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl opacity-80 group-hover:opacity-70 transition-opacity"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white font-semibold text-base py-1.5 px-3">
                    {item.text}
                    <div className="mt-1.5">
                      <span className="bg-white text-blue-600 text-xs font-medium py-1 px-2.5 rounded-full shadow-sm">
                        Book Now
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* We are Experts in Section */}
      <section className="px-5 py-12 mx-auto bg-gradient-to-b from-gray-900 to-black mt-8 shadow-xl border-t border-b border-gray-800/50 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300">We are Experts in</span>
        </h2>
        <div className="flex flex-row gap-6 justify-center overflow-x-auto pb-5 px-3">
          {[
            { src: '/expert1.jpg', text: 'Electrician', link: '/homeservices/service/Electrician' },
            { src: '/expert2.jpg', text: 'Carpenter', link: '/homeservices/service/Carpenter' },
            { src: '/expert3.jpg', text: 'Home Cleaning', link: '/homeservices/service/HomeCleaner' },
            { src: '/expert4.jpg', text: 'Painting', link: '/homeservices/service/Painter' },
            { src: '/expert5.jpg', text: 'Photographer', link: '/homeservices/service/Photographer' },
          ].map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <div className="relative flex flex-col items-start cursor-pointer flex-shrink-0 transition-all duration-300 hover:scale-105 group">
                <div className="h-60 w-60 rounded-2xl overflow-hidden border-3 border-gray-800 group-hover:border-blue-600 transition-colors">
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={240}
                    height={240}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-400"
                  />
                </div>
                <div className="absolute -bottom-1.5 left-0 right-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white font-semibold text-sm py-2 px-4 rounded-full w-3/4 mx-auto text-center shadow-md group-hover:shadow-lg transition-shadow">
                  {item.text}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-in-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-in-out;
        }

        .slide-in {
          transform: translateX(0);
        }

        .slide-out {
          transform: translateX(-100%);
        }

        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: transparent;
        }

        @media (max-width: 768px) {
          .text-5xl {
            font-size: 2rem;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
          .text-2xl {
            font-size: 1.25rem;
          }
          .text-xl {
            font-size: 1rem;
          }
          .px-5 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          .py-12 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .h-60 {
            height: 14rem;
          }
          .w-60 {
            width: 14rem;
          }
          .h-52 {
            height: 12rem;
          }
        }
      `}</style>
    </div>
  );
}