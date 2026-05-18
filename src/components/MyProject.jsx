import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Donation Tracking Management System',
    description:
      'Web-based system to manage and track donations using Python Flask, MySQL, and Bootstrap.',
    techStack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    link: 'https://github.com/Avaneesh-ravi',
    image:
      'https://www.shutterstock.com/image-vector/fundraising-concept-startup-idea-people-600nw-2421467061.jpg',
  },

  {
    title: 'StudyMate AI',
    description:
      'AI-powered application that allows students to upload PDFs and get instant answers using intelligent document processing.',
    techStack: ['Python', 'AI', 'Firebase'],
    link: 'https://github.com/Avaneesh-ravi',
    image:
      'https://img.freepik.com/free-vector/hand-drawn-gen-alpha-illustration_23-2151254927.jpg',
  },

  {
    title: 'Triptally',
    description:
      'Travel and lorry expense tracking platform designed to help transport owners manage trips and logistics budgeting.',
    techStack: ['React', 'Supabase', 'Tailwind CSS'],
    link: 'https://github.com/Avaneesh-ravi',
    image:
      'https://www.creativehatti.com/wp-content/uploads/edd/2021/11/Truck-driver-is-happy-and-standing-with-truck-6-large.jpg',
  },

  {
    title: 'Ledger Application',
    description:
      'Financial ledger system for business owners to track income, expenses, and transaction history.',
    techStack: ['Python', 'SQL', 'UI Design'],
    link: 'https://github.com/Avaneesh-ravi',
    image:
      'https://thumbs.dreamstime.com/z/cartoon-accountant-calculator-ledger-illustration-smiling-holding-displaying-large-number-open-general-book-415655590.jpg',
  },

  {
    title: 'Organ Donation App UI/UX',
    description:
      'Healthcare UI design created in Figma focusing on accessibility and smooth user experience.',
    techStack: ['Figma', 'UI/UX'],
    link: 'https://github.com/Avaneesh-ravi',
    image:
      'https://www.animaster.com/wp-content/uploads/2023/01/03.-Organ-Donation.jpg',
  },

  {
    title: 'Train Tracking UI/UX',
    description:
      'Modern UI design for a real-time train tracking application with improved navigation.',
    techStack: ['Figma', 'Framer'],
    link: 'https://github.com/Avaneesh-ravi',
    image:
      'https://media.istockphoto.com/id/1481033088/vector/station-platform-tourist-train-railway-concept-vector-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=2EXM_0RsiTHa7qqrFzLMS1pf6eIvIxRSIa-EvOQJo0A=',
  },

  {
    title: 'LocalLink',
    description:
      'A hyperlocal platform connecting clients with service providers like plumbers and electricians for real-time booking and appointment management.',
    techStack: ['React Native', 'Node.js', 'Socket.io', 'Google Maps API'],
    link: 'https://github.com/Avaneesh-ravi',
    image:
      'https://c8.alamy.com/comp/2HK94RM/communication-with-customer-and-call-center-vector-illustration-cartoon-online-help-and-information-assistance-of-female-operator-in-headset-to-girl-with-phone-website-support-service-concept-2HK94RM.jpg',
  },

  {
    title: 'Rental Management System',
    description:
      'A comprehensive property rental management platform enabling landlords to manage listings, track tenants, handle payments, and oversee maintenance requests seamlessly.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/Avaneesh-ravi',
    // New persistent cartoon dashboard link
    image: 'data:image/jpeg;base64,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',
  },

  {
    title: 'WhatsApp Clone',
    description:
      'A full-stack WhatsApp Web clone focused on real-time chat functionality, group communication, and dynamic status updates. Built with React.js frontend, Node.js + Express backend, MongoDB database, and Socket.IO for seamless real-time WebSocket capabilities.',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Google Gemini AI'],
    link: 'https://whatsapp-mern-task.vercel.app/login',
    // New persistent cartoon chat interface link
    image: 'data:image/png;base64,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',
    isLive: true,
  },
];

const MyProjects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 py-20 lg:px-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Glow Background */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-pink-500 blur-3xl opacity-10 rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 mb-16 text-center">
        <motion.h1
          style={{ y: yParallax }}
          className="absolute text-[100px] md:text-[140px] font-extrabold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent opacity-10 -top-8 left-0 select-none pointer-events-none whitespace-nowrap"
        >
          PROJECTS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            MY <span className="text-pink-500">PROJECTS</span>
          </h2>

          <motion.div
            animate={{ width: ['10%', '20%', '0%'] }}
            initial={{ width: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="h-1 bg-gradient-to-r from-pink-400 to-purple-500 mt-2 mx-auto rounded"
          />
        </motion.div>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 flex flex-col gap-14">
        {projects.map(({ title, description, techStack, link, image, isLive }, index) => (
          <motion.div
            key={title}
            className="group relative bg-white/5 border border-gray-700 backdrop-blur-md p-6 rounded-3xl shadow-lg transition-all duration-300 cursor-pointer hover:shadow-pink-500/40"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            onClick={() => window.open(link, '_blank')}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* TEXT */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                    {title}
                  </h3>
                  {isLive && (
                    <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500 text-green-400 text-xs px-3 py-1 rounded-full font-medium">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </span>
                  )}
                </div>

                <p className="text-sm mt-2 text-gray-300">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-500/10 border border-pink-500 text-pink-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-sm text-pink-400 font-medium hover:underline">
                  <FaGithub className="mr-2" />
                  {isLive ? 'View Live App' : 'View on GitHub'}
                </div>
              </div>

              {/* IMAGE */}
              <div className="flex-1 w-full overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
