
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNav";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


export default function App() {
  

  return (    <div className="font-poppins text-gray-800 scroll-smooth flex flex-col gap-10">
      <Navbar />
      <MobileNavbar />
      <Profile />
      <About />
      <Projects />
      <Skills/>
      <Contact />
      <Footer />
    </div>
);
}
