import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    // Handle item click logic here
   navigate("pricing")
    setIsOpen(false);
  };

  return (
    <div className="relative  inline-block text-left z-10">
      <button
        onClick={handleToggle}
        type="button"
        className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white border  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Pages
        {isOpen ? (
          <FiChevronUp className="ml-2 -mr-1 h-5 w-5" />
        ) : (
          <FiChevronDown className="ml-2 -mr-1 h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div
            className="py-1 flex flex-col items-center"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              // onClick={() => handleItemClick('Dashboard')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Dashboard
            </button>
            <button
              // onClick={() => handleItemClick('Settings')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Settings
            </button>
            <button
              
              onClick={handleItemClick}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Pricing
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
