import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import AnimatedHeading from "@/components/AnimatedHeading"
import RevealOnView from "@/components/RevealOnView"
import { Badge } from "@/components/ui/badge"

export default function WebServiceDetail() {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const processSteps = [
    {
      number: "1",
      title: "Başlangıç Toplantısı",
      description:
        "Projeye başlamadan önce müşterinin ihtiyaçlarını, beklentilerini ve hedeflerini anlamak için detaylı bir toplantı gerçekleştiriyoruz. Bu aşama, projenin doğru bir şekilde planlanabilmesi için temel oluşturur.",
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      number: "2",
      title: "Gereksinim Analizi",
      description:
        "Toplantıda elde edilen bilgiler doğrultusunda, projenin iş ve teknik gereksinimleri çıkarılır. Hangi özelliklerin öncelikli olduğu, kullanıcı akışları ve teknik gereklilikler detaylı olarak belirlenir.",
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      number: "3",
      title: "Haftalık Toplantılar ve Süreç Takibi",
      description:
        "Müşteri ile anlaşma sağlandıktan sonra proje süreci, haftalık toplantılar ile yakından takip edilir. Bu aşamada, projenin ilerleyişi düzenli olarak gözden geçirilir ve anlaşılan kriterler doğrultusunda gerekli revizeler yapılır.",
      note: "Not: Süreç içinde yeni özellikler eklenmesi durumunda, ek çalışmalar için yeniden fiyatlandırma yapılır.",
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      number: "4",
      title: "Revizeler ve Uygulama Teslimi",
      description:
        "Revizeler tamamlandıktan sonra, uygulama anlaşılan kriterler doğrultusunda tamamlanır ve müşteriye teslim edilir. Bu aşama, projenin hedeflenen kalite ve fonksiyonellikte son halini almasını sağlar.",
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      number: "5",
      title: "Bakım ve Destek",
      description:
        "Uygulamanın tesliminden sonra sunulan bakım ve destek hizmetleri, sistemin sorunsuz çalışmasını ve gerektiğinde güncellemeler yapılmasını kapsar. Bu hizmetler ayrıca ücretlendirilir.",
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-20 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-fit">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["Web Uygulama"]}
                />

                <p className="mt-6 text-xl font-semibold text-white/90">Modern ve hızlı web uygulamaları</p>

                <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/70">
                  React, Next.js ve TypeScript ile modern web uygulamaları. Responsive tasarım, SEO optimizasyonu ve yüksek performans.
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-sm text-white/80">Responsive tasarım</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-sm text-white/80">SEO optimizasyonu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-sm text-white/80">Hızlı performans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-sm text-white/80">Güvenli altyapı</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">
                      Hemen İletişime Geç
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">KULLANDIĞIMIZ TEKNOLOJİLER</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-xl font-black text-white/25 sm:grid-cols-3">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Firebase</li>
                    <li>Supabase</li>
                  </ul>
                </div>
              </div>
              
            </RevealOnView>
          </aside>

          <div className="space-y-3">
            <RevealOnView className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-900/60 p-8 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Süreç Yönetimi</h2>
            </RevealOnView>

            {processSteps.map((step, idx) => (
              <article key={step.number} className="group relative h-[320px]">
                <RevealOnView
                  delay={idx * 0.06}
                  className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] h-full"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-[1.35rem] bg-black/40 backdrop-blur-sm p-6 sm:p-8 lg:h-full flex flex-col justify-between">
                    {/* Step number badge */}
                    <div className="mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/10 text-white border-white/20 backdrop-blur-sm text-lg px-4 py-1.5"
                      >
                        {step.number}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-balance">{step.title}</h3>
                      <p className="text-white/80 leading-relaxed text-pretty">{step.description}</p>
                      {step.note && (
                        <p className="mt-4 text-sm text-white/60 italic leading-relaxed text-pretty">{step.note}</p>
                      )}
                    </div>
                  </div>
                </RevealOnView>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
