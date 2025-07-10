// components/AboutSection.tsx
import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-blue-700 dark:text-blue-400">
          About Me
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
          Passionate about building seamless digital experiences, I’m a Frontend
          Engineer with 4+ years of hands-on expertise in React, TypeScript, and
          modern UI frameworks.
        </p>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          I thrive on transforming complex ideas into intuitive, performant
          interfaces. Currently, I’m part of the talented team at{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            ZF Group
          </span>
          , contributing to the SCALAR fleet orchestration platform. My focus:
          clean code, scalable architecture, and delightful user journeys.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
