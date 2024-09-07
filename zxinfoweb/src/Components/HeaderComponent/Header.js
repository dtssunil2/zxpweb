import React, { useState, useEffect } from "react";
import Topbar from "../HomeComponent/Topbar";
import Navbar from "../HomeComponent/Navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`bg-indigo-950 transition-all duration-300 ${
          isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
        }`}
      >
        <Topbar />
      </div>
      <div 
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-indigo-950'
        }`}
      >
        <Navbar isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;