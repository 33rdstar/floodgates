'use client'

import React from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home page with section hash
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  const navigateToService = (service: string) => {
    router.push(`/services/${service}`);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black border-b border-orange-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => router.push('/')} 
              className="text-2xl font-bold text-orange-500"
            >
              FloodGates Symphony Company Ltd
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavigation('home')} className="text-gray-300 hover:text-orange-500">
              Home
            </button>
            <div className="relative group">
              <button onClick={() => handleNavigation('services')} className="text-gray-300 hover:text-orange-500">
                Services
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-black border border-orange-900 mt-2">
                <button 
                  onClick={() => navigateToService('mining')} 
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-900"
                >
                  Mining
                </button>
                <button 
                  onClick={() => navigateToService('agriculture')} 
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-900"
                >
                  Agriculture
                </button>
                <button 
                  onClick={() => navigateToService('generaldealing')} 
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-900"
                >
                  General Dealing
                </button>
              </div>
            </div>
            <button onClick={() => handleNavigation('products')} className="text-gray-300 hover:text-orange-500">
              Products
            </button>
            <button onClick={() => handleNavigation('about')} className="text-gray-300 hover:text-orange-500">
              About
            </button>
            <button onClick={() => handleNavigation('contact')} className="text-gray-300 hover:text-orange-500">
              Contact
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => handleNavigation('home')} 
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('services')} 
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500"
            >
              Services
            </button>
            <div className="pl-4 space-y-1">
              <button 
                onClick={() => navigateToService('mining')} 
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500"
              >
                Mining
              </button>
              <button 
                onClick={() => navigateToService('agriculture')} 
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500"
              >
                Agriculture
              </button>
              <button 
                onClick={() => navigateToService('generaldealing')} 
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500"
              >
                General Dealing
              </button>
            </div>
            <button 
              onClick={() => handleNavigation('products')} 
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;