import { ChevronDown } from 'lucide-react';
import LiquidEther from './LiquidEther';
import RotatingText from './RotatingText';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
    >
      {/* LiquidEther Arkaplan */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          mouseForce={15}
          cursorSize={80}
          resolution={0.1}
          iterationsPoisson={16}
          iterationsViscous={16}
          BFECC={false}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.0}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Koyu overlay - içeriğin daha iyi okunması için */}
      <div className="absolute inset-0 bg-dark-900/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight flex items-center justify-center gap-4 sm:gap-6 text-white">
            <span className="text-dark-200">Yaratıcı</span>
            <span className="inline-flex items-center justify-center bg-violet-600 rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-14 py-2 sm:py-3 md:py-4">
              <RotatingText
                texts={["Mobil Uygulama", "Web Uygulama", "MPDevelopers"]}
                mainClassName="text-white overflow-hidden justify-center"
                staggerFrom={"last"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                lockWidth
              />
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-dark-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Yaratıcı, performans odaklı ve kullanıcı dostu dijital çözümler.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Projelerimizi Gör
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Bize Ulaş
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-400 hover:text-primary-500 transition-colors cursor-pointer animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
