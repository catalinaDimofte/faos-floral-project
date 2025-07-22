import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Flowers and Other Stories. All rights reserved.</p>
    </footer>
  );
}
