import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Star, Users, Zap, Shield, Smartphone, MessageCircle, Heart, Award, Eye, Brain, Volume2, X, Activity, Monitor } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeScreen, setActiveScreen] = useState(0);
  const [activeFlow, setActiveFlow] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Get phone flows from project data or use fallback
  const phoneFlows = project?.details?.screenshots?.flows || [
    {
      name: "Default Flow",
      screens: [
        { title: "Ana Ekran", description: "Modern ve kullanıcı dostu ana sayfa tasarımı", image: "", icon: "📱", color: "from-blue-500 to-cyan-500", bgPattern: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20", tech: "React Native" }
      ]
    }
  ];

  const currentFlow = phoneFlows[activeFlow] || phoneFlows[0];
  const phoneScreens = currentFlow?.screens || [];

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Only auto-rotate if we have screenshots and more than 1 screen
    if (phoneScreens.length > 1) {
      const interval = setInterval(() => {
        setActiveScreen((prev) => (prev + 1) % phoneScreens.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [phoneScreens.length]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (direction === 'left') {
      setActiveFlow((prev) => (prev + 1) % 3);
    } else {
      setActiveFlow((prev) => (prev - 1 + 3) % 3);
    }
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Touch handling for mobile devices
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleSwipe('left');
    } else if (isRightSwipe) {
      handleSwipe('right');
    }
  };

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

            {/* Centered Content */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium`}>
                    {project?.slug === 'haberapron-web-sitesi' ? (
                      <>
                        <Monitor className="w-4 h-4 mr-2" />
                        Web Sitesi
                      </>
                    ) : (
                      <>
                        <Smartphone className="w-4 h-4 mr-2" />
                        Mobil Uygulama
                      </>
                    )}
              </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {project.details?.longDescription || project.description}
                </p>
                </div>

                {/* Stats */}
                {project?.slug !== 'solunum-sagligi-uygulamasi' && (
                  <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        {project?.slug === 'isaret-dili-ai-uygulamasi' ? '95%' : 
                         project?.slug === 'haberapron-web-sitesi' ? '95/100' : '4.9'}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center justify-center">
                        {project?.slug === 'isaret-dili-ai-uygulamasi' ? (
                          <>
                            <Brain className="w-4 h-4 text-purple-400 mr-1" />
                            AI Doğruluk
                          </>
                        ) : project?.slug === 'haberapron-web-sitesi' ? (
                          <>
                            <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                            Lighthouse
                          </>
                        ) : (
                          <>
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            App Store
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        {project?.slug === 'isaret-dili-ai-uygulamasi' ? '15K+' : 
                         project?.slug === 'haberapron-web-sitesi' ? '1.2s' : '25K+'}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-400 mr-1" />
                        {project?.slug === 'isaret-dili-ai-uygulamasi' ? 'Kullanıcı' : 
                         project?.slug === 'haberapron-web-sitesi' ? 'LCP' : 'Aktif Kullanıcı'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        {project?.slug === 'isaret-dili-ai-uygulamasi' ? '50+' : 
                         project?.slug === 'haberapron-web-sitesi' ? '-82%' : '500+'}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center justify-center">
                        {project?.slug === 'isaret-dili-ai-uygulamasi' ? (
                          <>
                            <Eye className="w-4 h-4 text-indigo-400 mr-1" />
                            İşaret Dili
                          </>
                        ) : project?.slug === 'haberapron-web-sitesi' ? (
                          <>
                            <Shield className="w-4 h-4 text-green-400 mr-1" />
                            Bandwidth
                          </>
                        ) : (
                          <>
                            <Heart className="w-4 h-4 text-pink-400 mr-1" />
                            Uzman Psikolog
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons - Only for İşaret Dili AI App */}
                {project?.slug === 'isaret-dili-ai-uygulamasi' && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setIsVideoModalOpen(true)}
                      className={`flex items-center justify-center px-8 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Demo İzle
                    </button>
                    <a 
                      href="https://appgallery.huawei.com/app/C114157203?sharePrepath=ag&locale=tr_TR&source=appshare&subsource=C114157203&shareTo=com.android.chrome&shareFrom=appmarket&shareIds=919e6ea53fa24502888bfc28205e37db_com.android.chrome&callType=SHARE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      İndir
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      {(project?.slug === 'saglik-takip-platformu' || project?.slug === 'isaret-dili-ai-uygulamasi' || project?.slug === 'solunum-sagligi-uygulamasi' || project?.slug === 'haberapron-web-sitesi') && (
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {project?.slug === 'haberapron-web-sitesi' ? 'Web Sitesi Ekranları' : 'Uygulama Ekranları'}
              </h2>
              <p className="text-gray-400 text-lg">
                {project?.slug === 'saglik-takip-platformu' 
                  ? 'Geliştirme sürecindeki farklı aşamalar ve teknik detaylar'
                  : project?.slug === 'isaret-dili-ai-uygulamasi'
                  ? 'AI teknolojisi ile işaret dili tanıma sürecinin farklı aşamaları'
                  : project?.slug === 'haberapron-web-sitesi'
                  ? 'Modern web teknolojileri ile geliştirilmiş haber platformu ekranları'
                  : 'Spirometre cihazı entegrasyonu ve solunum sağlığı takip süreçleri'
                }
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Phone/Desktop Screens */}
              <div className="relative">
                {project?.slug === 'haberapron-web-sitesi' ? (
                  // Desktop Monitor for Web Projects
                  <div className="relative mx-auto w-[500px] h-[350px]">
                    {/* Flow Navigation - Only show if multiple flows */}
                    {phoneFlows.length > 1 && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="flex items-center space-x-4 bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                          <button 
                            onClick={() => handleSwipe('right')}
                            className="p-2 hover:bg-slate-700 rounded-full transition-colors duration-200"
                            disabled={isTransitioning}
                          >
                            <ArrowLeft className="w-4 h-4 text-white" />
                          </button>
                          <div className="flex space-x-2">
                            {phoneFlows.map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  index === activeFlow ? 'bg-white' : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <button 
                            onClick={() => handleSwipe('left')}
                            className="p-2 hover:bg-slate-700 rounded-full transition-colors duration-200"
                            disabled={isTransitioning}
                          >
                            <ArrowLeft className="w-4 h-4 text-white rotate-180" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Desktop Monitor Frame */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-2 shadow-2xl">
                      <div 
                        className="w-full h-full bg-black rounded-xl overflow-hidden relative cursor-pointer"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                      >
                        {/* Screen Content - Real Screenshots */}
                        <div className="absolute inset-0 transition-all duration-500">
                          {phoneScreens[activeScreen]?.image ? (
                            <div className="relative w-full h-full">
                              {/* Real Screenshot */}
                              <img 
                                src={phoneScreens[activeScreen].image} 
                                alt={phoneScreens[activeScreen].title}
                                className="w-full h-full object-contain rounded-xl bg-slate-900"
                                onLoad={() => console.log('Image loaded successfully')}
                                onError={(e) => {
                                  console.log('Image failed to load, showing fallback');
                                  // Fallback to placeholder if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `
                                      <div class="p-6 h-full flex flex-col ${phoneScreens[activeScreen]?.bgPattern || 'bg-gradient-to-br from-slate-900 to-slate-800'} rounded-xl">
                                        <div class="flex justify-between items-center text-white text-xs mb-6">
                                          <span>HaberApron</span>
                                          <div class="flex items-center space-x-1">
                                            <div class="w-4 h-2 bg-white rounded-sm"></div>
                                            <div class="w-4 h-2 bg-white rounded-sm"></div>
                                            <div class="w-4 h-2 bg-white rounded-sm"></div>
                                          </div>
                                        </div>
                                        <div class="flex-1 flex flex-col items-center justify-center space-y-6">
                                          <div class="w-20 h-20 rounded-2xl bg-gradient-to-r ${phoneScreens[activeScreen]?.color || project.color} flex items-center justify-center">
                                            <span class="text-3xl">${phoneScreens[activeScreen]?.icon || '🌐'}</span>
                                          </div>
                                          <div class="text-center">
                                            <h3 class="text-white font-bold text-lg mb-2">${phoneScreens[activeScreen].title}</h3>
                                            <p class="text-gray-400 text-sm px-4">${phoneScreens[activeScreen].description}</p>
                                          </div>
                                        </div>
                                      </div>
                                    `;
                                  }
                                }}
                              />
                            </div>
                          ) : (
                            // Fallback placeholder
                            <div className={`p-6 h-full flex flex-col ${phoneScreens[activeScreen]?.bgPattern || 'bg-gradient-to-br from-slate-900 to-slate-800'} rounded-xl`}>
                              {/* Browser Bar */}
                              <div className="flex justify-between items-center text-white text-xs mb-6">
                                <span>HaberApron</span>
                                <div className="flex items-center space-x-1">
                                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                                </div>
                              </div>

                              {/* App Content Placeholder */}
                              <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${phoneScreens[activeScreen]?.color || project.color} flex items-center justify-center transform transition-all duration-500 ${isTransitioning ? 'scale-75 opacity-50' : 'scale-100 opacity-100'}`}>
                                  <span className="text-3xl">{phoneScreens[activeScreen]?.icon || '🌐'}</span>
                                </div>
                                
                                <div className="text-center">
                                  <h3 className={`text-white font-bold text-lg mb-2 transition-all duration-500 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                                    {phoneScreens[activeScreen].title}
                                  </h3>
                                  <p className={`text-gray-400 text-sm px-4 transition-all duration-500 delay-100 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                                    {phoneScreens[activeScreen].description}
                                  </p>
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

                              {/* Swipe Indicators */}
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <div className="flex items-center space-x-2 text-white/60 text-xs">
                                  <ArrowLeft className="w-3 h-3" />
                                  <span>Kaydır</span>
                                  <ArrowLeft className="w-3 h-3 rotate-180" />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Monitor Stand */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-lg"></div>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-slate-800 rounded-lg"></div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                ) : (
                  // Phone Frame for Mobile Apps
                  <div className="relative mx-auto w-64 h-[520px]">
                  {/* Flow Navigation - Only show if multiple flows */}
                  {phoneFlows.length > 1 && (
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="flex items-center space-x-4 bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                        <button 
                          onClick={() => handleSwipe('right')}
                          className="p-2 hover:bg-slate-700 rounded-full transition-colors duration-200"
                          disabled={isTransitioning}
                        >
                          <ArrowLeft className="w-4 h-4 text-white" />
                        </button>
                        <div className="flex space-x-2">
                          {phoneFlows.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === activeFlow ? 'bg-white' : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <button 
                          onClick={() => handleSwipe('left')}
                          className="p-2 hover:bg-slate-700 rounded-full transition-colors duration-200"
                          disabled={isTransitioning}
                        >
                          <ArrowLeft className="w-4 h-4 text-white rotate-180" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div 
                      className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative cursor-pointer"
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      {/* Screen Content - Real Screenshots */}
                      <div className="absolute inset-0 transition-all duration-500">
                        {phoneScreens[activeScreen]?.image ? (
                          <div className="relative w-full h-full">
                            
                            {/* Real Screenshot */}
                            <img 
                              src={phoneScreens[activeScreen].image} 
                              alt={phoneScreens[activeScreen].title}
                              className="w-full h-full object-cover rounded-[2rem] bg-slate-900"
                              onLoad={() => console.log('Image loaded successfully')}
                              onError={(e) => {
                                console.log('Image failed to load, showing fallback');
                                // Fallback to placeholder if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="p-6 h-full flex flex-col ${phoneScreens[activeScreen]?.bgPattern || 'bg-gradient-to-br from-slate-900 to-slate-800'} rounded-[2rem]">
                                      <div class="flex justify-between items-center text-white text-xs mb-6">
                                        <span>9:41</span>
                                        <div class="flex items-center space-x-1">
                                          <div class="w-4 h-2 bg-white rounded-sm"></div>
                                          <div class="w-4 h-2 bg-white rounded-sm"></div>
                                          <div class="w-4 h-2 bg-white rounded-sm"></div>
                                        </div>
                                      </div>
                                      <div class="flex-1 flex flex-col items-center justify-center space-y-6">
                                        <div class="w-20 h-20 rounded-2xl bg-gradient-to-r ${phoneScreens[activeScreen]?.color || project.color} flex items-center justify-center">
                                          <span class="text-3xl">${phoneScreens[activeScreen]?.icon || '📱'}</span>
                                        </div>
                                        <div class="text-center">
                                          <h3 class="text-white font-bold text-lg mb-2">${phoneScreens[activeScreen].title}</h3>
                                          <p class="text-gray-400 text-sm px-4">${phoneScreens[activeScreen].description}</p>
                                        </div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        ) : (
                          // Fallback placeholder
                          <div className={`p-6 h-full flex flex-col ${phoneScreens[activeScreen]?.bgPattern || 'bg-gradient-to-br from-slate-900 to-slate-800'} rounded-[2rem]`}>
                          {/* Status Bar */}
                          <div className="flex justify-between items-center text-white text-xs mb-6">
                            <span>9:41</span>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                              <div className="w-4 h-2 bg-white rounded-sm"></div>
                            </div>
                          </div>

                          {/* App Content Placeholder */}
                          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${phoneScreens[activeScreen]?.color || project.color} flex items-center justify-center transform transition-all duration-500 ${isTransitioning ? 'scale-75 opacity-50' : 'scale-100 opacity-100'}`}>
                                <span className="text-3xl">{phoneScreens[activeScreen]?.icon || '📱'}</span>
                            </div>
                            
                            <div className="text-center">
                              <h3 className={`text-white font-bold text-lg mb-2 transition-all duration-500 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                                {phoneScreens[activeScreen].title}
                              </h3>
                              <p className={`text-gray-400 text-sm px-4 transition-all duration-500 delay-100 ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                                {phoneScreens[activeScreen].description}
                              </p>
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

                          {/* Swipe Indicators */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <div className="flex items-center space-x-2 text-white/60 text-xs">
                              <ArrowLeft className="w-3 h-3" />
                              <span>Kaydır</span>
                              <ArrowLeft className="w-3 h-3 rotate-180" />
                            </div>
                          </div>
                        </div>
                        )}
                      </div>
                    </div>
                  </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                )}

                {/* Flow Labels - Only show if multiple flows */}
                {phoneFlows.length > 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="text-center">
                      <p className="text-gray-400 text-sm font-semibold">
                        {phoneFlows[activeFlow]?.name || "Development Flow"}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right - Detailed Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${phoneScreens[activeScreen]?.color || project.color} text-white text-sm font-medium`}>
                    <span className="text-lg mr-2">{phoneScreens[activeScreen]?.icon}</span>
                    {phoneScreens[activeScreen]?.title}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {phoneScreens[activeScreen]?.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {phoneScreens[activeScreen]?.description}
                  </p>

                  {phoneScreens[activeScreen]?.tech && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Kullanılan Teknolojiler:</h4>
                      <div className="flex flex-wrap gap-3">
                        {phoneScreens[activeScreen].tech.split(', ').map((tech, index) => (
                          <span key={index} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 font-mono text-sm">
                    {tech}
                  </span>
                ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">Teknik Detaylar:</h4>
                    <div className="space-y-3">
                      {project?.slug === 'isaret-dili-ai-uygulamasi' ? (
                        <>
                          {activeFlow === 0 && (
                            <>
                              <p className="text-gray-300">• OpenCV ile gerçek zamanlı video işleme ve el tespiti</p>
                              <p className="text-gray-300">• TensorFlow.js ile browser tabanlı AI model çalıştırma</p>
                              <p className="text-gray-300">• MediaPipe ile pose estimation ve landmark detection</p>
                              <p className="text-gray-300">• Custom CNN modelleri ile işaret dili sınıflandırması</p>
                            </>
                          )}
                          {activeFlow === 1 && (
                            <>
                              <p className="text-gray-300">• React Native Camera ile kamera entegrasyonu</p>
                              <p className="text-gray-300">• Web Speech API ile text-to-speech dönüşümü</p>
                              <p className="text-gray-300">• Accessibility API ile erişilebilirlik özellikleri</p>
                              <p className="text-gray-300">• Real-time video streaming ve işleme</p>
                            </>
                          )}
                          {activeFlow === 2 && (
                            <>
                              <p className="text-gray-300">• 50+ işaret dili veri seti oluşturma ve etiketleme</p>
                              <p className="text-gray-300">• PyTorch ile custom model eğitimi ve optimizasyon</p>
                              <p className="text-gray-300">• TensorFlow Lite ile mobil model sıkıştırma</p>
                              <p className="text-gray-300">• Edge computing ile offline çalışma desteği</p>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {activeFlow === 0 && (
                            <>
                              <p className="text-gray-300">• Flutter ile cross-platform mobil uygulama geliştirme</p>
                              <p className="text-gray-300">• Firebase Realtime Database ile veri yönetimi</p>
                              <p className="text-gray-300">• Bluetooth LE ile spirometre cihazı entegrasyonu</p>
                              <p className="text-gray-300">• Gerçek zamanlı solunum verisi analizi</p>
                            </>
                          )}
                          {activeFlow === 1 && (
                            <>
                              <p className="text-gray-300">• Node.js ve Express ile RESTful API geliştirme</p>
                              <p className="text-gray-300">• MongoDB ile NoSQL veritabanı tasarımı</p>
                              <p className="text-gray-300">• JWT ile güvenli authentication sistemi</p>
                              <p className="text-gray-300">• Middleware ile request/response işleme</p>
                            </>
                          )}
                          {activeFlow === 2 && (
                            <>
                              <p className="text-gray-300">• GitHub Actions ile CI/CD pipeline kurulumu</p>
                              <p className="text-gray-300">• Docker ile containerization</p>
                              <p className="text-gray-300">• AWS ile cloud deployment</p>
                              <p className="text-gray-300">• Performance monitoring ve analytics</p>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Development Process Section */}
      {project?.slug === 'saglik-takip-platformu' && (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Geliştirme Süreci</h2>
              <p className="text-gray-400 text-lg">MindConnect'in teknik geliştirme aşamaları ve mimarisi</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: MessageCircle,
                  title: "Proje Planlama",
                  description: "Agile metodoloji ile sprint planlaması, user story'ler ve teknik gereksinimler",
                  color: "from-blue-500 to-cyan-500",
                  tech: "Jira, Confluence, Figma"
                },
                {
                  step: "02", 
                  icon: Users,
                  title: "Full-Stack Development",
                  description: "React Native frontend ve Node.js backend ile tam stack geliştirme",
                  color: "from-green-500 to-emerald-500",
                  tech: "React Native, Node.js, MongoDB"
                },
                {
                  step: "03",
                  icon: Heart,
                  title: "Test & Deployment",
                  description: "Unit testler, integration testler ve CI/CD pipeline ile otomatik deployment",
                  color: "from-pink-500 to-rose-500",
                  tech: "Jest, GitHub Actions, AWS"
                }
              ].map((step) => (
                <div key={step.step} className="group relative">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-700 to-transparent rounded-bl-2xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-gray-600">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>
                      <div className="px-3 py-1 bg-slate-700/50 rounded-full inline-block">
                        <p className="text-xs text-cyan-400 font-mono">{step.tech}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {project?.slug === 'saglik-takip-platformu' ? 'MindConnect Özellikleri' : 
               project?.slug === 'solunum-sagligi-uygulamasi' ? 'Spiroble Özellikleri' : 
               project?.slug === 'haberapron-web-sitesi' ? 'HaberApron Özellikleri' : 'Özellikler'}
            </h2>
            <p className="text-gray-400 text-lg">
              {project?.slug === 'saglik-takip-platformu' 
                ? 'Ruh sağlığı alanında devrim yaratan özellikler' 
                : project?.slug === 'solunum-sagligi-uygulamasi'
                ? 'Solunum sağlığı takibinde devrim yaratan özellikler'
                : project?.slug === 'haberapron-web-sitesi'
                ? 'Modern web teknolojileri ile geliştirilmiş haber platformu özellikleri'
                : 'Modern teknolojilerle geliştirilmiş güçlü özellikler'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(project?.slug === 'saglik-takip-platformu' ? [
              { icon: Shield, title: "Güvenlik & Şifreleme", description: "End-to-end şifreleme, JWT authentication ve güvenli API endpoints" },
              { icon: Zap, title: "Real-time Communication", description: "Socket.io ile gerçek zamanlı mesajlaşma ve bildirim sistemi" },
              { icon: Award, title: "Scalable Architecture", description: "MongoDB ile ölçeklenebilir veritabanı ve mikroservis mimarisi" }
            ] : project?.slug === 'isaret-dili-ai-uygulamasi' ? [
              { icon: Brain, title: "AI-Powered Recognition", description: "TensorFlow.js ile %95 doğruluk oranında işaret dili tanıma" },
              { icon: Eye, title: "Real-time Processing", description: "OpenCV ile gerçek zamanlı video işleme ve anlık çeviri" },
              { icon: Volume2, title: "Accessibility First", description: "Erişilebilirlik odaklı tasarım ve ses sentezi özellikleri" }
            ] : project?.slug === 'solunum-sagligi-uygulamasi' ? [
              { icon: Activity, title: "Gerçek Zamanlı Ölçüm", description: "Bluetooth LE ile spirometre cihazından anlık solunum verisi toplama" },
              { icon: Shield, title: "Güvenli Veri Saklama", description: "Firebase Realtime Database ile hasta verilerinin güvenli saklanması" },
              { icon: Zap, title: "Akıllı Analiz", description: "AI destekli solunum analizi ve kişiselleştirilmiş sağlık önerileri" }
            ] : project?.slug === 'haberapron-web-sitesi' ? [
              { icon: Zap, title: "Yüksek Performans", description: "Vite build tool, code splitting ve Redis cache ile %95 Lighthouse skoru" },
              { icon: Shield, title: "Güvenli Altyapı", description: "JWT authentication, Helmet.js, rate limiting ve Docker containerization" },
              { icon: Monitor, title: "Modern UI/UX", description: "Mobile-first responsive tasarım, dark mode ve accessibility uyumlu" }
            ] : [
              { icon: Zap, title: "Hızlı Performans", description: "Optimize edilmiş kod yapısı ile yıldırım hızında çalışma" },
              { icon: Shield, title: "Güvenli", description: "End-to-end şifreleme ile verileriniz güvende" },
              { icon: Users, title: "Sosyal", description: "Arkadaşlarınızla bağlantı kurun ve deneyimlerinizi paylaşın" }
            ]).map((feature, index) => (
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
            {project.technologies.map((tech) => (
              <div key={tech} className="group">
                <div className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 hover:scale-105">
                  <span className="text-white font-semibold text-lg">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - MindConnect */}
      {project?.slug === 'saglik-takip-platformu' && (
        <section className="py-20 bg-gradient-to-r from-pink-500/10 to-rose-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Başarı Hikayeleri</h2>
              <p className="text-gray-400 text-lg">MindConnect ile hayatları değişen kullanıcılarımız</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Ayşe K.",
                  age: "28",
                  story: "Anksiyete ile mücadele ederken MindConnect sayesinde doğru psikologu buldum. 3 ayda büyük ilerleme kaydettim.",
                  rating: 5,
                  improvement: "Anksiyete seviyesi %70 azaldı"
                },
                {
                  name: "Mehmet S.",
                  age: "35", 
                  story: "İş stresi ve aile problemleri için destek arıyordum. 7/24 erişim sayesinde ihtiyacım olduğunda hep yanımda oldu.",
                  rating: 5,
                  improvement: "Stres seviyesi %60 azaldı"
                },
                {
                  name: "Zeynep A.",
                  age: "24",
                  story: "Üniversite döneminde depresyon yaşıyordum. Güvenli ortamda konuşabilmek beni çok rahatlattı.",
                  rating: 5,
                  improvement: "Ruh hali %80 iyileşti"
                }
              ].map((user, index) => (
                <div key={index} className="group">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{user.name}</h4>
                        <p className="text-gray-400 text-sm">{user.age} yaşında</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">"{user.story}"</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(user.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-sm font-semibold">{user.improvement}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Only for İşaret Dili AI App */}
      {project?.slug === 'isaret-dili-ai-uygulamasi' && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${project.color} mb-8`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              {project?.slug === 'saglik-takip-platformu' 
                ? 'Teknik Mükemmellik ve İnovasyon' 
                : project?.slug === 'isaret-dili-ai-uygulamasi'
                ? 'Yapay Zeka ile Erişilebilir İletişim'
                : project?.slug === 'haberapron-web-sitesi'
                ? 'Modern Web Teknolojileri ile Haber Platformu'
                : 'Projeyi Keşfetmeye Hazır mısın?'
              }
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {project?.slug === 'saglik-takip-platformu'
                ? 'Modern teknolojilerle geliştirilmiş, ölçeklenebilir ve güvenli bir platform'
                : project?.slug === 'isaret-dili-ai-uygulamasi'
                ? 'AI teknolojisi ile işitme engelli bireylerin iletişimini kolaylaştıran devrim niteliğinde uygulama'
                : project?.slug === 'haberapron-web-sitesi'
                ? 'React + TypeScript + Node.js + PostgreSQL ile geliştirilmiş, yüksek performanslı haber platformu'
                : 'Modern teknolojilerle geliştirilmiş bu uygulamayı deneyimleyin'
              }
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className={`px-8 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              AI Demo İzle
            </button>
            <a 
              href="https://appgallery.huawei.com/app/C114157203?sharePrepath=ag&locale=tr_TR&source=appshare&subsource=C114157203&shareTo=com.android.chrome&shareFrom=appmarket&shareIds=919e6ea53fa24502888bfc28205e37db_com.android.chrome&callType=SHARE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700"
            >
              AppGallery'den İndir
            </a>
          </div>
          </div>
        </section>
      )}

    {/* Video Modal */}
    {isVideoModalOpen && (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Close Button */}
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Video Container */}
          <div className="relative w-full aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/PortfolyoSitemiz/screenshots/signai/demo-video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
          
          {/* Video Info */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              {project?.slug === 'isaret-dili-ai-uygulamasi' ? 'Conversign Demo Videosu' : 
               project?.slug === 'solunum-sagligi-uygulamasi' ? 'Spiroble Demo Videosu' : 'Proje Demo Videosu'}
            </h3>
            <p className="text-gray-300">
              {project?.slug === 'isaret-dili-ai-uygulamasi' 
                ? 'Conversign uygulamasının işaret dili tanıma özelliklerini gösteren demo videosu'
                : project?.slug === 'solunum-sagligi-uygulamasi'
                ? 'RespiraCheck uygulamasının solunum sağlığı takip özelliklerini gösteren demo videosu'
                : 'Projenin temel özelliklerini gösteren demo videosu'
              }
            </p>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}


