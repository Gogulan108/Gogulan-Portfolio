import React from "react";
import { motion } from "framer-motion";
import { Atom, Files, FileType2, FileCode2, Palette } from "lucide-react"; // Add FileCode2 and Palette

const mainSkills = [
  {
    name: "React",
    icon: <Atom className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    name: "JavaScript",
    icon: <Files className="w-8 h-8 text-yellow-400" />,
    color: "bg-yellow-100 dark:bg-yellow-900",
  },
  {
    name: "TypeScript",
    icon: <FileType2 className="w-8 h-8 text-blue-400" />,
    color: "bg-blue-50 dark:bg-blue-800",
  },
  {
    name: "HTML",
    icon: <FileCode2 className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-100 dark:bg-orange-900",
  },
  {
    name: "CSS",
    icon: <Palette className="w-8 h-8 text-sky-500" />,
    color: "bg-sky-100 dark:bg-sky-900",
  },
];

const skillGroups = [
  {
    title: "UI Architecture",
    skills: ["Component Libraries", "Micro Frontends", "HOC", "Context API"],
  },
  {
    title: "Styling Systems",
    skills: ["Material UI", "Styled-Components", "Tailwind CSS"],
  },
  {
    title: "State Management",
    skills: ["Redux", "React Query", "Context API"],
  },
  {
    title: "API & Backend",
    skills: ["RESTful APIs", "GraphQL", "JSON", "Axios", "Swagger"],
  },
  {
    title: "Testing & QA",
    skills: ["Jest", "React Testing Library"],
  },
  {
    title: "Performance",
    skills: ["Lighthouse", "Chrome DevTools", "Lazy Loading", "Code Splitting"],
  },
  {
    title: "Accessibility & UX",
    skills: [
      "WCAG Standards",
      "Responsive Design",
      "Cross-browser Compatibility",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Webpack", "Vite", "VSCode", "JIRA", "Figma", "Postman"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Skills
        </h2>

        {/* Main Skills with continuous floating animation */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {mainSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 4px 24px 0 rgba(0,0,0,0.08)",
                  "0 8px 32px 0 rgba(0,0,0,0.16)",
                  "0 4px 24px 0 rgba(0,0,0,0.08)",
                ],
              }}
              transition={{
                delay: i * 0.15,
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className={`flex flex-col items-center px-6 py-4 rounded-xl shadow-md ${skill.color} border border-gray-200 dark:border-gray-800`}
            >
              {skill.icon}
              <span className="mt-2 font-semibold text-lg text-gray-900 dark:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-start border border-gray-100 dark:border-gray-800 transition"
            >
              <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-700 dark:text-gray-100 text-sm pl-2 relative before:content-['•'] before:absolute before:-left-2 before:text-blue-500"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
