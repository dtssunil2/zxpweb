import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { SlClose } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://i.postimg.cc/4xhX5wht/zxpinfotech-high-resolution-logo-transparent.png"
              className="h-8 w-auto"
              alt="ZXPINFOTECH Logo"
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              ZXPINFOTECH
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : `${isScrolled ? 'text-gray-800' : 'text-white'} hover:bg-indigo-500 hover:text-white`
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:bg-indigo-500 hover:text-white flex items-center`}
                >
                  Pages <FaChevronDown className="ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Page 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Page 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Page 3</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              {isOpen ? <SlClose className="h-6 w-6" /> : <CiMenuFries className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-800 hover:bg-indigo-500 hover:text-white'
                }`
              }
              onClick={handleToggle}
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={toggleDropdown}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-500 hover:text-white flex items-center justify-between"
          >
            Pages <FaChevronDown />
          </button>
          {dropdownOpen && (
            <div className="pl-4">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-500 hover:text-white">Page 1</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-500 hover:text-white">Page 2</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-indigo-500 hover:text-white">Page 3</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;