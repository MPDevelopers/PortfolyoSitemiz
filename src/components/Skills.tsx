import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);

  const skills: Skill[] = [
    { name: 'Flutter', level: 95, color: 'bg-white' },
    { name: 'React Native', level: 90, color: 'bg-white' },
    { name: 'Firebase', level: 88, color: 'bg-white' },
    { name: 'Python', level: 85, color: 'bg-white' },
    { name: 'UI/UX Design', level: 92, color: 'bg-white' },
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevels(skills.map((skill) => skill.level));
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setAnimatedLevels(skills.map(() => 0));
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Yeteneklerimiz
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Uzman olduğumuz teknolojiler ve araçlar
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">
                    {skill.name}
                  </span>
                  <span className="text-lg font-bold text-white">
                    {animatedLevels[index] || 0}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                    style={{
                      width: `${animatedLevels[index] || 0}%`,
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 hover:shadow-lg transition-all duration-300 border border-slate-700">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-300">Yıllık Deneyim</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 hover:shadow-lg transition-all duration-300 border border-slate-700">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Tamamlanan Proje</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 hover:shadow-lg transition-all duration-300 border border-slate-700">
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-gray-300">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
