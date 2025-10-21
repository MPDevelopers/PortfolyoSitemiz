import { ExternalLink } from 'lucide-react';
import RotatingText from './RotatingText';
import LiquidEther from './LiquidEther';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  // Veri artık src/data/projects.ts'ten geliyor

  return (
    <section id="projects" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* LiquidEther Arkaplan */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          mouseForce={15}
          cursorSize={50}
          resolution={0.2}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight flex items-center justify-center gap-4 sm:gap-6 text-white">
              <span className="text-dark-200">Yaratıcı</span>
              <span className="inline-flex items-center justify-center bg-transparent border border-white rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-14 py-2 sm:py-3 md:py-4">
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 mt-4">
              Projelerimiz
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Müşterilerimiz için geliştirdiğimiz başarılı projelerden bazıları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/projects/${project.slug}`}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group relative"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
                
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <span className="flex items-center space-x-2 text-white hover:text-white/80 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Detayları Gör</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
