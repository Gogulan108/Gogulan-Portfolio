import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Database } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "ZF Group",
    period: "Feb 2023 – Present",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    highlights: [
      "Lead frontend development for SCALAR, a digital fleet orchestration platform.",
      "Built and maintained scalable, modular UIs and reusable component libraries.",
      "Integrated new technologies to enhance system performance and capabilities.",
      "Collaborated with cross-functional teams to deliver high-quality features.",
    ],
  },
  {
    role: "Programmer",
    company: "Ionixx Technologies",
    period: "May 2022 – Jan 2023",
    icon: <Code className="w-6 h-6 text-purple-600" />,
    highlights: [
      "Developed frontend solutions for an NFT marketplace using React.",
      "Worked closely with backend and QA teams for robust, scalable features.",
    ],
  },
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    period: "Oct 2020 – Apr 2022",
    icon: <Briefcase className="w-6 h-6 text-gray-600" />,
    highlights: [
      "Contributed to enterprise banking web apps using microservices architecture.",
      "Collaborated on code maintenance and enhancements with global teams.",
      "Completed internal certifications to improve communication and technical skills.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-20 bg-white dark:bg-gray-900">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Experience
      </h2>
      <div className="relative border-l-2 border-blue-200 dark:border-blue-800 pl-6 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700"
          >
            <span className="absolute -left-9 top-6 bg-blue-100 dark:bg-blue-900 rounded-full p-2 shadow">
              {exp.icon}
            </span>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                {exp.role}{" "}
                <span className="text-gray-700 dark:text-gray-200 font-normal">
                  {" "}
                  @ {exp.company}
                </span>
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ExperienceSection;
