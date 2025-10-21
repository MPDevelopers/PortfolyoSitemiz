import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SpotlightCard from './SpotlightCard';
import { 
  Globe, 
  Smartphone, 
  Code,
  Database,
  Palette,
  Zap,
  Shield,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Uygulama Geliştirme",
      icon: Globe,
      color: "rgba(59, 130, 246, 0.3)",
      description: "Modern, hızlı ve kullanıcı dostu web uygulamaları geliştiriyoruz",
      features: [
        "Responsive ve mobil uyumlu tasarım",
        "SEO optimizasyonu",
        "Hızlı yükleme süreleri",
        "Güvenli veri yönetimi",
        "Modern teknolojiler (React, Next.js, TypeScript)",
        "E-ticaret entegrasyonları"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Supabase"],
      route: "/services/web-service"
    },
    {
      title: "Mobil Uygulama Geliştirme", 
      icon: Smartphone,
      color: "rgba(16, 185, 129, 0.3)",
      description: "iOS ve Android için cross-platform mobil uygulamalar",
      features: [
        "Cross-platform geliştirme",
        "Native performans",
        "Offline çalışma desteği",
        "Push notification",
        "Kamera ve sensör entegrasyonu",
        "Gerçek zamanlı veri senkronizasyonu"
      ],
      technologies: ["Flutter", "React Native", "Firebase", "SQLite", "Bluetooth", "GPS"],
      route: "/services/mobile-service"
    }
  ];

  return (
    <section id="skills" className="py-32" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hizmetlerimiz
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Size en uygun çözümleri sunmak için buradayız
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <SpotlightCard 
                key={service.title}
                className="flex flex-col h-full cursor-pointer hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                spotlightColor={service.color}
                onClick={() => navigate(service.route)}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: service.color }}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Özellikler:</h4>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-lg font-semibold text-white mb-4">Teknolojiler:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-white/10 text-white rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-sm font-semibold mr-2">Detayları Gör</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
              </SpotlightCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
