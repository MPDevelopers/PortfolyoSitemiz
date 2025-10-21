import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import WebDevelopmentDetail from './components/WebDevelopmentDetail';
import MobileDevelopmentDetail from './components/MobileDevelopmentDetail';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f172a' }}>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/services/web-development" element={<WebDevelopmentDetail />} />
        <Route path="/services/mobile-development" element={<MobileDevelopmentDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
