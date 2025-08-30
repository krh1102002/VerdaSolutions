import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/WhatsApp Image 2025-08-27 at 09.21.40_0c41ec94.jpg" 
                alt="Verda Solutions Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Verda Solutions</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Accelerating innovation through ethical, efficient, and patient-centric clinical research. 
              We are your trusted partner in advancing medical knowledge and elevating patient care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/therapeutic-areas" className="text-gray-300 hover:text-white transition-colors">Therapeutic Areas</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Global Presence</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">India</p>
                  <p className="text-gray-300 text-sm">Mumbai, Maharashtra</p>
                  <p className="text-gray-300 text-sm">+91 9167878003</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">US</p>
                  <p className="text-gray-300 text-sm">Pittsburgh, US</p>
                  <p className="text-gray-300 text-sm">+1 (832) 282-0459</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">EU</p>
                  <p className="text-gray-300 text-sm">Readings, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Verda Solutions. All rights reserved. | GCP Compliant Research Organization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;