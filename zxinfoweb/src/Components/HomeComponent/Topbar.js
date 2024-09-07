import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail, IoMdClose, IoMdMenu } from "react-icons/io";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-indigo-950 text-white">
      {/* Desktop view */}
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
        <div className="flex space-x-4">
          {["FAQs", "Support", "Privacy", "Policy", "Career"].map((item) => (
            <a key={item} href="#" className="hover:text-indigo-300 transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
        <div className="flex space-x-6">
          <a href="mailto:info@example.com" className="flex items-center space-x-2 hover:text-indigo-300 transition-colors duration-200">
            <IoIosMail className="text-xl" />
            <span>info@example.com</span>
          </a>
          <a href="tel:+012345678" className="flex items-center space-x-2 hover:text-indigo-300 transition-colors duration-200">
            <IoCallOutline className="text-xl" />
            <span>+012 345 6789</span>
          </a>
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center px-4 py-2">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
          <div className="flex space-x-4">
            <a href="mailto:info@example.com" className="text-xl">
              <IoIosMail />
            </a>
            <a href="tel:+012345678" className="text-xl">
              <IoCallOutline />
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="px-4 py-2 bg-indigo-900 animate-fadeIn">
            {["FAQs", "Support", "Privacy", "Policy", "Career"].map((item) => (
              <a key={item} href="#" className="block py-2 hover:text-indigo-300 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Topbar;
