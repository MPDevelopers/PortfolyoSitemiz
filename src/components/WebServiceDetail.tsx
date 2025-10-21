import { ArrowRight, Globe, Code, Database, Palette, Zap, Shield, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import AnimatedHeading from "./AnimatedHeading"
import RevealOnView from "./RevealOnView"
import ProjectCard from "./ProjectCard"

export default function WebServiceDetail() {
  const navigate = useNavigate()

  const projects = [
    {
      title: "E-Ticaret Platformu",
      subtitle: "Modern e-ticaret çözümü",
      imageSrc: "/api/placeholder/800/600",
      tags: ["E-Commerce", "React", "Next.js"],
      href: "#ecommerce",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "Kurumsal Web Sitesi",
      subtitle: "Profesyonel kurumsal tanıtım",
      imageSrc: "/api/placeholder/800/600",
      tags: ["Corporate", "Responsive", "SEO"],
      href: "#corporate",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Blog Sistemi",
      subtitle: "İçerik yönetim sistemi",
      imageSrc: "/api/placeholder/800/600",
      tags: ["CMS", "Blog", "Content"],
      href: "#blog",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "Portfolio Sitesi",
      subtitle: "Yaratıcı portfolyo tasarımı",
      imageSrc: "/api/placeholder/800/600",
      tags: ["Portfolio", "Creative", "Animation"],
      href: "#portfolio",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "SaaS Dashboard",
      subtitle: "Kullanıcı paneli ve analitik",
      imageSrc: "/api/placeholder/800/600",
      tags: ["SaaS", "Dashboard", "Analytics"],
      href: "#saas",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "Landing Page",
      subtitle: "Yüksek dönüşüm oranlı sayfa",
      imageSrc: "/api/placeholder/800/600",
      tags: ["Landing", "Conversion", "Marketing"],
      href: "#landing",
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
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              </div>
              
              <div>
                {/* Service icon */}
                <div className="mb-8 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/20">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-2xl font-extrabold tracking-tight">Web Sitesi</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["Modern web siteleri", "geliştiriyoruz"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Responsive, hızlı ve SEO uyumlu web siteleri. React, Next.js ve modern teknolojilerle 
                  profesyonel çözümler sunuyoruz.
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span>Hızlı yükleme süreleri</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Güvenli altyapı</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Palette className="w-4 h-4 text-purple-400" />
                    <span>Modern tasarım</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors flex items-center gap-2"
                  >
                    Hemen İletişime Geç
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {/* Technologies */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">KULLANDIĞIMIZ TEKNOLOJİLER</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-3">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind</li>
                    <li>Firebase</li>
                    <li>Supabase</li>
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
