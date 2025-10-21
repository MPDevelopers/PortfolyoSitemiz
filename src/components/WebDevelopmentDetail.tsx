import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SpotlightCard from './SpotlightCard';
import { 
  Globe, 
  Code,
  Database,
  Palette,
  Zap,
  Shield,
  ArrowLeft,
  CheckCircle,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WebDevelopmentDetail() {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const features = [
    {
      title: "Responsive Tasarım",
      description: "Tüm cihazlarda mükemmel görünüm",
      icon: Globe
    },
    {
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer alın",
      icon: Zap
    },
    {
      title: "Hızlı Performans",
      description: "Optimize edilmiş yükleme süreleri",
      icon: Code
    },
    {
      title: "Güvenli Altyapı",
      description: "SSL sertifikası ve güvenlik önlemleri",
      icon: Shield
    }
  ];

  const technologies = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Firebase", level: 80 },
    { name: "Supabase", level: 75 }
  ];

  const projects = [
    {
      title: "E-Ticaret Platformu",
      description: "Modern e-ticaret çözümü",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Kurumsal Web Sitesi",
      description: "Profesyonel kurumsal tanıtım",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Blog Sistemi",
      description: "İçerik yönetim sistemi",
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
              <div className="p-4 rounded-lg bg-blue-500/30 mr-4">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Web Uygulama Geliştirme
                </h1>
                <p className="text-xl text-gray-400">
                  Modern, hızlı ve kullanıcı dostu web uygulamaları
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <SpotlightCard 
                key={index}
                spotlightColor="rgba(59, 130, 246, 0.2)"
                className="text-center p-6"
              >
                <feature.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
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
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
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
                Projenizi Hayata Geçirelim
              </h2>
              <p className="text-gray-400 mb-6">
                Web uygulamanız için profesyonel çözümler sunuyoruz
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
