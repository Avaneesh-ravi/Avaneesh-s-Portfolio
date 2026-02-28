import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // This API increments the count every time the page loads
    // Replace 'avaneesh-portfolio' with a unique string for your site
    fetch('https://api.countapi.xyz/hit/avaneesh-ravi-portfolio/visits')
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch((err) => console.error('Error fetching visitor count:', err));
  }, []);

  return (
    <footer className="bg-black text-white px-6 py-10 lg:px-24 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left: Copyright & Visitor Count */}
        <div className="text-sm text-gray-400 text-center md:text-left">
          <p>© {new Date().getFullYear()} Avaneesh R. All rights reserved.</p>
          <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span>{views > 0 ? `${views} Views` : 'Loading views...'}</span>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-6 text-2xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Avaneesh-ravi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaGithub />
          </motion.a>
          {/* ... other icons ... */}
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
