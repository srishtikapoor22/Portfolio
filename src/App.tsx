import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <TechStack id="techstack" />
      <Timeline id="timeline" />
      <Contact id="contact" />
    </div>
  );
}

export default App;