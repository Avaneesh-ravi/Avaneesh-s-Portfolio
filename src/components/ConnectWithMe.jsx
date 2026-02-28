import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ConnectWithMe = () => {
  const form = useRef(null);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS with your Public Key once when the component mounts
  useEffect(() => {
    emailjs.init("ya8uE8UM4j66HfXzW"); 
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Using the Service ID from your screenshot and your Template ID
    emailjs
      .sendForm(
        'service_advir5a', 
        'template_5k8ez91', 
        form.current
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error('FAILED...', error);
          alert(`❌ Error: ${error.text || "Check console for details"}`);
          setLoading(false);
        }
      );
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 py-20 lg:px-24 overflow-hidden flex flex-col justify-center items-center relative"
    >
      {/* Glow Background */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-pink-500 blur-3xl opacity-10 rounded-full pointer-events-none" />

      {/* Background CONNECT Text */}
      <motion.h1
        style={{ y: yParallax }}
        className="absolute text-[100px] md:text-[140px] font-extrabold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent opacity-10 top-20 left-0 select-none pointer-events-none whitespace-nowrap"
      >
        CONNECT
      </motion.h1>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12 text-center"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400">
          WANNA WORK TOGETHER ?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          <span className="text-white">LET'S </span>
          <span className="text-green-400">CONNECT</span>
          <span className="text-white"> →</span>
        </h2>

        {/* Your Contact Info */}
        <p className="mt-4 text-gray-400 text-sm">
          📧 avaneeshravi4084@gmail.com | 📞 +91-9842951881
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl bg-white/5 border border-gray-700 backdrop-blur-md p-8 rounded-3xl shadow-lg space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm mb-1 text-gray-300">
              First Name:
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1 text-gray-300">
              Last Name:
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Surname"
              required
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="yourmail@email.com"
            required
            className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Your Message:
          </label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Hi! I would like to connect with you."
            className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 px-6 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-600 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </motion.form>
    </section>
  );
};

export default ConnectWithMe;
