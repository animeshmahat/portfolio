import brickandbeam from "./thumbnails/brickandbeam.jpg";
import django from "./thumbnails/django.jpg";
import fakestore from "./thumbnails/fakestore.png";
import gemini from "./thumbnails/gemini.jpg";
import laravel from "./thumbnails/laravel.png";
import netflix from "./thumbnails/netflix.png";
import sattire from "./thumbnails/sattire.jpg";
import verse from "./thumbnails/verse.jpg";
import weather from "./thumbnails/weather.jpg";
import todo from "./thumbnails/todo.jpg";
import cie from "./thumbnails/cie.jpg";

export const projects = [
  {
    title: "Brick & Beam",
    type: "frontend",
    image: brickandbeam,
    description:
      "A responsive real-estate website built with React and Tailwind CSS.",
    live: "https://brickandbeam.netlify.app/",
    github: "https://github.com/animeshmahat/Brick-Beam",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Gemini-Clone",
    type: "frontend",
    image: gemini,
    description: "A Gemini Clone using the Gemini API.",
    live: "https://animeshgeminiclone.netlify.app",
    github: "https://github.com/animeshmahat/Gemini-Clone",
    tech: ["React.js", "Gemini-API"],
  },
  {
    title: "Country Info Explorer",
    type: "frontend",
    image: cie,
    description:
      "A react mini-project displaying country information from restcountries API.",
    live: "https://country-haven.netlify.app/",
    github: "https://github.com/animeshmahat/Country-Info-Explorer",
    tech: ["React.js"],
  },
  {
    title: "Netflix-Clone",
    type: "frontend",
    image: netflix,
    description: "A Netflix clone using react and TMBD API.",
    live: "https://nf-clone-animesh.netlify.app",
    github: "https://github.com/animeshmahat/Netflix-Clone",
    tech: ["React.js", "TMDB-API"],
  },
  {
    title: "Weather App",
    type: "Web Application",
    image: weather,
    description: "Weather forecast app using OpenWeatherMap API.",
    live: "https://weatheranimesh.netlify.app/",
    github: "https://github.com/animeshmahat/React-Weather",
    tech: ["Java", "OpenWeather API"],
  },
  {
    title: "Verse",
    type: "Full-Stack",
    image: verse,
    description:
      "A full stack blogging site using laravel. Uses an API to identify sentiments and summarization",
    github: "https://github.com/animeshmahat/Verse",
    tech: ["Laravel", "Javascript", "Bootstrap"],
  },
  {
    title: "Verse",
    type: "API",
    image: verse,
    description: "A flask API for Verse.",
    github: "https://github.com/animeshmahat/Verse-API",
    tech: ["Flask"],
  },
  {
    title: "React ToDo",
    type: "frontend",
    image: todo,
    description: "A react ToDo miniproject",
    live: "https://todoanimesh.netlify.app",
    github: "https://github.com/animeshmahat/ReactToDo",
    tech: ["React.js"],
  },
  {
    title: "FakeStore",
    type: "frontend",
    image: fakestore,
    description: "A react app using fakestore API + cart functionality",
    live: "https://fakestore-api-animesh.netlify.app/",
    github: "https://github.com/animeshmahat/Fake-Store",
    tech: ["React.js", "TailwindCss"],
  },
  {
    title: "Sattire Social Media",
    type: "frontend",
    image: sattire,
    description: "A small sattire social media feed using fakeusers.",
    github: "https://github.com/animeshmahat/SatireSocialMedia",
    tech: ["React.js", "FakeUsersAPI"],
  },
  {
    title: "Django CRUD Application",
    type: "backend",
    image: django,
    description: "A Django CRUD Application.",
    github: "https://github.com/animeshmahat/CRUD-Django",
    tech: ["Django", "Bootstrap"],
  },
  {
    title: "Laravel CRUD Application",
    type: "backend",
    image: laravel,
    description: "A laravel CRUD application.",
    github: "https://github.com/animeshmahat/crud_laravel",
    tech: ["Laravel", "Bootstrap"],
  },
];
