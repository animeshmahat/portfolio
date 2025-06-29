import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-lg font-semibold">Get in Touch</p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 hover:text-amber-500 transition"
          >
            <FaEnvelope /> mahatanimesh333@gmail.com
          </a>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/animeshmahat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/animesh-mahat-184b052a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/animesh_mahat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Animesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
