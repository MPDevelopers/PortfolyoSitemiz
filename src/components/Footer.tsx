import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { id: 'about', label: t('navigation.about') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'skills', label: t('navigation.skills') },
    { id: 'faq', label: t('navigation.faq') },
    { id: 'contact', label: t('navigation.contact') },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div>
              <span className="text-xl font-bold text-white">MPDevelopers</span>
            </div>
            <p className="text-dark-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
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
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
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
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
