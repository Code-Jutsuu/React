import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx"
import Projects from "./components/Projects/Projects.jsx";


function App() {
  
  return (
   <div className="bg-[#171d32] h-auto w-full overflow-hidden">

      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
   
  );
}

export default App;
