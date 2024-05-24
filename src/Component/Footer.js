import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-center md:text-left text-sm">
        © 2023 Copywrite. All rights reserved by QodeMatrix
      </p>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="text-sm">Documentation</a>
        <a href="#" className="text-sm">Support</a>
      </div>
    </div>
  );
}

export default Footer;
