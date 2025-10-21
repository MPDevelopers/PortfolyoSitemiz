"use client"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { ArrowLeft, Check, Info } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation()
  const navigate = useNavigate()

  const pricingTiers = [
    {
      name: "Starter",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      hours: "4 saat",
      users: "Basit Uygulamalar",
      userSubtext: "1-5 kullanıcı",
      features: [
        { name: "Proje Yönetimi", included: [true, true, true, true, true] },
        { name: "E-posta + Telefon Desteği", included: [true, true, true, true, true] },
        { name: "Eğitim ve Koçluk", included: [true, true, true, true, true] },
        { name: "Yapılandırma", included: [true, true, true, true, true] },
        { name: "Veri İçe Aktarma Desteği", included: [false, true, true, true, true] },
        { name: "Yerinde Danışmanlık Hizmeti *", included: [false, false, true, true, true] },
      ],
      customizations: [
        { name: "Özelleştirmeler (formlar, raporlar, iş akışı)", included: [false, true, true, true, true] },
        { name: "Geliştirmeler", included: [false, false, true, true, true] },
        { name: "Performans Sorunları", included: [false, false, true, true, true] },
      ],
      regularPrice: "329,41 €",
      discountedPrice: "280,00 €",
    },
    {
      name: "Temel",
      color: "bg-indigo-600",
      textColor: "text-indigo-600",
      hours: "25 saat",
      users: "Basit Uygulamalar",
      userSubtext: "",
      features: [
        { name: "Proje Yönetimi", included: [true, true, true, true, true] },
        { name: "E-posta + Telefon Desteği", included: [true, true, true, true, true] },
        { name: "Eğitim ve Koçluk", included: [true, true, true, true, true] },
        { name: "Yapılandırma", included: [true, true, true, true, true] },
        { name: "Veri İçe Aktarma Desteği", included: [false, true, true, true, true] },
        { name: "Yerinde Danışmanlık Hizmeti *", included: [false, false, true, true, true] },
      ],
      customizations: [
        { name: "Özelleştirmeler (formlar, raporlar, iş akışı)", included: [false, true, true, true, true] },
        { name: "Geliştirmeler", included: [false, false, true, true, true] },
        { name: "Performans Sorunları", included: [false, false, true, true, true] },
      ],
      regularPrice: "1.700,00 €",
      discountedPrice: "1.445,00 €",
    },
    {
      name: "Standart",
      color: "bg-rose-500",
      textColor: "text-rose-500",
      hours: "50 saat",
      users: "Gelişmiş Uygulamalar",
      userSubtext: "Veri İçe Aktarımı",
      features: [
        { name: "Proje Yönetimi", included: [true, true, true, true, true] },
        { name: "E-posta + Telefon Desteği", included: [true, true, true, true, true] },
        { name: "Eğitim ve Koçluk", included: [true, true, true, true, true] },
        { name: "Yapılandırma", included: [true, true, true, true, true] },
        { name: "Veri İçe Aktarma Desteği", included: [false, true, true, true, true] },
        { name: "Yerinde Danışmanlık Hizmeti *", included: [false, false, true, true, true] },
      ],
      customizations: [
        { name: "Özelleştirmeler (formlar, raporlar, iş akışı)", included: [false, true, true, true, true] },
        { name: "Geliştirmeler", included: [false, false, true, true, true] },
        { name: "Performans Sorunları", included: [false, false, true, true, true] },
      ],
      regularPrice: "3.000,00 €",
      discountedPrice: "2.550,00 €",
    },
    {
      name: "Özel Plan",
      color: "bg-teal-500",
      textColor: "text-teal-500",
      hours: "100 saat",
      users: "Gelişmiş Uygulamalar",
      userSubtext: "Veri İçe Aktarımı Özelleştirmeler",
      features: [
        { name: "Proje Yönetimi", included: [true, true, true, true, true] },
        { name: "E-posta + Telefon Desteği", included: [true, true, true, true, true] },
        { name: "Eğitim ve Koçluk", included: [true, true, true, true, true] },
        { name: "Yapılandırma", included: [true, true, true, true, true] },
        { name: "Veri İçe Aktarma Desteği", included: [false, true, true, true, true] },
        { name: "Yerinde Danışmanlık Hizmeti *", included: [false, false, true, true, true] },
      ],
      customizations: [
        { name: "Özelleştirmeler (formlar, raporlar, iş akışı)", included: [false, true, true, true, true] },
        { name: "Geliştirmeler", included: [false, false, true, true, true] },
        { name: "Performans Sorunları", included: [false, false, true, true, true] },
      ],
      regularPrice: "5.400,00 €",
      discountedPrice: "4.590,00 €",
    },
    {
      name: "Pro",
      color: "bg-slate-600",
      textColor: "text-slate-600",
      hours: "200 saat",
      users: "Gelişmiş Uygulamalar",
      userSubtext: "Veri İçe Aktarımı Özelleştirmeler",
      features: [
        { name: "Proje Yönetimi", included: [true, true, true, true, true] },
        { name: "E-posta + Telefon Desteği", included: [true, true, true, true, true] },
        { name: "Eğitim ve Koçluk", included: [true, true, true, true, true] },
        { name: "Yapılandırma", included: [true, true, true, true, true] },
        { name: "Veri İçe Aktarma Desteği", included: [false, true, true, true, true] },
        { name: "Yerinde Danışmanlık Hizmeti *", included: [false, false, true, true, true] },
      ],
      customizations: [
        { name: "Özelleştirmeler (formlar, raporlar, iş akışı)", included: [false, true, true, true, true] },
        { name: "Geliştirmeler", included: [false, false, true, true, true] },
        { name: "Performans Sorunları", included: [false, false, true, true, true] },
      ],
      regularPrice: "10.800,00 €",
      discountedPrice: "9.180,00 €",
    },
  ]

  const allFeatures = [
    { name: "Proje Yönetimi", included: [true, true, true, true, true] },
    { name: "E-posta + Telefon Desteği", included: [true, true, true, true, true] },
    { name: "Eğitim ve Koçluk", included: [true, true, true, true, true] },
    { name: "Yapılandırma", included: [true, true, true, true, true] },
    { name: "Veri İçe Aktarma Desteği", included: [false, true, true, true, true] },
    { name: "Yerinde Danışmanlık Hizmeti *", included: [false, false, true, true, true] },
  ]

  const customizationFeatures = [
    { name: "Özelleştirmeler (formlar, raporlar, iş akışı)", included: [false, true, true, true, true] },
    { name: "Geliştirmeler", included: [false, false, true, true, true] },
    { name: "Performans Sorunları", included: [false, false, true, true, true] },
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
              Geri Dön
            </button>

            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ücretlendirme</h1>
              <p className="text-lg text-gray-300">
                Projenizin ihtiyaçlarına uygun paketlerimizi keşfedin.
              </p>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
            {/* Table Header */}
            <div className="grid grid-cols-6 border-b border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="col-span-1 p-6">
                <p className="text-sm font-semibold text-white/90">Önerilir:</p>
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

            {/* Hours Row */}
            <div className="grid grid-cols-6 border-b border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="col-span-1 p-4">
                <p className="font-semibold text-white/90">Size Özel Uzman</p>
              </div>
              {pricingTiers.map((tier, index) => (
                <div key={index} className="col-span-1 p-4 text-center">
                  <p className="text-2xl font-bold text-white">{tier.hours}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            {allFeatures.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-6 border-b border-white/10 hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
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
            <div className="grid grid-cols-6 border-b border-white/10 bg-white/10 backdrop-blur-xl">
              <div className="col-span-1 p-4">
                <p className="font-bold text-white">Uygulama Özelleştirmesi **</p>
              </div>
              <div className="col-span-5"></div>
            </div>

            {/* Customization Features */}
            {customizationFeatures.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-6 border-b border-white/10 hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
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
            <div className="grid grid-cols-6 border-b border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="col-span-1 p-4">
                <p className="font-bold text-white">Tekrar Alışveriş Yapan Müşteriler</p>
              </div>
              {pricingTiers.map((tier, index) => (
                <div key={index} className="col-span-1 p-4 text-center">
                  <p className="text-xl font-bold text-white">{tier.regularPrice}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-6">
              <div className="col-span-1 p-4 bg-white/5 backdrop-blur-xl">
                <p className="font-bold text-white">Yeni Müşteriler (15% indirim) ***</p>
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
    </div>
  )
}
