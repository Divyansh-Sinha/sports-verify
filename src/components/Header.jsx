import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white px-1 py-2 rounded-lg mb-1 flex justify-between items-center h-[65px] relative">
      <img className="w-[150px] h-[60px] object-fill" src="/logo.png" alt="logo" />

      {/* Desktop Navigation Links */}
      {/* <nav className="hidden sm:flex gap-4">
        <Link to="/divyansh" className="hover:underline">Divyansh</Link>
        <Link to="/shashank" className="hover:underline">Shashank</Link>
      </nav> */}

      {/* Hamburger Button */}
      {/* <button
        className="text-2xl sm:hidden"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button> */}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] right-3 bg-white text-black rounded-lg shadow-lg p-4 z-10 w-40">
          <nav className="flex flex-col gap-2">
            {/* <Link to="/divyansh" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Divyansh
            </Link>
            <Link to="/shashank" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Shashank
            </Link>
            <Link to="/utsav" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Shashank
            </Link>
            */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;