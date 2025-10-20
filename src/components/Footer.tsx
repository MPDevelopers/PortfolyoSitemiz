import { Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { id: 'about', label: 'Hakkımızda' },
    { id: 'projects', label: 'Projeler' },
    { id: 'skills', label: 'Yetenekler' },
    { id: 'contact', label: 'İletişim' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">MPDevelopers</span>
            </div>
            <p className="text-dark-400 leading-relaxed">
              Mobil ve web geliştirmede profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <a
              href="mailto:mpdevelopers@gmail.com"
              className="text-dark-400 hover:text-white transition-colors"
            >
              mpdevelopers@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 text-center">
          <p className="text-dark-500">
            © 2025 Tüm Hakları Saklıdır. MPDevelopers
          </p>
        </div>
      </div>
    </footer>
  );
}
