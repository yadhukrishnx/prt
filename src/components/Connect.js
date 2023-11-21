// src/components/Contact.js

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl mb-8 font-medium">Let's Connect!</h2>
        <div className="flex justify-center mb-8">
          <a
            href="https://github.com/yadhukrishnx"
            className="text-white mx-4 hover:text-gray-400 text-green-300"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/yadhukrishnx"
            className="text-white mx-4 hover:text-gray-400 text-green-300"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/yadhukrishnx"
            className="text-white mx-4 hover:text-gray-400 text-green-300"
          >
            <FaInstagram className="text-4xl" />
          </a>
          <a
            href="mailto:yadhukrishnx@gmail.com"
            className="text-white mx-4 hover:text-gray-400 text-green-300"
          >
            <FaEnvelope className="text-4xl" />
          </a>
        </div>
        <p className="text-lg">
          Feel free to reach out to me on any of the platforms above!
        </p>
      </div>
    </section>
  );
}
