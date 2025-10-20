import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Star, Users, Zap, Shield, Smartphone } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!project) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
        <div className="text-center text-white">
          <p className="mb-4">Proje bulunamadı.</p>
          <Link to="/" className="text-primary-400 hover:text-primary-300 underline">Ana sayfaya dön</Link>
        </div>
      </section>
    );
  }

  const Icon = project.icon;

  // Mock phone screens for demonstration
  const phoneScreens = [
    { title: "Ana Ekran", description: "Modern ve kullanıcı dostu ana sayfa tasarımı" },
    { title: "Ürün Detay", description: "Detaylı ürün bilgileri ve görsel galeri" },
    { title: "Sepet", description: "Kolay sipariş yönetimi ve ödeme süreci" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f172a' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 bg-gradient-to-r ${project.color} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`}></div>
          <div className={`absolute top-40 right-10 w-96 h-96 bg-gradient-to-r ${project.color} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-8 group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Ana sayfaya dön
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium`}>
                    <Smartphone className="w-4 h-4 mr-2" />
                    Mobil Uygulama
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {project.details?.longDescription || project.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">4.8</div>
                    <div className="text-sm text-gray-400 flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      App Store
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50K+</div>
                    <div className="text-sm text-gray-400 flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      Kullanıcı
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-gray-400 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-400 mr-1" />
                      Uptime
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`flex items-center justify-center px-8 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                    <Play className="w-5 h-5 mr-2" />
                    Demo İzle
                  </button>
                  <button className="flex items-center justify-center px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700">
                    <Download className="w-5 h-5 mr-2" />
                    İndir
                  </button>
                </div>
              </div>

              {/* Right Content - Phone Mockup */}
              <div className="relative">
                <div className="relative mx-auto w-80 h-[600px]">
                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                      {/* Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
                        <div className="p-6 h-full flex flex-col">
                          {/* Status Bar */}
                          <div className="flex justify-between items-center text-white text-xs mb-6">
                            <span>9:41</span>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                            </div>
                          </div>

                          {/* App Content */}
                          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                            
                            <div className="text-center">
                              <h3 className="text-white font-bold text-lg mb-2">{phoneScreens[activeScreen].title}</h3>
                              <p className="text-gray-400 text-sm">{phoneScreens[activeScreen].description}</p>
                            </div>

                            {/* Feature Indicators */}
                            <div className="flex space-x-2">
                              {phoneScreens.map((_, index) => (
                                <div
                                  key={index}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === activeScreen ? 'bg-white' : 'bg-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Özellikler</h2>
            <p className="text-gray-400 text-lg">Modern teknolojilerle geliştirilmiş güçlü özellikler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Hızlı Performans", description: "Optimize edilmiş kod yapısı ile yıldırım hızında çalışma" },
              { icon: Shield, title: "Güvenli", description: "End-to-end şifreleme ile verileriniz güvende" },
              { icon: Users, title: "Sosyal", description: "Arkadaşlarınızla bağlantı kurun ve deneyimlerinizi paylaşın" }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:scale-105">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Kullanılan Teknolojiler</h2>
            <p className="text-gray-400 text-lg">En güncel teknolojilerle geliştirildi</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {project.technologies.map((tech, index) => (
              <div key={tech} className="group">
                <div className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 hover:scale-105">
                  <span className="text-white font-semibold text-lg">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${project.color} mb-8`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Projeyi Keşfetmeye Hazır mısın?</h2>
          <p className="text-gray-400 text-lg mb-8">Modern teknolojilerle geliştirilmiş bu uygulamayı deneyimleyin</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
              Demo İzle
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700">
              Kaynak Kod
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


