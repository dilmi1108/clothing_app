import React from 'react';
import { ShoppingBag, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">StyleHub</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your premier destination for fashion-forward clothing for the whole family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/men" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">Men's Collection</a></li>
              <li><a href="/women" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">Women's Collection</a></li>
              <li><a href="/kids" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">Kids' Collection</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-orange-500 transition-colors duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-slate-300">
              <strong>Email:</strong> hello@stylehub.com<br />
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            &copy; 2024 StyleHub. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;