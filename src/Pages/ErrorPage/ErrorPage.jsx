import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 text-center px-4">
      <h1 className="text-9xl font-extrabold mb-5 animate-bounce">🚀 404 🚀</h1>
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-lg lg:text-xl">
        Looks like you’re lost in space 🪐  
        Don’t worry, the stars will guide you back!
      </p>
      <Link
        to="/"
        className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-500 transition-all transform hover:scale-105"
      >
        🏠 Back to Home
      </Link>
      <div className="mt-10 flex justify-center space-x-3 text-4xl animate-pulse">
        🌟 ✨ 💫 🌙 🌌
      </div>
    </div>
    );
};

export default ErrorPage;