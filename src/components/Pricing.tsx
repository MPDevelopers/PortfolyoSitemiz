"use client"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { ArrowLeft, Check, Info, MessageCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const pricingTiers = [
    {
      name: t('pricing.tiers.starter'),
      color: "bg-orange-500",
      textColor: "text-orange-500",
      users: t('pricing.tiers.simpleApps'),
      userSubtext: t('pricing.tiers.staticWebsite'),
      features: [
        { name: t('pricing.features.projectManagement'), included: [true, true, true] },
        { name: t('pricing.features.authSystem'), included: [false, true, true] },
        { name: t('pricing.features.configuration'), included: [true, true, true] },
        { name: t('pricing.features.dataImportSupport'), included: [false, true, true] },
      ],
      customizations: [
        { name: t('pricing.customizations.customizations'), included: [false, true, true] },
        { name: t('pricing.customizations.improvements'), included: [false, false, true] },
        { name: t('pricing.customizations.performanceIssues'), included: [false, false, true] },
      ],
      regularPrice: "5.000 TL",
      discountedPrice: "4.250 TL",
    },
    {
      name: t('pricing.tiers.standard'),
      color: "bg-rose-500",
      textColor: "text-rose-500",
      users: t('pricing.tiers.advancedApps'),
      userSubtext: "20.000 - 100.000 TL",
      features: [
        { name: t('pricing.features.projectManagement'), included: [true, true, true] },
        { name: t('pricing.features.authSystem'), included: [false, true, true] },
        { name: t('pricing.features.configuration'), included: [true, true, true] },
        { name: t('pricing.features.dataImportSupport'), included: [false, true, true] },
      ],
      customizations: [
        { name: t('pricing.customizations.customizations'), included: [false, true, true] },
        { name: t('pricing.customizations.improvements'), included: [false, false, true] },
        { name: t('pricing.customizations.performanceIssues'), included: [false, false, true] },
      ],
      regularPrice: "20.000 - 100.000 TL",
      discountedPrice: "17.000-85.000 TL",
    },
    {
      name: t('pricing.tiers.pro'),
      color: "bg-slate-600",
      textColor: "text-slate-600",
      users: t('pricing.tiers.advancedApps'),
      userSubtext: "100.000+ TL",
      features: [
        { name: t('pricing.features.projectManagement'), included: [true, true, true] },
        { name: t('pricing.features.authSystem'), included: [false, true, true] },
        { name: t('pricing.features.configuration'), included: [true, true, true] },
        { name: t('pricing.features.dataImportSupport'), included: [false, true, true] },
      ],
      customizations: [
        { name: t('pricing.customizations.customizations'), included: [false, true, true] },
        { name: t('pricing.customizations.improvements'), included: [false, false, true] },
        { name: t('pricing.customizations.performanceIssues'), included: [false, false, true] },
      ],
      regularPrice: "100.000+ TL",
      discountedPrice: "85.000+ TL",
    },
  ]

  const allFeatures = [
    { name: t('pricing.features.projectManagement'), included: [true, true, true] },
    { name: t('pricing.features.authSystem'), included: [false, true, true] },
    { name: t('pricing.features.configuration'), included: [true, true, true] },
    { name: t('pricing.features.dataImportSupport'), included: [false, true, true] },
  ]

  const customizationFeatures = [
    { name: t('pricing.customizations.customizations'), included: [false, true, true] },
    { name: t('pricing.customizations.improvements'), included: [false, false, true] },
    { name: t('pricing.customizations.performanceIssues'), included: [false, false, true] },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated Background */}
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
              {t('pricing.backButton')}
            </button>

            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('pricing.title')}</h1>
              <p className="text-lg text-gray-300">
                {t('pricing.description')}
              </p>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="col-span-1 p-6">
                <p className="text-sm font-semibold text-white/90">{t('pricing.recommended')}</p>
              </div>
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`col-span-1 p-6 ${tier.color} text-white text-center relative`}>
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-sm">
                    <p className="font-semibold flex items-center justify-center gap-1">
                      {tier.users}
                      {index === 0 && <Info className="w-4 h-4" />}
                    </p>
                    {tier.userSubtext && <p className="text-xs mt-1">{tier.userSubtext}</p>}
                  </div>
                </div>
              ))}
            </div>


            {/* Features */}
            {allFeatures.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-4 border-b border-white/10 hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
                <div className="col-span-1 p-4">
                  <p className="text-white/90">{feature.name}</p>
                </div>
                {feature.included.map((isIncluded, tierIndex) => (
                  <div key={tierIndex} className="col-span-1 p-4 flex justify-center items-center">
                    {isIncluded && <Check className={`w-5 h-5 ${pricingTiers[tierIndex].textColor}`} />}
                  </div>
                ))}
              </div>
            ))}

            {/* Customizations Section Header */}
            <div className="grid grid-cols-4 border-b border-white/10 bg-white/10 backdrop-blur-xl">
              <div className="col-span-1 p-4">
                <p className="font-bold text-white flex items-center gap-2">
                  {t('pricing.customizations.title')}
                  <Info className="w-4 h-4" />
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {t('pricing.customizations.description')}
                </p>
              </div>
              <div className="col-span-3"></div>
            </div>

            {/* Customization Features */}
            {customizationFeatures.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-4 border-b border-white/10 hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
                <div className="col-span-1 p-4">
                  <p className="text-white/90">{feature.name}</p>
                </div>
                {feature.included.map((isIncluded, tierIndex) => (
                  <div key={tierIndex} className="col-span-1 p-4 flex justify-center items-center">
                    {isIncluded && <Check className={`w-5 h-5 ${pricingTiers[tierIndex].textColor}`} />}
                  </div>
                ))}
              </div>
            ))}

            {/* Pricing Rows */}
            <div className="grid grid-cols-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="col-span-1 p-4">
                <p className="font-bold text-white">{t('pricing.pricing.returningCustomers')}</p>
              </div>
              {pricingTiers.map((tier, index) => (
                <div key={index} className="col-span-1 p-4 text-center">
                  <p className="text-xl font-bold text-white">{tier.regularPrice}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4">
              <div className="col-span-1 p-4 bg-white/5 backdrop-blur-xl">
                <p className="font-bold text-white">{t('pricing.pricing.newCustomers')}</p>
              </div>
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`col-span-1 p-6 ${tier.color} text-white text-center relative`}>
                  <p className="text-2xl font-bold">{tier.discountedPrice}</p>
                </div>
              ))}
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
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium text-sm whitespace-nowrap">
              {t('pricing.cta.title')}
            </span>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </button>
      </div>
    </div>
  )
}
