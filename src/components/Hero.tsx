import { ChevronDown } from 'lucide-react';

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
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Mobil ve Web Geliştirmede
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mt-2">
              Geleceği Şekillendiriyoruz
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
