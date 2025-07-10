import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed my personal portfolio to showcase my skills, experience, and projects. Built with React, TypeScript, and Tailwind CSS, featuring dark mode, responsive design, and smooth animations with Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/your-chat-app-repo", // replace with your repo
    demo: "https://your-chat-app-demo.vercel.app", // replace with your live demo
  },
  {
    title: "Real-Time Chat Platform (Slack Clone)",
    description: `
    A real-time chat application inspired by Slack, featuring public/private channels, threaded replies, typing indicators, and secure Firestore integration. 
    Built with React, Firestore, and modern UI/UX patterns. 
    Includes robust security rules and a responsive, interactive interface.
  `,
    tech: ["React", "Firebase Firestore", "Tailwind CSS"],
    github: "https://github.com/yourusername/your-chat-app-repo", // replace with your repo
    demo: "https://your-chat-app-demo.vercel.app", // replace with your live demo
  },
  {
    title: "SCALAR Fleet Platform – Eco Performance Dashboard",
    description:
      "At ZF Group, I developed analytics dashboards for driver and fleet performance, integrating real-time data and advanced visualizations. Improved data fetching and report generation using React Query.",
    tech: ["React", "TypeScript", "Redux", "React Query", "Material UI"],
  },
  {
    title: "SCALAR Fleet Platform – Cargo Mobile App",
    description:
      "Built a React Native app for drivers to monitor real-time performance metrics",
    tech: ["React Native", "TypeScript", "Redux"],
  },
  {
    title: "NFT Marketplace (Mojito)",
    description:
      "At Ionixx Technologies, I developed the frontend for a blockchain-enabled NFT marketplace, collaborating with backend and QA teams for secure, scalable features.",
    tech: ["React", "Blockchain", "Tailwind", "Jest"],
  },
  {
    title: "BMO Online Banking UI",
    description:
      "At TCS, contributed to the Bank of Montreal’s Online Banking for Business web app, focusing on micro frontends and enterprise-grade UI.",
    tech: ["JavaScript", "Micro Frontends", "HTML/CSS", "Angular", "React"],
  },
  // Add personal or open source projects here if you have them!
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow bg-gray-50 dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 mr-2 px-4 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm transition"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-500 text-sm transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
