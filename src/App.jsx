import Header from "./components/Header";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="w-full overflow-hidden transition-colors duration-500 ease-in-out bg-gray-300 text-black dark:bg-black dark:text-white">
      <Header />
      <Projects />
    </div>
  );
}
