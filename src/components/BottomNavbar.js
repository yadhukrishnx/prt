// src/components/BottomNavbar.js

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex justify-between items-center">
      <div className="flex space-x-1">
        <a
          href="https://github.com/yadhukrishnx"
          className="text-white hover:text-green-300"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          className="text-white hover:text-gray-400 text-blue-500"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile"
          className="text-white hover:text-green-300 text-pink-200"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://www.youtube.com/your-youtube-channel"
          className="text-white hover:text-gray-400 text-red-400"
        >
          <FaYoutube className="text-2xl" />
        </a>
      </div>
      <p className="text-green-300  hover:text-gray-400">Yadhukrishnx</p>
    </nav>
  );
}
