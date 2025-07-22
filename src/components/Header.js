import React, { useState } from 'react';
import './Header.css';

export default function Header({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ['home', 'flowers', 'services', 'login'];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); 
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => setCurrentPage('home')}>
      
        <img src="/logo.jpg" alt="Flowers and Other Stories" />
      </div>

      <h1 className="header-title" onClick={() => setCurrentPage('home')}>
        FAOS
      </h1>

     
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    
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
