import { useTranslation } from 'react-i18next';
import DotGridShader from "./DotGridShader"
import AnimatedHeading from "@/components/AnimatedHeading"
import RevealOnView from "@/components/RevealOnView"
import { Badge } from "@/components/ui/badge"

export default function MobileDevelopmentDetail() {
  const { t } = useTranslation();
  
  const processSteps = t('services.mobileDevelopment.processSteps', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    note?: string;
  }>;

  const processStepsWithNumbers = processSteps.map((step, index) => ({
    number: (index + 1).toString(),
    title: step.title,
    description: step.description,
    note: step.note,
    gradientFrom: ["#0f172a", "#111827", "#0b132b", "#0f172a", "#1f2937"][index],
    gradientTo: ["#6d28d9", "#2563eb", "#5bc0be", "#10b981", "#8b5cf6"][index],
  }));

  const features = t('services.mobileDevelopment.features', { returnObjects: true }) as Record<string, string>;
  const technologies = t('services.mobileDevelopment.technologies', { returnObjects: true }) as string[];

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
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
                  lines={[t('services.mobileDevelopment.title')]}
                />

                <p className="mt-6 text-xl font-semibold text-white/90">{t('services.mobileDevelopment.subtitle')}</p>

                <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/70">
                  {t('services.mobileDevelopment.description')}
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-sm text-white/80">{features.crossPlatform}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-sm text-white/80">{features.nativePerformance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-sm text-white/80">{features.offlineSupport}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-sm text-white/80">{features.pushNotification}</span>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">{t('skills.technologies')}</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-xl font-black text-white/25 sm:grid-cols-3">
                    {technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          <div className="space-y-4">
            <RevealOnView className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-900/60 p-8 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{t('pricing.features.projectManagement')}</h2>
            </RevealOnView>

            {processStepsWithNumbers.map((step, idx) => (
              <article key={step.number} className="group relative lg:min-h-[280px]">
                <RevealOnView
                  delay={idx * 0.06}
                  className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] lg:h-full"
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