import { Code, Smartphone, Database, Palette, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const expertiseAreas = [
    { icon: Smartphone, name: 'Flutter', color: 'text-white' },
    { icon: Smartphone, name: 'React Native', color: 'text-white' },
    { icon: Database, name: 'Firebase', color: 'text-white' },
    { icon: Code, name: 'Node.js', color: 'text-white' },
    { icon: Palette, name: 'UI/UX Design', color: 'text-white' },
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#0f172a' }}>
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
                <Zap className="w-12 h-12 text-primary-600" />
                <div>
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-gray-400">Tamamlanan Proje</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <div
                  key={area.name}
                  className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-slate-700"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <area.icon className={`w-12 h-12 ${area.color} mb-4`} />
                  <h3 className="font-semibold text-white">{area.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
