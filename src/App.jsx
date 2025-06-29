import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="w-full overflow-hidden transition-colors duration-500 ease-in-out bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <Projects />
      <Skills />
    </div>
  );
}
