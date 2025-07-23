import React from 'react';
import Loader from './ui/loader';
import logo from '../assets/logo.png';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="GrandBid Logo" className="h-20 w-auto" />
        </div>
        
        {/* Loading Animation */}
        <Loader />
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-amber-900 font-serif">
            Preparing Your Magical Experience
          </h2>
          <p className="text-amber-700 font-medium">
            Please wait while we set up your wizarding auction house...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
