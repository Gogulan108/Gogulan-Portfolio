import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex flex-col sm:flex-row items-center justify-center gap-10 py-10 sm:py-20"
    >
      {/* Profile Image with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <img
          src="/profile.png" // Place your image in public/profile.jpg
          alt="Gogulan Kanagaraj"
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </motion.div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-bold leading-tight mb-2"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Gogulan
          </span>{" "}
          👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-1 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl"
        >
          Frontend Software Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-2 text-base text-gray-500 dark:text-gray-400 max-w-xl"
        >
          I build fast, accessible, and beautiful web apps.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="mt-6 flex items-center gap-4 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="mailto:gogulankrish5@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition"
            aria-label="Email"
            title="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gogulankanagaraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/gogulankrish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="/Gogulan_Kanagaraj_Resume_25_1.pdf" // Place your resume in public/resume.pdf
            download
            className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-full shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
