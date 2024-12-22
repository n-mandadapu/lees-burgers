import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Location from './components/Location';
import Contact from './components/Contact';
import Order from './components/Order';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Location />
        <Contact />
        <Order />
      </main>
      <Footer />
    </div>
  );
}

export default App;