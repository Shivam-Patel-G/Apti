import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white h-[8vh]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-gray-400">YourLogo</a>
        </div>
        <nav className="space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/courses" className="hover:text-gray-400">Courses</a>
          <a href="/resources" className="hover:text-gray-400">Resources</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </nav>
        <div>
          <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Sign Up / Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
