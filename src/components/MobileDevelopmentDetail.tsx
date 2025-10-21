import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SpotlightCard from './SpotlightCard';
import { 
  Smartphone, 
  Code,
  Database,
  Palette,
  Zap,
  Shield,
  ArrowLeft,
  CheckCircle,
  Star,
  Wifi,
  Bluetooth
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MobileDevelopmentDetail() {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const features = [
    {
      title: "Cross-Platform",
      description: "iOS ve Android için tek kod",
      icon: Smartphone
    },
    {
      title: "Native Performans",
      description: "Yüksek performanslı uygulamalar",
      icon: Zap
    },
    {
      title: "Offline Çalışma",
      description: "İnternet olmadan da çalışır",
      icon: Wifi
    },
    {
      title: "Sensör Entegrasyonu",
      description: "Kamera, GPS, Bluetooth desteği",
      icon: Bluetooth
    }
  ];

  const technologies = [
    { name: "Flutter", level: 95 },
    { name: "React Native", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "SQLite", level: 80 },
    { name: "Bluetooth", level: 75 },
    { name: "GPS", level: 70 }
  ];

  const projects = [
    {
      title: "Sosyal Medya Uygulaması",
      description: "Gerçek zamanlı mesajlaşma",
      image: "/api/placeholder/300/200"
    },
    {
      title: "E-Ticaret Mobil",
      description: "Mobil alışveriş deneyimi",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Fitness Takip",
      description: "Sağlık ve spor takibi",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="mb-12">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Geri Dön
            </button>
            
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-lg bg-green-500/30 mr-4">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Mobil Uygulama Geliştirme
                </h1>
                <p className="text-xl text-gray-400">
                  iOS ve Android için cross-platform mobil uygulamalar
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <SpotlightCard 
                key={index}
                spotlightColor="rgba(16, 185, 129, 0.2)"
                className="text-center p-6"
              >
                <feature.icon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </SpotlightCard>
            ))}
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Teknolojilerimiz
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <SpotlightCard 
                  key={index}
                  spotlightColor="rgba(16, 185, 129, 0.2)"
                  className="p-6"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{tech.name}</span>
                    <span className="text-gray-400">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Sample Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Örnek Projelerimiz
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <SpotlightCard 
                  key={index}
                  spotlightColor="rgba(168, 85, 247, 0.2)"
                  className="overflow-hidden"
                >
                  <div className="h-48 bg-gray-800 mb-4"></div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <SpotlightCard spotlightColor="rgba(245, 101, 101, 0.2)" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Mobil Uygulamanızı Geliştirelim
              </h2>
              <p className="text-gray-400 mb-6">
                iOS ve Android için profesyonel mobil çözümler
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Hemen İletişime Geçin
              </button>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
}
