import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SpotlightCard from './SpotlightCard';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Palette, 
  Database,
  Code,
  Zap,
  Shield,
  Users,
  BarChart3
} from 'lucide-react';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Web Geliştirme",
      icon: Globe,
      color: "rgba(59, 130, 246, 0.3)",
      skills: [
        {
          name: "Statik Web Siteleri",
          description: "Kurumsal tanıtım siteleri, kişisel portfolyolar veya landing page'ler. Hızlı, hafif ve SEO uyumlu yapılar (HTML, CSS, React, Next.js, Astro)."
        },
        {
          name: "Dinamik Web Siteleri", 
          description: "Kullanıcı etkileşimi olan siteler (örneğin üyelik, yorum, içerik yönetimi). React, Vue veya ASP.NET Core tabanlı modern front-end mimariler."
        },
        {
          name: "Veri Tabanı Entegrasyonlu Sistemler",
          description: "Firestore, MongoDB, SQL veya Firebase Realtime Database ile dinamik veri yönetimi. Admin paneli, CRUD işlemleri, filtreleme ve arama sistemleri."
        },
        {
          name: "E-Ticaret & Online Platformlar",
          description: "Ürün yönetimi, ödeme entegrasyonları, sepet ve kullanıcı paneli. Stripe, PayPal veya Iyzico gibi sistemlerle ödeme altyapısı."
        },
        {
          name: "CMS ve Blog Sistemleri",
          description: "İçerik yönetimi kolaylaştırılmış paneller (Sanity, Strapi, Contentful, WordPress headless). SEO dostu, markdown veya rich text destekli içerik yapısı."
        }
      ]
    },
    {
      title: "Mobil Uygulama Geliştirme",
      icon: Smartphone,
      color: "rgba(16, 185, 129, 0.3)",
      skills: [
        {
          name: "Cross-Platform Uygulamalar",
          description: "Flutter veya React Native ile tek kod tabanında iOS ve Android desteği. Firebase Auth, Firestore, Push Notification ve Cloud Storage entegrasyonları."
        },
        {
          name: "Native Özellik Entegrasyonları",
          description: "Kamera, mikrofon, ses kaydı, GPS, Bluetooth ve sensör erişimi. Local database (SQLite, Hive) veya offline kullanım desteği."
        },
        {
          name: "Sosyal veya Mesajlaşma Uygulamaları",
          description: "Gerçek zamanlı sohbet, bildirim sistemi ve kullanıcı profilleri. Cloud Messaging ve Firestore Realtime Sync altyapısı."
        },
        {
          name: "Kurumsal / İş Yönetim Uygulamaları",
          description: "Personel takibi, proje yönetimi ve raporlama sistemleri. Admin paneli ile mobil istemci entegrasyonu."
        }
      ]
    },
    {
      title: "Backend & API Geliştirme",
      icon: Server,
      color: "rgba(168, 85, 247, 0.3)",
      skills: [
        {
          name: "RESTful API Geliştirme",
          description: "Express.js, Node.js, ASP.NET Core veya Firebase Functions tabanlı API yapıları. JWT kimlik doğrulama, kullanıcı yönetimi ve hata kontrolü."
        },
        {
          name: "Gerçek Zamanlı Veri Sistemleri",
          description: "WebSocket, Firebase Realtime Database veya Socket.io altyapısı. Canlı mesajlaşma ve dashboard güncellemeleri."
        },
        {
          name: "Entegrasyonlar",
          description: "Üçüncü parti servislerle bağlantılar (Google API, OpenAI API, ödeme sistemleri, harita servisleri)."
        }
      ]
    },
    {
      title: "UI/UX Tasarım",
      icon: Palette,
      color: "rgba(245, 101, 101, 0.3)",
      skills: [
        {
          name: "Arayüz Tasarımı",
          description: "Mobil ve web uygulamaları için kullanıcı dostu arayüzler. Figma veya Adobe XD prototipleriyle etkileşimli mockup tasarımları."
        },
        {
          name: "Kullanıcı Deneyimi (UX) Akışları",
          description: "Wireframe → prototip → test süreci. Kullanıcı davranışına göre optimize edilmiş deneyim akışları."
        },
        {
          name: "Markalama ve Görsel Kimlik",
          description: "Logo, renk paleti, tipografi ve ikon seti uyumu. Uygulama teması (light/dark mode) tasarımı."
        }
      ]
    },
    {
      title: "Veri Tabanı ve Bulut Çözümleri",
      icon: Database,
      color: "rgba(34, 197, 94, 0.3)",
      skills: [
        {
          name: "Veri Tabanı Yönetimi",
          description: "Firebase, Firestore, Realtime Database, Supabase veya PostgreSQL yönetimi. Cloud Storage ve dosya yükleme sistemleri."
        },
        {
          name: "Güvenlik ve Kimlik Doğrulama",
          description: "Authentication, authorization ve güvenlik kuralları. Sunucusuz backend (Serverless Functions)."
        }
      ]
    }
  ];

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

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <SpotlightCard 
                key={category.title}
                className="flex flex-col"
                spotlightColor={category.color}
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex-1 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="border-l-2 border-white/20 pl-4">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.2)">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-300">Yıllık Deneyim</div>
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.2)">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Tamamlanan Proje</div>
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.2)">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-300">Mutlu Müşteri</div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
