'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Construction = () => {
    const router = useRouter();
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const slides = [
        {
            image: "/const1.jpg",
            title: ""

        },
        {
            image: "/const2.jpg",
            title: ""
        },
        {
            image: "/const3.jpg",
            title: ""
        },
        {
            image: "/const4.jpg",
            title: ""
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
                <div className="absolute w-[200%] h-full flex" style={{ animation: 'scroll 20s linear infinite' }} >
                    {doubledSlides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-1/4 h-full flex-shrink-0"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                            />
                        </div>
                    ))}
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/50">
                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
                            Construction
                        </h1>
                        <p className="text-xl text-gray-200 mt-4">
                            Commercial and residential construction service
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
                                    className="relative group cursor-pointer"
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-64 object-cover rounded-lg"
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

                            <div className="w-full h-full p-8 flex items-center justify-center">
                                <img
                                    src={slides[currentImageIndex].image}
                                    alt={slides[currentImageIndex].title}
                                    className="max-w-full max-h-full object-contain"
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
                    {/* Construction */}
                    <div className="bg-gray-700 rounded-lg p-8 border border-orange-900">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">
                            <Building2 className="text-orange-500 mr-4" size={24} />
                            Commercial and residential construction services
                        </h2>
                        <p className="text-gray-300 mb-4">
                            We offer the following:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Roads / Feeder Roads</li>
                            <li>Dams</li>
                            <li>Housing</li>
                            <li>Schools and Office Blocks</li>
                            <li>Architectural Designs</li>
                            <li>e.t.c</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Construction;