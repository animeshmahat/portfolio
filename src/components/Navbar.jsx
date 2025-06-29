import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  const navLinks = [
    { href: "#Projects", label: "Projects" },
    { href: "#Skills", label: "Skills" },
    { href: "#Contact", label: "Contact Me" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto relative px-4 py-6 md:px-20 lg:px-32 flex justify-center items-center">
        {/* Centered nav list */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons - absolute right */}
        <div className="absolute right-4 md:right-20 lg:right-32 flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden text-black dark:text-white"
            onClick={() => setShowMobileMenu(true)}
            aria-label="Open Menu"
          >
            <MdMenu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-white dark:bg-black text-black dark:text-white z-30 p-6 md:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setShowMobileMenu(false)}>
                <MdClose size={28} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 items-center mt-16 text-xl font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
