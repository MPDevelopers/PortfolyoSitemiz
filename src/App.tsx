import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import WebDevelopmentDetail from './components/WebDevelopmentDetail';
import MobileDevelopmentDetail from './components/MobileDevelopmentDetail';
import WebServiceDetail from './components/WebServiceDetail';
import MobileServiceDetail from './components/MobileServiceDetail';

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
              <FAQ />
              <Contact />
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/services/web-development" element={<WebDevelopmentDetail />} />
        <Route path="/services/mobile-development" element={<MobileDevelopmentDetail />} />
        <Route path="/services/web-service" element={<WebServiceDetail />} />
        <Route path="/services/mobile-service" element={<MobileServiceDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
