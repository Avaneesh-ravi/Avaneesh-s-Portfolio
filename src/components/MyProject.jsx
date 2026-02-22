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
        {projects.map(({ title, description, techStack, link, image }, index) => (
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
                <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                  {title}
                </h3>

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
                  View on GitHub
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
