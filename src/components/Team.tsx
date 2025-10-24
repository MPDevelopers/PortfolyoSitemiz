"use client"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import ahmetPhoto from "/ahmet-photo.jpeg"

export default function Team() {
  const { ref, isVisible } = useScrollAnimation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const teamMembers = [
    {
      name: t('team.members.ahmet.name'),
      role: t('team.members.ahmet.role'),
      image: ahmetPhoto,
      skills: [
        t('team.skills.react'),
        t('team.skills.nodejs'),
        t('team.skills.typescript'),
        t('team.skills.flutter'),
        t('team.skills.kotlin'),
        t('team.skills.uiux'),
        t('team.skills.figma'),
        t('team.skills.python'),
        t('team.skills.ai'),
        t('team.skills.machineLearning'),
        t('team.skills.dataScience')
      ],
      social: {
        github: "https://github.com/ahmetakdmrrr",
        linkedin: "https://www.linkedin.com/in/ahmet-akdemir-673326259/",
        email: "ahmet551977@gmail.com"
      }
    },
    {
      name: t('team.members.gizem.name'),
      role: t('team.members.gizem.role'),
      image: "/api/placeholder/300/300",
      skills: [
        t('team.skills.react'),
        t('team.skills.nodejs'),
        t('team.skills.typescript'),
        t('team.skills.flutter'),
        t('team.skills.kotlin'),
        t('team.skills.uiux'),
        t('team.skills.figma'),
        t('team.skills.python'),
        t('team.skills.ai'),
        t('team.skills.machineLearning'),
        t('team.skills.dataScience')
      ],
      social: {
        github: "https://github.com/gzmcn",
        linkedin: "https://www.linkedin.com/in/gizem-can-4198a8207/",
        email: "cangizem245@gmail.com"
      }
    },
    {
      name: t('team.members.ulas.name'),
      role: t('team.members.ulas.role'),
      image: "/api/placeholder/300/300",
      skills: [
        t('team.skills.react'),
        t('team.skills.nodejs'),
        t('team.skills.typescript'),
        t('team.skills.flutter'),
        t('team.skills.kotlin'),
        t('team.skills.uiux'),
        t('team.skills.figma'),
        t('team.skills.python'),
        t('team.skills.ai'),
        t('team.skills.machineLearning'),
        t('team.skills.dataScience')
      ],
      social: {
        github: "https://github.com/UlasUcan77",
        linkedin: "https://www.linkedin.com/in/ula%C5%9F-u%C3%A7an-36531626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        email: "uls.ucn@gmail.com"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated Background - Same as Pricing */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
        
        {/* Floating orbs with glassmorphism */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Static gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-600/20 via-transparent to-cyan-600/20" />
        </div>

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-noise" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="mb-12">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('team.backButton')}
            </button>

             <div className="mb-6 text-center">
               <div className="mb-4">
                 <h1 className="text-4xl md:text-5xl font-bold text-white">{t('team.title')}</h1>
               </div>
               <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                 {t('team.description')}
               </p>
             </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden relative hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
                
                <div className="relative p-8">
                  {/* Profile Image */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-white/20 flex items-center justify-center overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-semibold">{member.role}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/90 mb-3">{t('team.skillsTitle')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                    >
                      <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Values Section */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
            
            <div className="relative p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{t('team.values.title')}</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">{t('team.values.description')}</p>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="text-center">
                   <h3 className="text-lg font-semibold text-white mb-2">{t('team.values.innovation.title')}</h3>
                   <p className="text-gray-300 text-sm">{t('team.values.innovation.description')}</p>
                 </div>

                 <div className="text-center">
                   <h3 className="text-lg font-semibold text-white mb-2">{t('team.values.creativity.title')}</h3>
                   <p className="text-gray-300 text-sm">{t('team.values.creativity.description')}</p>
                 </div>

                 <div className="text-center">
                   <h3 className="text-lg font-semibold text-white mb-2">{t('team.values.collaboration.title')}</h3>
                   <p className="text-gray-300 text-sm">{t('team.values.collaboration.description')}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glass Effect Contact Button - Fixed Position */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => {
            navigate('/');
            // Sayfa yüklendikten sonra iletişim bölümüne scroll yap
            setTimeout(() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                const offset = 100; // 100px yukarıdan başla - navigation bar için
                const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 200);
          }}
          className="group relative px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl"
        >
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative flex items-center space-x-3 text-white">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium text-sm whitespace-nowrap">
              {t('team.cta.title')}
            </span>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </button>
      </div>
    </div>
  )
}
