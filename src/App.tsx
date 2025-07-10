// App.tsx
import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <Navbar />
    <main className="max-w-6xl mx-auto px-4">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
);

export default App;
