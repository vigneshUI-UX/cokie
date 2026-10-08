import React from 'react';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import CardsSection from './components/CardsSection';
import FloatingCookie from './components/FloatingCookie';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <FloatingCookie />
      <HeroSection />
      <InfoSection />
      <CardsSection />
    </div>
  );
}

export default App;