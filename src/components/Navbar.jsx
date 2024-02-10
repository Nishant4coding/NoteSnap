import React, { useState } from "react";
import Logo from "../Assets/NoteSnapLogo.svg";
import searchIcon from "../Assets/Search.svg";
import hamberger from '../Assets/hamberger.svg';
import closeIcon from '../Assets/hamberger.svg'; // Assuming you have a close icon

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full lg:pl-20 lg:pr-20 lg:w-full fixed top-0 z-50 bg-black pt-5">
      <div className="w-full h-20 flex items-center justify-between">
        <img src={Logo} alt="" className="lg:w-72 w-40 mr-auto" />
         {/* Desktop Navigation */}
         <div className="hidden sm:flex gap-32 text-2xl mx-auto">
          <a href="/NoteSnap" className="text-center text-white font-bold font-Inter">
            Home
          </a>
          <a
            href="/NoteSnap#service"
            className="text-center text-white font-bold font-Inter"
          >
            Services
          </a>
          <a
            href="/NoteSnap#contact"
            className="text-center text-white font-bold font-Inter"
          >
            Contact
          </a>
          <a
            href="/NoteSnap#about"
            className="text-center text-white font-bold font-Inter"
          >
            About
          </a>
          </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-white mr-auto sm:hidden"
        >
          {isMobileMenuOpen ? (
            <img src={closeIcon} alt="Close" width={20} />
          ) : (
            <img src={hamberger} alt="Hamberger" width={20} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="absolute right-0 top-0 h-full bg-black w-64 py-8 px-6">
            <button className="absolute top-5 right-5" onClick={closeMobileMenu}>
              <img src={closeIcon} alt="Close" width={20} />
            </button>
            <div className="flex flex-col text-2xl">
              <a
                href="/NoteSnap"
                className="text-white font-bold font-Inter py-2"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a
                href="/NoteSnap#service"
                className="text-white font-bold font-Inter py-2"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a
                href="/NoteSnap#contact"
                className="text-white font-bold font-Inter py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
              <a
                href="/NoteSnap#about"
                className="text-white font-bold font-Inter py-2"
                onClick={closeMobileMenu}
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
