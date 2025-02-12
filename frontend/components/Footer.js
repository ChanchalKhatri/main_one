import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left - Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">NovoCraft</h2>
          <p className="text-gray-400 text-sm">Crafting Digital Experiences</p>
        </div>

        {/* Middle - Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Services</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>

        {/* Right - Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} NovoCraft. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
