import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 lg:px-24 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left */}
        <div className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Avaneesh R. All rights reserved.
        </div>

        {/* Center Social Icons */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/Avaneesh-ravi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/avaneesh-ravi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:avaneeshravi4084@gmail.com"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-500 text-center md:text-right italic">
          Building intuitive digital experiences 🚀
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
