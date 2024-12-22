import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80"
          alt="Delicious burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Lee's Burgers</h1>
          <p className="text-xl md:text-2xl mb-8">The Best Burgers in Town</p>
          <button
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 transition-colors"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;