import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = links
        .map((link) => {
          const section = document.getElementById(link.id);
          return section ? { id: link.id, offset: section.offsetTop } : null;
        })
        .filter(Boolean) as { id: string; offset: number }[];

      const scrollY = window.scrollY + 100;
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollY >= sectionOffsets[i].offset) {
          setActive(sectionOffsets[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:text-white shadow-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <span className="text-lg font-bold text-blue-700 dark:text-blue-400">
          Gogulan.dev
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  active === link.id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="md:hidden relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
            <AnimatePresence>
              {menuOpen && (
                <motion.ul
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 space-y-2 z-50"
                >
                  {links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={() => setMenuOpen(false)}
                        className={`block w-full px-3 py-2 rounded text-sm text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900 ${
                          active === link.id
                            ? "font-semibold text-blue-600 dark:text-blue-400"
                            : ""
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
