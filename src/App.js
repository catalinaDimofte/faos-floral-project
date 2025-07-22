import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Flowers from './pages/Flowers';
import Services from './pages/Services';
import Login from './pages/Login';

import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'flowers': return <Flowers />;
      case 'services': return <Services />;
      case 'login': return <Login />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
