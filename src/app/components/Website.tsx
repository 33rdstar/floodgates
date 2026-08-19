'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';
import { Globe2, Phone, Mail, ChevronRight, X, MessageCircle,} from 'lucide-react';

const Website = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleEmail = () => {
    window.location.href = 'mailto:floodgatessymphony@gmail.com';
    setIsChatOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+260979720823', '_blank');
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <Navigation/>

      {/* Hero Section with Background Image */}
      <div id="home" className="relative bg-black">
        <div className="absolute inset-0">
          <Image
            src="/image1.jpg"
            alt="Business operations"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-6">
              Comprehensive Business Solutions Provider
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your trusted partner in effective delivery of goods and services, mining, and agricultural solutions
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Services Section with Images */}
      <div id="services" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
               {
                title: "Mining and Trading",
                desc: "State-of-the-art mining operations with sustainable practices",
                image: "/extraction.jpg",
                link: "/services/mining" 
              },
              {
                title: "General Dealing",
                desc: "Effective supply of goods and services",
                image: "/trading.jpg",
                link: "/services/generaldealing"
              },
             
              {
                title: "Agriculture",
                desc: "Consultancy, Training, Fish ponds construction, Drip system installation",
                image: "/lab.jpg",
                link: "/services/agriculture"
              },
              {
                title: "Construction",
                desc: "Commercial and residential construction services",
                image: "/const1.jpg",
                link: "/services/construction"
              }
            ].map((service, index) => (
              <div key={index} className="group relative h-64 overflow-hidden rounded-lg">
              <Link href={service.link}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform group-hover:scale-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">{service.title}</h3>
                    <p className="text-gray-200">{service.desc}</p>
                    <button className="mt-4 text-orange-500 flex items-center hover:text-orange-400">
                      Learn More <ChevronRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* Floating Chat Button and Modal */}
      <div className="fixed bottom-8 right-8 z-50">
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 bg-gray-900 rounded-lg shadow-lg border border-orange-500 p-4 mb-4 w-64">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-orange-500">Contact Us</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-3">
              <button
                onClick={handleEmail}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Email
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </button>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
        >
          {isChatOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </button>
      </div>


      {/* Featured Products Section */}
      <div id="products" className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Gold Ore",
                desc: "High-grade gold ore from sustainable sources",
                image: "/gold.jpg"
              },
              {
                title: "Copper Ore",
                desc: "Premium quality copper ore",
                image: "/copper.jpg"
              },
              {
                title: "Copper Cathodes",
                desc: "Premium quality copper cathodes",
                image: "/copper_plates.jpg"
              },
              {
                title: "Silver",
                desc: "Premium quality Silver",
                image: "/silver.jpg"
              },
              {
                title: "Petrolium Oil",
                desc: "Petrolium Oil",
                image: "/petrol1.jpg"
              },
              {
                title: "Rare Earth Metals",
                desc: "Essential rare earth elements for technology",
                image: "/rare_earth.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="bg-black rounded-lg overflow-hidden border border-orange-900 hover:border-orange-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-500 mb-4">{product.title}</h3>
                  <p className="text-gray-400">{product.desc}</p>
                  <button className="mt-4 text-orange-500 flex items-center hover:text-orange-400">
                    View Details <ChevronRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* About Us */}
       <div id="about" className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">About Us</h2>
          <div className="flex">
            <div className="space-y-6">

              <div className="flex">
                <span>FLOODGATES SYMPHONY COMPANY LIMITED 
                    was incorporated on the 3rd day of January 2019 under the registration of Business
                    names Act of the Laws of Zambia. Our business activites include, general dealing and supply, Mining and trading, Agriculture Consultancy/Training.
                </span>
              </div>
              <h5 className="text-3xl text-orange-500 mb-8 text-center">Mission & Vision</h5>
              <span>Our mission is to achieve the reputation of a reliable goods and services delivery company. Our Vision is to deliver quality
                products and services at an affordable cost. 
                </span>

                <h5 className="text-3xl text-orange-500 mb-8 text-center">Company Registration Details</h5>
                
                <div className="flex items-center">
                <span> T-PIN NUMBER: 1018005048</span>
                </div>
                <div className="flex items-center">
                <span>PACRA COMPANIES REGISTRATION NO.: 120190000062</span>
                </div>
                <div className="flex items-center">
                <span>MINERAL TRADING PERMIT NUMBER: MTP/ 23138/25</span>
                </div>
                <div className="flex items-center">
                <span>WORKERS COMPENSATION CERTIFICATE NUMBER: ECN_0005012838</span>
                </div>
                <div className="flex items-center">
                <span>ZAMBIA PUBLIC PROCUREMENT AUTHORITY Reg.No.: 26246</span>
                </div>
                
            </div>

          </div>
        </div>
      </div>
      

      {/* Contact Section */}
      <div id="contact" className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">

              <div className="flex items-center">
                <Globe2 className="text-yellow-500 mr-4" size={24} />
                <span>Plot 1457/76/M off Shantumbu road Chalala, Lusaka, Zambia</span>
              </div>
              <div className="flex items-start">
                <Phone className="text-yellow-500 mr-4 mt-1 shrink-0" size={24} />
                <div className="flex flex-col">
                  <span>+260 (979) 720823</span>
                  <span>+260 (977) 582767</span>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-yellow-500 mr-4" size={24} />
                <span>floodgatessymphony@gmail.com</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>©Floodgates Symphony Company Zambia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;