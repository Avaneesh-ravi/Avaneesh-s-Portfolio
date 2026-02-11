import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const nameRef = useRef(null);

  useEffect(() => {
    // Animate links from right
    gsap.fromTo(
      linksRef.current,
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Animate name from left
    gsap.fromTo(
      nameRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  // 🔥 IMPORTANT: resume must be inside PUBLIC folder
  // public/avaneesh_resume.pdf

  const navItems = [
    {
      label: "Resume",
      href: "/avaneesh_resume.pdf",
      download: true, // 👈 makes resume download instead of opening blank
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/avaneesh-ravi",
    },
    {
      label: "GitHub",
      href: "https://github.com/Avaneesh-ravi",
    },
  ];

  return (
    <nav
      ref={navRef}
      className="w-full bg-[#0a0a0a] text-white px-6 py-4 border-b border-gray-700 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LEFT LINKS */}
        <div className="flex gap-6 text-sm sm:text-base overflow-hidden font-Oswald">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              ref={(el) => (linksRef.current[index] = el)}
              className="hover:text-green-400 transition duration-200"
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              download={item.download ? "" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* RIGHT TITLE */}
        <div
          ref={nameRef}
          className="font-semibold text-lg sm:text-xl whitespace-nowrap font-mono"
        >
          Avaneesh R | Web Developer & Designer
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
