import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollHide } from '../hooks/useScrollHide';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHidden = useScrollHide();
  
  // Sadece hizmet detay sayfalarında scroll hide özelliğini aktif et
  const isServiceDetailPage = location.pathname.includes('/services/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (link: any) => {
    if (link.href) {
      navigate(link.href);
      setIsMobileMenuOpen(false);
    } else {
      scrollToSection(link.id);
    }
  };

  const navLinks = [
    { id: 'about', label: 'Hakkımızda' },
    { id: 'projects', label: 'Projeler' },
    { id: 'skills', label: 'Yetenekler' },
    { id: 'faq', label: 'SSS' },
    { id: 'contact', label: 'İletişim' },
    { id: 'pricing', label: 'Ücretlendirme', href: '/pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md shadow-lg'
          : ''
      } ${
        isServiceDetailPage && isHidden 
          ? '-translate-y-full' 
          : 'translate-y-0'
      }`}
      style={{ 
        backgroundColor: isServiceDetailPage 
          ? (isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent')
          : (isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent')
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => {
              if (isServiceDetailPage) {
                navigate('/');
              } else {
                scrollToSection('hero');
              }
            }}
            className="flex items-center space-x-2 group"
          >
            <Code2 className="w-8 h-8 text-white group-hover:text-white transition-colors" />
            <span className="text-xl font-bold text-white">MPDevelopers</span>
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="text-gray-300 hover:text-white font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 animate-slide-down">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="block w-full text-left text-gray-300 hover:text-white font-medium py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
