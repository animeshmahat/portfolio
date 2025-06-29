import { useState, useMemo, useRef } from "react";
import { projects } from "../assets/projectsData";
import { AnimatePresence, motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-white dark:bg-zinc-900 text-black dark:text-white w-full max-w-xl rounded-xl shadow-2xl pt-10 px-6 pb-6 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black dark:hover:text-white z-10"
        >
          ✕
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-64 object-cover rounded-md mb-4 mt-2"
        />
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {project.description}
        </p>
        <div className="mb-4">
          <h4 className="font-semibold mb-1">Technologies:</h4>
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <li
                key={i}
                className="bg-amber-100 dark:bg-amber-800 text-amber-900 dark:text-white text-xs px-2 py-1 rounded-md"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 mt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm hover:bg-amber-600"
            >
              Live Site
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md text-sm hover:bg-amber-500 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const gridRef = useRef(null); // Optional scroll

  const categories = useMemo(() => {
    const allCategories = projects.flatMap((p) => p.tech);
    return ["All", ...Array.from(new Set(allCategories))];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || project.tech.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(filteredProjects.length);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <section
        id="Projects"
        className="w-full min-h-screen py-16 px-4 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
          <span className="text-amber-500">My&nbsp;</span>
          <span className="text-black dark:text-white">Projects</span>
        </h2>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(6); // reset
            }}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-gray-300 dark:border-zinc-700"
          />
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setVisibleCount(6); // reset
            }}
            className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-gray-300 dark:border-zinc-700"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Project Grid */}
        {visibleProjects.length > 0 ? (
          <>
            <div
              ref={gridRef}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 max-w-6xl mx-auto"
            >
              {visibleProjects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative group cursor-pointer border border-gray-200 dark:border-zinc-800 overflow-hidden aspect-square transition-transform duration-200 ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "opacity-40"
                      : "opacity-100"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                    <h3 className="text-white text-md font-medium truncate">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {visibleCount < filteredProjects.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleShowMore}
                  className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                >
                  Show More
                  <svg
                    className="w-5 h-5 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300 mt-12">
            No projects match your search.
          </p>
        )}
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
