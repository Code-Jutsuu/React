import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/Experience.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx"


function App() {
  
  return (
   <div className="bg-[#171d32] h-auto w-full overflow-hidden">

      <Navbar />
      <Home />
      <AboutMe />
      <Experience />
      
    </div>
   
  );
}

export default App;
