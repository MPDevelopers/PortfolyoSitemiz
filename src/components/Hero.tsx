import { ChevronDown } from 'lucide-react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
// RotatingText kaldırıldı; Projects bölümüne taşındı

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
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        <StarsBackground 
          starDensity={0.0004}
          allStarsTwinkle={true}
          twinkleProbability={0.8}
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1.5}
        />
        <ShootingStars
          minSpeed={15}
          maxSpeed={30}
          minDelay={1000}
          maxDelay={3000}
          starColor="#60A5FA"
          trailColor="#3B82F6"
          starWidth={12}
          starHeight={2}
        />
      </div>

      {/* Koyu overlay - içeriğin daha iyi okunması için */}
      <div className="absolute inset-0 bg-dark-900/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Mobil ve Web Geliştirmede
            <span className="block text-white mt-2">
              Geleceği Şekillendiriyoruz
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-dark-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Yaratıcı, performans odaklı ve kullanıcı dostu dijital çözümler.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Projelerimizi Gör
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Bize Ulaş
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
