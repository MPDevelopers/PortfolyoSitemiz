import { ExternalLink, Smartphone, Globe, ShoppingCart, Heart, Users, Calendar } from 'lucide-react';
import RotatingText from './RotatingText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      icon: Smartphone,
      title: 'E-Ticaret Mobil Uygulaması',
      description: 'Kullanıcı dostu arayüz ve hızlı performans sunan, tam özellikli e-ticaret mobil uygulaması.',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Sağlık Takip Platformu',
      description: 'Kişisel sağlık verilerini takip eden, doktorlarla iletişim kurmayı sağlayan kapsamlı platform.',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Globe,
      title: 'Kurumsal Web Portalı',
      description: 'Modern tasarım ve yüksek performanslı kurumsal web sitesi ve yönetim paneli.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: ShoppingCart,
      title: 'Restoran Sipariş Sistemi',
      description: 'QR kod tabanlı menü ve sipariş yönetimi sunan dijital restoran çözümü.',
      technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Sosyal Networking Uygulaması',
      description: 'Gerçek zamanlı mesajlaşma ve içerik paylaşımı özelliklerine sahip sosyal platform.',
      technologies: ['React Native', 'WebSocket', 'PostgreSQL'],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Calendar,
      title: 'Etkinlik Yönetim Sistemi',
      description: 'Etkinlik organizasyonu, bilet satışı ve katılımcı yönetimi için kapsamlı çözüm.',
      technologies: ['Flutter', 'Node.js', 'Stripe'],
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4">
              Projelerimiz
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Müşterilerimiz için geliştirdiğimiz başarılı projelerden bazıları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-slate-700"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                <div className="p-6">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${project.color} mb-4`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Detayları Gör</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
