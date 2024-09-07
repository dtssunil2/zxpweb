import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlClose } from "react-icons/sl";
import { CiMenuFries } from "react-icons/ci";

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <span className={`font-bold text-xl ${isScrolled ? 'text-indigo-950' : 'text-white'}`}>
              ZXPINFOTECH
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'text-indigo-500'
                      : `${isScrolled ? 'text-indigo-950' : 'text-white'} hover:text-indigo-500`
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`px-3 py-2 text-sm font-medium ${isScrolled ? 'text-indigo-950' : 'text-white'} hover:text-indigo-500 flex items-center`}
              >
                Pages <IoMdArrowDropdown className="ml-1" />
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

          <div className="lg:hidden">
            <button
              onClick={handleToggle}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-indigo-950' : 'text-white'} hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              {isOpen ? <SlClose className="h-6 w-6" /> : <CiMenuFries className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-indigo-500'
                    : 'text-indigo-950 hover:text-indigo-500'
                }`
              }
              onClick={handleToggle}
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={toggleDropdown}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-indigo-950 hover:text-indigo-500 flex items-center justify-between"
          >
            Pages <IoMdArrowDropdown />
          </button>
          {dropdownOpen && (
            <div className="pl-4">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-950 hover:text-indigo-500">Page 1</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-950 hover:text-indigo-500">Page 2</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-950 hover:text-indigo-500">Page 3</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;