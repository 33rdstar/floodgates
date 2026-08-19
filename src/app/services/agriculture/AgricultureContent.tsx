'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Fish, SprayCan } from 'lucide-react';
import { useRouter } from 'next/navigation';


const Agriculture = () => {
    const router = useRouter();
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const slides = [
        {
            image: "/fishpond1.jpg",
            title: "",
        },
        {
            image: "/fishpond2.jpg",
            title: "",
        },
        {
            image: "/fishpond3.jpg",
            title: "",
        },
        {
            image: "/liners1.jpg",
            title: "",
        },
        {
            image: "/liners2.jpg",
            title: "",
        },
        {
            image: "/Fert1.jpg",
            title: "",
        },
        {
            image: "/Fert2.jpg",
            title: "",
        }
    ];

    // Double the slides array to ensure smooth looping
    const doubledSlides = [...slides, ...slides];


    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % slides.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };


    return (
        <div className="min-h-screen bg-white text-gray-100">
            {/* Back Button */}
            <div className="bg-black border-b border-orange-900 p-4">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-orange-500 hover:text-orange-600 transition-colors"
                >
                    <ChevronLeft size={24} />
                    <span className="ml-1">Back</span>
                </button>
            </div>

            {/* Continuous Banner Section */}
            <div className="relative h-[400px] bg-white overflow-hidden">
                <div className="absolute w-[200%] h-full flex animate-scroll">
                    {doubledSlides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative w-1/4 h-full flex-shrink-0"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                sizes="25vw"
                                className="object-cover hover:opacity-80 transition-opacity"
                            />
                        </div>
                    ))}
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/50">
                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
                            Agriculture
                        </h1>
                        <p className="text-xl text-gray-200 mt-4">
                            All your needs covered
                        </p>
                        <button
                            onClick={() => setGalleryOpen(true)}
                            className="mt-8 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors w-fit"
                        >
                            View Gallery
                        </button>
                    </div>
                </div>
            </div>

          {/* Gallery Modal */}
                       {galleryOpen && (
                         <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
                             {/* Gallery Header */}
                             <div className="p-4 flex justify-between items-center border-b border-orange-900">
                                 <h2 className="text-xl text-orange-500">Gallery</h2>
                                 <button
                                     onClick={() => setGalleryOpen(false)}
                                     className="text-white hover:text-orange-500"
                                 >
                                     <X size={24} />
                                 </button>
                             </div>

                             {/* Main Gallery View */}
                             <div className="flex-1 overflow-auto p-4">
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                     {slides.map((slide, index) => (
                                         <div
                                             key={index}
                                             className="relative h-64 group cursor-pointer"
                                             onClick={() => setCurrentImageIndex(index)}
                                         >
                                             <Image
                                                 src={slide.image}
                                                 alt={slide.title}
                                                 fill
                                                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                 className="object-cover rounded-lg"
                                             />
                                             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                                                 <p className="text-white text-center p-2">{slide.title}</p>
                                             </div>
                                         </div>
                                     ))}
                                 </div>
                             </div>

                             {/* Full Size Image View */}
                             {currentImageIndex !== null && (
                                 <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                                     <button
                                         onClick={() => setGalleryOpen(false)}
                                         className="absolute top-4 right-4 text-white hover:text-orange-500 z-50"
                                     >
                                         <X size={32} />
                                     </button>

                                     <button
                                         onClick={prevImage}
                                         className="absolute left-4 text-white hover:text-orange-500"
                                     >
                                         <ChevronLeft size={48} />
                                     </button>

                                     <div className="relative w-full h-full p-8 flex items-center justify-center">
                                         <Image
                                             src={slides[currentImageIndex].image}
                                             alt={slides[currentImageIndex].title}
                                             fill
                                             sizes="100vw"
                                             className="object-contain"
                                         />
                                     </div>

                                     <button
                                         onClick={nextImage}
                                         className="absolute right-4 text-white hover:text-orange-500"
                                     >
                                         <ChevronRight size={48} />
                                     </button>

                                     <div className="absolute bottom-4 left-0 right-0 text-center text-white text-xl">
                                         {slides[currentImageIndex].title}
                                     </div>
                                 </div>
                             )}
                         </div>
                     )}

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                    {/* AgriEquipment*/}
                    <div className="bg-gray-700 rounded-lg p-8 border border-orange-900">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">
                            <SprayCan className="text-orange-500 mr-4" size={24} />
                            Agriculture Equipment
                        </h2>
                        <p className="text-gray-300 mb-4">
                            We supply all sorts of agricultural equipment.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Sprayers</li>
                            <li>Farming Equipment</li>
                            <li>Boots</li>
                            <li>water pumps</li>
                            <li>Fertilizers</li>
                        </ul>
                    </div>

                    {/* Cleaning Supplies */}
                    <div className="bg-gray-700 rounded-lg p-8 border border-orange-900">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">
                            <Fish className="text-orange-500 mr-4" size={24} />
                            Consultancy and Training
                        </h2>
                        <p className="text-gray-300 mb-4">
                            We offer:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Fish Pond Construction</li>
                            <li>Drip irrigation installation</li>
                            <li>Farmers Training Programs</li>
                            <li>e.t.c</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agriculture;
