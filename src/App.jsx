import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="w-full overflow-hidden transition-colors duration-500 ease-in-out bg-white text-black dark:bg-black dark:text-white">
      <ToastContainer />
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
