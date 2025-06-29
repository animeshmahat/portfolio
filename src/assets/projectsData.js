// src/assets/projectData.js

import project1Thumb from "./thumbnails/project.jpg";
import project2Thumb from "./thumbnails/project.jpg";
import backendProjectThumb from "./thumbnails/project.jpg";

export const projects = [
  {
    title: "Portfolio Website",
    type: "frontend",
    image: project1Thumb,
    description: "A responsive portfolio built with React and Tailwind CSS.",
    live: "https://your-portfolio.netlify.app",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Weather App",
    type: "frontend",
    image: project2Thumb,
    description: "Weather forecast app using OpenWeatherMap API.",
    live: "https://weatherapp.netlify.app",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Blog REST API",
    type: "backend",
    image: backendProjectThumb,
    description: "A Node.js RESTful API for managing blog posts.",
    github: "https://github.com/yourusername/blog-api",
  },
];
