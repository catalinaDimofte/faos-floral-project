import React, { useState } from 'react';
import './Header.css';

export default function Header({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ['home', 'flowers', 'services', 'login'];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // close menu after click on mobile
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => setCurrentPage('home')}>
        {/* Replace with your logo img if you want */}
        <img src="/logo.jpg" alt="Flowers and Other Stories" />
      </div>

      <h1 className="header-title" onClick={() => setCurrentPage('home')}>
        FAOS
      </h1>

      {/* Hamburger button visible on mobile */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        {pages.map((page) => (
          <button
            key={page}
            className={`nav-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => handleNavClick(page)}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}
