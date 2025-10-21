import { Code, Zap, FileCode } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SpotlightCard from './SpotlightCard';

// Custom Icon Components
const FlutterIcon = ({ className }: { className?: string }) => (
  <img src="/src/icons/flutter.png" alt="Flutter" className={className} />
);

const ReactNativeIcon = ({ className }: { className?: string }) => (
  <img src="/src/icons/react-native.png" alt="React Native" className={className} />
);

const FirebaseIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 32 32" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Firebase icon</title>
    <path d="M5.188 20.896l3.151-20.281c0.104-0.688 1.031-0.844 1.354-0.229l3.391 6.359zM27.578 25.818l-3-18.667c-0.099-0.578-0.807-0.802-1.224-0.391l-18.932 19.057 10.474 5.906c0.656 0.37 1.458 0.37 2.115 0zM19.068 9.531l-2.427-4.646c-0.271-0.516-1.010-0.516-1.281 0l-10.651 19.094z"/>
  </svg>
);

const DockerIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Docker icon</title>
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
  </svg>
);

const PythonIcon = ({ className }: { className?: string }) => (
  <img src="/src/icons/python.png" alt="Python" className={className} />
);

const KotlinIcon = ({ className }: { className?: string }) => (
  <img src="/src/icons/Kotlin.png" alt="Kotlin" className={className} />
);

const NodejsIcon = ({ className }: { className?: string }) => (
  <img src="/src/icons/nodejs.png" alt="Node.js" className={className} />
);

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const expertiseAreas = [
    { 
      icon: FlutterIcon, 
      name: 'Flutter', 
      color: 'rgba(16, 185, 129, 0.3)'
    },
    { 
      icon: ReactNativeIcon, 
      name: 'React Native', 
      color: 'rgba(59, 130, 246, 0.3)'
    },
    { 
      icon: FirebaseIcon, 
      name: 'Firebase', 
      color: 'rgba(251, 146, 60, 0.3)'
    },
    { 
      icon: NodejsIcon, 
      name: 'Node.js', 
      color: 'rgba(34, 197, 94, 0.3)'
    },
    { 
      icon: PythonIcon, 
      name: 'Python', 
      color: 'rgba(255, 193, 7, 0.3)'
    },
    { 
      icon: KotlinIcon, 
      name: 'Kotlin', 
      color: 'rgba(139, 69, 19, 0.3)'
    },
    { 
      icon: DockerIcon, 
      name: 'Docker', 
      color: 'rgba(0, 123, 191, 0.3)'
    },
    { 
      icon: FileCode, 
      name: 'JavaScript', 
      color: 'rgba(255, 215, 0, 0.3)'
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

            <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4">
              {expertiseAreas.map((area, index) => (
                <div
                  key={area.name}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-4 text-center flex flex-col justify-center items-center hover:bg-white/10 transition-all duration-300"
                >
                  {area.name === 'Flutter' || area.name === 'React Native' || area.name === 'Python' || area.name === 'Kotlin' || area.name === 'Node.js' ? (
                    <area.icon className="w-8 h-8 mb-2 brightness-0 invert" />
                  ) : (
                    <area.icon className="w-8 h-8 text-white mb-2" />
                  )}
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
