import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black transition-colors duration-500 text-center flex flex-col justify-center items-center overflow-hidden">
      <Navbar />

      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#00000000" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#888" },
            links: { enable: true, color: "#888", distance: 120 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.5 },
            size: { value: 2 },
          },
        }}
        className="absolute w-full h-full z-0"
      />

      {/* Hero Text */}
      <div className="z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-black dark:text-white"
        >
          <span className="text-amber-500">Passionate&nbsp;</span>
          <Typewriter
            words={["Developer", "React Enthusiast", "Avid Reader"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300"
        >
          I craft intuitive, accessible, and visually captivating websites that
          deliver seamless user experiences. Continuously growing and refining
          my skills in real-world development environments.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#Projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block px-8 py-3 bg-amber-500 text-white font-medium rounded-full shadow-lg hover:bg-amber-600 transition duration-300"
        >
          View My Work
        </motion.a>
      </div>
    </div>
  );
}
