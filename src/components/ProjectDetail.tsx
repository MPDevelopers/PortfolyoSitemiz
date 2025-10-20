import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
        <div className="text-center text-white">
          <p className="mb-4">Proje bulunamadı.</p>
          <Link to="/" className="text-primary-400 hover:text-primary-300 underline">Ana sayfaya dön</Link>
        </div>
      </section>
    );
  }

  const Icon = project.icon;

  return (
    <section className="py-20" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${project.color} mb-6`}></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{project.title}</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">{project.description}</p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
          <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
          <div className="p-6 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Proje Hakkında</h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.details?.longDescription || project.description}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-3">Teknolojiler</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Link to="/" className="text-primary-400 hover:text-primary-300 font-semibold">← Ana sayfaya dön</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


