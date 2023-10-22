import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">&copy; 2023 Tasty Tracks. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/" className="hover:text-gray-300">Terms of Service</a>
          <a href="/" className="hover:text-gray-300">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
