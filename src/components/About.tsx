import { Code, Smartphone, Database, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SpotlightCard from './SpotlightCard';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const expertiseAreas = [
    { 
      icon: Smartphone, 
      name: 'Flutter', 
      color: 'rgba(16, 185, 129, 0.3)'
    },
    { 
      icon: Smartphone, 
      name: 'React Native', 
      color: 'rgba(59, 130, 246, 0.3)'
    },
    { 
      icon: Database, 
      name: 'Firebase', 
      color: 'rgba(251, 146, 60, 0.3)'
    },
    { 
      icon: Code, 
      name: 'Node.js', 
      color: 'rgba(34, 197, 94, 0.3)'
    },
    { 
      icon: Code, 
      name: 'Python', 
      color: 'rgba(255, 193, 7, 0.3)'
    },
  ];

  return (
    <section id="about" className="py-32" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hakkımızda
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Mobil ve web teknolojilerinde uzman, kullanıcı deneyimine önem
                veren geliştiricileriz. Her projede, en son teknolojileri
                kullanarak performans odaklı ve ölçeklenebilir çözümler
                sunuyoruz.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Müşterilerimizin vizyonunu gerçeğe dönüştürmek için yaratıcı
                düşünüyor, detaylara özen gösteriyor ve sürekli kendimizi
                geliştiriyoruz. Amacımız, dijital dünyada fark yaratan ürünler
                oluşturmak.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <Zap className="w-12 h-12 text-white" />
                <div>
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-gray-400">Tamamlanan Proje</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {expertiseAreas.map((area, index) => (
                <div
                  key={area.name}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-4 text-center flex flex-col justify-center items-center hover:bg-white/10 transition-all duration-300"
                >
                  <area.icon className="w-8 h-8 text-white mb-2" />
                  <h3 className="font-semibold text-white text-sm">{area.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
