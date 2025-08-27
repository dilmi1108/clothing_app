import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, ShoppingCart, User, UserPlus } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'Kids', path: '/kids' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search functionality here
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-20">
            <Link to="/" className="flex items-center space-x-3">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-slate-800">StyleHub</span>
            </Link>
          </div>

          
          {/* Center - Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-20">
           {navLinks.map((link) => (
             <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-orange-500 bg-orange-50'
                  : 'text-slate-700 hover:text-orange-500 hover:bg-slate-50'
                }`}
             >
              {link.name}
           </Link>
          ))}
         </div>

          {/* Desktop Right Side - Search, Cart */}
          <div className="hidden lg:flex items-center space-x-4 mr-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </form>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-2 text-slate-700 hover:text-orange-500 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Auth Buttons  */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="flex items-center space-x-1 px-4 py-2">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="flex items-center space-x-1 px-4 py-2">
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-orange-500 transition-colors duration-200 p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-11 pr-4 py-3 w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                  />
                </div>
              </form>

              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-slate-700 hover:text-orange-500 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Cart */}
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-md text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-50 transition-colors duration-200"
              >
                <ShoppingCart className="h-6 w-6 mr-3" />
                Cart (3)
              </Link>

              {/* Mobile Auth Buttons */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-3 rounded-md text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-50 transition-colors duration-200"
                >
                  <User className="h-6 w-6 mr-3" />
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-3 rounded-md text-lg font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
                >
                  <UserPlus className="h-6 w-6 mr-3" />
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;