import React from "react";
import { motion } from "framer-motion"; // Optional: Added for smooth animations

const Onboard = () => {
  return (
    <div className="min-h-screen bg-[#0F1115] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0F1115] to-[#0F1115] flex flex-col items-center justify-between px-6 py-12 text-center overflow-hidden">
      
      {/* Top Section: Decorative Elements */}
      <div className="w-full max-w-md flex flex-col items-center flex-grow justify-center">
        
        {/* Image Section with Enhanced Glow */}
        <div className="relative group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-40 
                          group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <img
            src="/modelgirl.png"
            alt="Podcast Listener"
            className="relative w-72 sm:w-80 md:w-96 drop-shadow-[0_20px_50px_rgba(147,51,234,0.3)] 
                       animate-bounce-slow"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
        </div>

        {/* Text Content */}
        <div className="mt-12 space-y-4">
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Elevate Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Podcast Experience
            </span>
          </h1>
          
          <p className="text-gray-400 text-sm sm:text-base max-w-[280px] mx-auto leading-relaxed">
            Discover the world’s best stories and creators, curated just for you.
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="w-full max-w-md space-y-6">
        {/* Progress Dots (Optional UI touch) */}
        <div className="flex justify-center gap-2">
          <div className="w-8 h-1.5 rounded-full bg-purple-600"></div>
          <div className="w-2 h-1.5 rounded-full bg-gray-700"></div>
          <div className="w-2 h-1.5 rounded-full bg-gray-700"></div>
        </div>

        <button className="group relative w-full py-4 rounded-2xl text-white font-bold 
                         bg-gradient-to-r from-purple-600 to-indigo-600 
                         hover:from-purple-500 hover:to-indigo-500
                         shadow-[0_10px_20px_-5px_rgba(147,51,234,0.5)]
                         transition-all duration-300 active:scale-[0.98]">
          <span className="flex items-center justify-center gap-2">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
};

export default Onboard;