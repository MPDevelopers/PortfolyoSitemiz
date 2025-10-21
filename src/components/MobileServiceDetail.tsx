import { ArrowRight, Smartphone, Code, Database, Palette, Zap, Shield, ArrowLeft, Wifi, Bluetooth } from "lucide-react"
import { useNavigate } from "react-router-dom"
import AnimatedHeading from "./AnimatedHeading"
import RevealOnView from "./RevealOnView"
import ProjectCard from "./ProjectCard"

export default function MobileServiceDetail() {
  const navigate = useNavigate()

  const projects = [
    {
      title: "Sosyal Medya Uygulaması",
      subtitle: "Gerçek zamanlı mesajlaşma",
      imageSrc: "/api/placeholder/800/600",
      tags: ["Social", "Real-time", "Chat"],
      href: "#social",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "E-Ticaret Mobil",
      subtitle: "Mobil alışveriş deneyimi",
      imageSrc: "/api/placeholder/800/600",
      tags: ["E-Commerce", "Mobile", "Shopping"],
      href: "#mobile-commerce",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Fitness Takip",
      subtitle: "Sağlık ve spor takibi",
      imageSrc: "/api/placeholder/800/600",
      tags: ["Health", "Fitness", "Tracking"],
      href: "#fitness",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "Kurumsal Uygulama",
      subtitle: "İş yönetim sistemi",
      imageSrc: "/api/placeholder/800/600",
      tags: ["Business", "Management", "Productivity"],
      href: "#business",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Oyun Uygulaması",
      subtitle: "Eğlenceli mobil oyun",
      imageSrc: "/api/placeholder/800/600",
      tags: ["Gaming", "Entertainment", "Fun"],
      href: "#game",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "Fintech Uygulaması",
      subtitle: "Mobil bankacılık çözümü",
      imageSrc: "/api/placeholder/800/600",
      tags: ["Finance", "Banking", "Security"],
      href: "#fintech",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-20 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Back button */}
              <div className="mb-4">
                <button 
                  onClick={() => navigate(-1)}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Geri Dön
                </button>
              </div>

              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20" />
              </div>
              
              <div>
                {/* Service icon */}
                <div className="mb-8 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-green-500/20">
                    <Smartphone className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-2xl font-extrabold tracking-tight">Mobil Uygulama</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["iOS ve Android", "mobil uygulamalar"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Cross-platform mobil uygulamalar. Flutter ve React Native ile tek kod tabanında 
                  iOS ve Android için profesyonel çözümler.
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span>Cross-platform geliştirme</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Wifi className="w-4 h-4 text-blue-400" />
                    <span>Offline çalışma desteği</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Bluetooth className="w-4 h-4 text-purple-400" />
                    <span>Sensör entegrasyonu</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="rounded-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold transition-colors flex items-center gap-2"
                  >
                    Hemen İletişime Geç
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {/* Technologies */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">KULLANDIĞIMIZ TEKNOLOJİLER</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-3">
                    <li>Flutter</li>
                    <li>React Native</li>
                    <li>Firebase</li>
                    <li>SQLite</li>
                    <li>Bluetooth</li>
                    <li>GPS</li>
                  </ul>
                </div>
              </div>
              
            </RevealOnView>
          </aside>

          {/* RIGHT: project showcase */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
