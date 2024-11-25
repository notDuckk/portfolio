import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Intro from './components/Intro';
import Footer from "@/components/Footer.tsx";

function App() {

  return (
      <>
          <Navbar/>
          <Intro/>
          <About/>
          <Projects/>
          <Footer/>
      </>
  );
}

export default App
