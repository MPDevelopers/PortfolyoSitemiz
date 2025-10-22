//
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

//
import DotGridShader from "./DotGridShader"

import AnimatedHeading from "@/components/AnimatedHeading"
import RevealOnView from "@/components/RevealOnView"
import { Badge } from "@/components/ui/badge"

export default function MobileServiceDetail() {
  const { t } = useTranslation()
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const processStepsData = t("services.mobileDevelopment.processSteps", { returnObjects: true }) as Array<{ title: string; description: string; note?: string }>
  const processSteps = [
    { number: "1", gradientFrom: "#0f172a", gradientTo: "#6d28d9", title: processStepsData?.[0]?.title, description: processStepsData?.[0]?.description },
    { number: "2", gradientFrom: "#111827", gradientTo: "#2563eb", title: processStepsData?.[1]?.title, description: processStepsData?.[1]?.description },
    { number: "3", gradientFrom: "#0b132b", gradientTo: "#5bc0be", title: processStepsData?.[2]?.title, description: processStepsData?.[2]?.description, note: processStepsData?.[2]?.note },
    { number: "4", gradientFrom: "#0f172a", gradientTo: "#10b981", title: processStepsData?.[3]?.title, description: processStepsData?.[3]?.description },
    { number: "5", gradientFrom: "#1f2937", gradientTo: "#8b5cf6", title: processStepsData?.[4]?.title, description: processStepsData?.[4]?.description },
  ]

  return (
    <main className="bg-neutral-950 text-white">
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
                  lines={[t("services.mobileDevelopment.title")]}
                />

                <p className="mt-6 text-xl font-semibold text-white/90">{t("services.mobileDevelopment.subtitle")}</p>

                <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/70">{t("services.mobileDevelopment.description")}</p>

                <div className="mt-6 space-y-2">
                  {[t("services.mobileDevelopment.features.crossPlatform"), t("services.mobileDevelopment.features.offlineSupport"), t("services.mobileDevelopment.features.cameraIntegration"), t("services.mobileDevelopment.features.paymentIntegration")].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

               

                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">{t("services.technologiesHeading")}</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-xl font-black text-white/25 sm:grid-cols-3">
                    {(t("services.mobileDevelopment.technologies", { returnObjects: true }) as string[]).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          <div className="space-y-3">
            <RevealOnView className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-900/60 p-8 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t("services.processManagementTitle")}</h2>
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
