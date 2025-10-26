import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Star, Users, Zap, Shield, Smartphone, MessageCircle, Heart, Award, Eye, Brain, Volume2, X, Activity, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [activeScreen, setActiveScreen] = useState(0);
  const [activeFlow, setActiveFlow] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Proje verilerini çevirilerden al
  const getTranslatedProject = (slug: string) => {
    const originalProject = projects.find((p) => p.slug === slug);
    if (!originalProject) return null;

    let projectKey = '';
    switch (slug) {
      case 'saglik-takip-platformu':
        projectKey = 'AnlatmamLazım';
        break;
      case 'solunum-sagligi-uygulamasi':
        projectKey = 'spiroble';
        break;
      case 'isaret-dili-ai-uygulamasi':
        projectKey = 'conversign';
        break;
      case 'haberapron-web-sitesi':
        projectKey = 'haberapron';
        break;
      default:
        return originalProject;
    }

    return {
      ...originalProject,
      title: t(`projects.${projectKey}.title`),
      description: t(`projects.${projectKey}.description`),
      details: {
        ...originalProject.details,
        longDescription: t(`projects.${projectKey}.longDescription`),
        images: t(`projects.${projectKey}.images`)
      }
    };
  };

  const project = getTranslatedProject(slug || '');

  // Map slug to project key for translations
  const getProjectKey = (s: string): string | null => {
    switch (s) {
      case 'saglik-takip-platformu':
        return 'AnlatmamLazım'
      case 'solunum-sagligi-uygulamasi':
        return 'spiroble'
      case 'isaret-dili-ai-uygulamasi':
        return 'conversign'
      case 'haberapron-web-sitesi':
        return 'haberapron'
      default:
        return null
    }
  }
  const projectKey = getProjectKey(slug || '')

  // Get phone flows from project data or use fallback
  const baseFlows = project?.details?.screenshots?.flows || [
    {
      name: t('projectDetail.defaultFlow'),
      screens: [
        { title: t('projectDetail.homeScreen'), description: t('projectDetail.homeScreenDesc'), image: "", icon: "📱", color: "from-blue-500 to-cyan-500", bgPattern: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20", tech: "React Native" }
      ]
    }
  ]

  // Apply translations to flow names and screen titles/descriptions if keys exist
  const phoneFlows = baseFlows.map((flow, flowIdx) => {
    const translatedName = projectKey
      ? t(`projectScreens.${projectKey}.flows.${flowIdx}.name`, { defaultValue: flow.name })
      : flow.name
    const screens = flow.screens.map((screen, screenIdx) => {
      const translatedTitle = projectKey
        ? t(`projectScreens.${projectKey}.flows.${flowIdx}.screens.${screenIdx}.title`, { defaultValue: screen.title })
        : screen.title
      const translatedDesc = projectKey
        ? t(`projectScreens.${projectKey}.flows.${flowIdx}.screens.${screenIdx}.description`, { defaultValue: screen.description })
        : screen.description
      return { ...screen, title: translatedTitle, description: translatedDesc }
    })
    return { ...flow, name: translatedName, screens }
  })

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
          <p className="mb-4">{t('projectDetail.notFound')}</p>
          <Link to="/" className="text-primary-400 hover:text-primary-300 underline">{t('projectDetail.backToHome')}</Link>
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
              {t('projectDetail.backToHome')}
            </Link>

            {/* Centered Content */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium`}>
                    {project?.slug === 'haberapron-web-sitesi' ? (
                      <>
                        <Monitor className="w-4 h-4 mr-2" />
                        {t('projectDetail.ui.web')}
                      </>
                    ) : (
                      <>
                        <Smartphone className="w-4 h-4 mr-2" />
                        {t('projectDetail.ui.mobile')}
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
                            {t('projectDetail.ui.stats.aiAccuracy')}
                          </>
                        ) : project?.slug === 'haberapron-web-sitesi' ? (
                          <>
                            <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                            {t('projectDetail.ui.stats.lighthouse')}
                          </>
                        ) : (
                          <>
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {t('projectDetail.ui.stats.appStore')}
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
                        {project?.slug === 'isaret-dili-ai-uygulamasi' ? t('projectDetail.ui.stats.users') : 
                         project?.slug === 'haberapron-web-sitesi' ? t('projectDetail.ui.stats.lcp') : t('projectDetail.ui.stats.users')}
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
                            {t('projectDetail.ui.stats.signLanguage')}
                          </>
                        ) : project?.slug === 'haberapron-web-sitesi' ? (
                          <>
                            <Shield className="w-4 h-4 text-green-400 mr-1" />
                            {t('projectDetail.ui.stats.bandwidth')}
                          </>
                        ) : (
                          <>
                            <Heart className="w-4 h-4 text-pink-400 mr-1" />
                            {t('projectDetail.ui.stats.expertPsychologist')}
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
                      {t('projectDetail.ui.watchDemo')}
                    </button>
                    <a 
                      href="https://appgallery.huawei.com/app/C114157203?sharePrepath=ag&locale=tr_TR&source=appshare&subsource=C114157203&shareTo=com.android.chrome&shareFrom=appmarket&shareIds=919e6ea53fa24502888bfc28205e37db_com.android.chrome&callType=SHARE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('projectDetail.ui.download')}
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
                {project?.slug === 'haberapron-web-sitesi' ? t('projectDetail.ui.websiteScreens') : t('projectDetail.ui.appScreens')}
              </h2>
              <p className="text-gray-400 text-lg">
              {project?.slug === 'saglik-takip-platformu' 
                ? t('projectDetail.ui.screensDesc.AnlatmamLazım')
                : project?.slug === 'isaret-dili-ai-uygulamasi'
                ? t('projectDetail.ui.screensDesc.conversign')
                : project?.slug === 'haberapron-web-sitesi'
                ? t('projectDetail.ui.screensDesc.haberapron')
                : t('projectDetail.ui.screensDesc.spiroble')
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
                                  <span>{t('projectDetail.ui.swipe')}</span>
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
                              <span>{t('projectDetail.ui.swipe')}</span>
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
                      <h4 className="text-xl font-semibold text-white">{t('projectDetail.usedTechnologies')}</h4>
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
                    <h4 className="text-xl font-semibold text-white">{t('projectDetail.ui.technicalDetails')}</h4>
                    <div className="space-y-3">
                      {project?.slug === 'isaret-dili-ai-uygulamasi' ? (
                        <>
                          {activeFlow === 0 && (
                            <>
                              <p className="text-gray-300">• OpenCV with real-time video processing and hand detection</p>
                              <p className="text-gray-300">• Browser-based AI inference with TensorFlow.js</p>
                              <p className="text-gray-300">• Pose estimation and landmark detection with MediaPipe</p>
                              <p className="text-gray-300">• Sign language classification with custom CNN models</p>
                            </>
                          )}
                          {activeFlow === 1 && (
                            <>
                              <p className="text-gray-300">• Camera integration with React Native Camera</p>
                              <p className="text-gray-300">• Text-to-speech with Web Speech API</p>
                              <p className="text-gray-300">• Accessibility features with Accessibility API</p>
                              <p className="text-gray-300">• Real-time video streaming and processing</p>
                            </>
                          )}
                          {activeFlow === 2 && (
                            <>
                              <p className="text-gray-300">• Building and labeling a dataset of 50+ sign gestures</p>
                              <p className="text-gray-300">• Custom model training and optimization with PyTorch</p>
                              <p className="text-gray-300">• Mobile model quantization with TensorFlow Lite</p>
                              <p className="text-gray-300">• Offline support via edge computing</p>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {activeFlow === 0 && (
                            <>
                              <p className="text-gray-300">• Cross-platform mobile app development with Flutter</p>
                              <p className="text-gray-300">• Data management with Firebase Realtime Database</p>
                              <p className="text-gray-300">• Spirometer device integration via Bluetooth LE</p>
                              <p className="text-gray-300">• Real-time respiratory data analysis</p>
                            </>
                          )}
                          {activeFlow === 1 && (
                            <>
                              <p className="text-gray-300">• RESTful API development with Node.js and Express</p>
                              <p className="text-gray-300">• NoSQL database design with MongoDB</p>
                              <p className="text-gray-300">• Secure authentication with JWT</p>
                              <p className="text-gray-300">• Request/response handling via middleware</p>
                            </>
                          )}
                          {activeFlow === 2 && (
                            <>
                              <p className="text-gray-300">• CI/CD pipeline setup with GitHub Actions</p>
                              <p className="text-gray-300">• Containerization with Docker</p>
                              <p className="text-gray-300">• Cloud deployment on AWS</p>
                              <p className="text-gray-300">• Performance monitoring and analytics</p>
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
              <h2 className="text-4xl font-bold text-white mb-4">{t('projectDetail.sections.devProcessTitle')}</h2>
              <p className="text-gray-400 text-lg">{t('projectDetail.sections.devProcessDesc')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: MessageCircle,
                  title: "Proje Planlama",
                  description: t('projectDetail.features.agileMethodology'),
                  color: "from-blue-500 to-cyan-500",
                  tech: "Jira, Confluence, Figma"
                },
                {
                  step: "02", 
                  icon: Users,
                  title: "Full-Stack Development",
                  description: t('projectDetail.features.fullStackDev'),
                  color: "from-green-500 to-emerald-500",
                  tech: "React Native, Node.js, MongoDB"
                },
                {
                  step: "03",
                  icon: Heart,
                  title: "Test & Deployment",
                  description: t('projectDetail.features.testingDeployment'),
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
              {project?.slug === 'saglik-takip-platformu' ? t('projectDetail.AnlatmamLazımFeatures') : 
               project?.slug === 'solunum-sagligi-uygulamasi' ? t('projectDetail.spirobleFeatures') : 
               project?.slug === 'haberapron-web-sitesi' ? t('projectDetail.haberapronFeatures') : t('projectDetail.featuresHeading')}
            </h2>
            <p className="text-gray-400 text-lg">
              {project?.slug === 'saglik-takip-platformu' 
                ? t('projectDetail.sections.featuresIntro.AnlatmamLazım')
                : project?.slug === 'solunum-sagligi-uygulamasi'
                ? t('projectDetail.sections.featuresIntro.spiroble')
                : project?.slug === 'haberapron-web-sitesi'
                ? t('projectDetail.sections.featuresIntro.haberapron')
                : t('projectDetail.sections.featuresIntro.default')
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(project?.slug === 'saglik-takip-platformu' ? [
              { icon: Shield, title: t('projectDetail.featureTitles.securityEncryption'), description: t('projectDetail.features.securityEncryption') },
              { icon: Zap, title: t('projectDetail.featureTitles.realtimeCommunication'), description: t('projectDetail.features.realtimeComm') },
              { icon: Award, title: t('projectDetail.featureTitles.scalableArchitecture'), description: t('projectDetail.features.scalableArch') }
            ] : project?.slug === 'isaret-dili-ai-uygulamasi' ? [
              { icon: Brain, title: "AI-Powered Recognition", description: t('projectDetail.features.aiRecognition') },
              { icon: Eye, title: "Real-time Processing", description: t('projectDetail.features.realtimeProcessing') },
              { icon: Volume2, title: "Accessibility First", description: t('projectDetail.features.accessibilityFirst') }
            ] : project?.slug === 'solunum-sagligi-uygulamasi' ? [
              { icon: Activity, title: t('projectDetail.featureTitles.realtimeMeasurement'), description: t('projectDetail.features.realtimeMeasurement') },
              { icon: Shield, title: t('projectDetail.featureTitles.secureDataStorage'), description: t('projectDetail.features.secureDataStorage') },
              { icon: Zap, title: t('projectDetail.featureTitles.smartAnalysis'), description: t('projectDetail.features.smartAnalysis') }
            ] : project?.slug === 'haberapron-web-sitesi' ? [
              { icon: Zap, title: t('projectDetail.featureTitles.highPerformance'), description: t('projectDetail.features.highPerformance') },
              { icon: Shield, title: t('projectDetail.featureTitles.secureInfrastructure'), description: t('projectDetail.features.secureInfrastructure') },
              { icon: Monitor, title: t('projectDetail.featureTitles.modernUI'), description: t('projectDetail.features.modernUI') }
            ] : [
              { icon: Zap, title: t('projectDetail.featureTitles.fastPerformance'), description: t('projectDetail.features.fastPerformance') },
              { icon: Shield, title: t('projectDetail.featureTitles.secure'), description: t('projectDetail.features.secure') },
              { icon: Users, title: t('projectDetail.featureTitles.social'), description: t('projectDetail.features.social') }
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
            <h2 className="text-4xl font-bold text-white mb-4">{t('projectDetail.technologies')}</h2>
            <p className="text-gray-400 text-lg">{t('projectDetail.developedWithLatestTech')}</p>
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

      {/* Success Stories Section - AnlatmamLazım */}
      {project?.slug === 'saglik-takip-platformu' && (
        <section className="py-20 bg-gradient-to-r from-pink-500/10 to-rose-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{t('projectDetail.ui.successStories')}</h2>
              <p className="text-gray-400 text-lg">{t('projectDetail.ui.usersChangedLives')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: t('projectDetail.testimonials.ayse.name'),
                  age: "28",
                  story: t('projectDetail.testimonials.ayse.story'),
                  rating: 5,
                  improvement: t('projectDetail.testimonials.ayse.improvement')
                },
                {
                  name: t('projectDetail.testimonials.mehmet.name'),
                  age: "35", 
                  story: t('projectDetail.testimonials.mehmet.story'),
                  rating: 5,
                  improvement: t('projectDetail.testimonials.mehmet.improvement')
                },
                {
                  name: t('projectDetail.testimonials.zeynep.name'),
                  age: "24",
                  story: t('projectDetail.testimonials.zeynep.story'),
                  rating: 5,
                  improvement: t('projectDetail.testimonials.zeynep.improvement')
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
                        <p className="text-gray-400 text-sm">{user.age} {t('projectDetail.ui.yearsOld')}</p>
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
              {t('projectDetail.accessibleCommunication')}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {t('projectDetail.ui.conversignDemoDesc')}
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className={`px-8 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {t('projectDetail.ui.aiWatchDemo')}
            </button>
            <a 
              href="https://appgallery.huawei.com/app/C114157203?sharePrepath=ag&locale=tr_TR&source=appshare&subsource=C114157203&shareTo=com.android.chrome&shareFrom=appmarket&shareIds=919e6ea53fa24502888bfc28205e37db_com.android.chrome&callType=SHARE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700"
            >
              {t('projectDetail.ui.downloadFromAppGallery')}
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
              {t('projectDetail.ui.browserNotSupport')}
            </video>
          </div>
          
          {/* Video Info */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              {project?.slug === 'isaret-dili-ai-uygulamasi' ? t('projectDetail.ui.conversignDemo') : 
               project?.slug === 'solunum-sagligi-uygulamasi' ? t('projectDetail.ui.spirobleDemo') : t('projectDetail.ui.projectDemo')}
            </h3>
            <p className="text-gray-300">
              {project?.slug === 'isaret-dili-ai-uygulamasi' 
                ? t('projectDetail.ui.conversignDemoDesc')
                : project?.slug === 'solunum-sagligi-uygulamasi'
                ? t('projectDetail.ui.spirobleDemoDesc')
                : t('projectDetail.ui.projectDemoDesc')
              }
            </p>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}


