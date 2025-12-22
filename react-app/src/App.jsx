import React from 'react';
import './index.css';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreCompetencies from './components/CoreCompetencies';
import StackSection from './components/StackSection';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Scene from './components/Scene';

function App() {
  return (
    <>
      <CustomCursor />
      <Scene />
      <Header />
      <main className="relative z-10">
        <Hero />
        <CoreCompetencies />
        <StackSection />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
