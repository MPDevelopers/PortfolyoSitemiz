import { Smartphone, Globe, ShoppingCart, Heart, Users, Calendar, Eye, Activity, Newspaper } from 'lucide-react';

export type Project = {
  icon: any;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  color: string;
  details?: {
    longDescription?: string;
    images?: string[];
    screenshots?: {
      flows: {
        name: string;
        screens: {
          title: string;
          description: string;
          image: string;
          icon: string;
          color: string;
          bgPattern: string;
          tech: string;
        }[];
      }[];
    };
  };
};

export const projects: Project[] = [
  {
    icon: Heart,
    slug: 'saglik-takip-platformu',
    title: 'MindConnect - Ruh Sağlığı ve Kişisel Gelişim Platformu',
    description:
      'Psikolojik destek arayan kişiler ile profesyonel psikologlar arasında güvenli, erişilebilir ve etkili bir iletişim platformu.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'İyzico'],
    color: 'from-pink-500 to-rose-500',
    details: {
      longDescription:
        '"MindConnect", ruh sağlığı ve kişisel gelişim alanında destekleyici hizmetler sunan kapsamlı bir mobil uygulamadır. Uygulama, psikolojik destek arayan kişiler ile profesyonel psikologlar arasında güvenli, erişilebilir ve etkili bir iletişim platformu oluşturmaktadır. Kessler psikolojik değerlendirme testi ile kullanıcıların ruh sağlığı durumu değerlendirilir ve kişiselleştirilmiş öneriler sunulur. Gerçek zamanlı mesajlaşma, güvenli ödeme sistemi (İyzico), randevu yönetimi ve kapsamlı psikolog değerlendirme sistemi ile kullanıcıların kişisel gelişim süreçlerinde anlamlı bir gelişim sağlamalarına yardımcı olur.',
      images: [
        'Rol seçimi - Psikolog arıyorum / Psikolog olmak istiyorum',
        'Kessler testi - Psikolojik değerlendirme ve onboarding',
        'Psikolog listesi - Uzmanlık alanları ve değerlendirmeler',
        'Gerçek zamanlı mesajlaşma - Güvenli terapi sohbeti',
        'Randevu sistemi - Müsaitlik takibi ve otomatik chat odası',
        'İyzico ödeme - 3D Secure güvenli ödeme sistemi',
        'Admin paneli - Kullanıcı ve ödeme yönetimi'
      ],
      screenshots: {
        flows: [
          {
            name: "Kullanıcı Deneyimi",
            screens: [
              {
                title: "Rol Seçimi ve Onboarding",
                description: "Psikolog arıyorum / Psikolog olmak istiyorum seçimi ve Kessler testi",
                image: "./screenshots/mindconnect/role-selection.jpg",
                icon: "👥",
                color: "from-blue-500 to-cyan-500",
                bgPattern: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
                tech: "React Native, TypeScript, Form Validation"
              },
              {
                title: "Kessler Psikolojik Testi",
                description: "10 soruluk psikolojik durum değerlendirme ve severity belirleme",
                image: "/screenshots/mindconnect/kessler-test.jpg",
                icon: "🧠",
                color: "from-purple-500 to-pink-500",
                bgPattern: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
                tech: "Algorithm Implementation, Score Calculation"
              },
              {
                title: "Kişiselleştirilmiş Arayüz",
                description: "Kullanıcı tipine göre farklı arayüzler ve öneriler",
                image: "/screenshots/mindconnect/personalized-ui.jpg",
                icon: "🎨",
                color: "from-green-500 to-emerald-500",
                bgPattern: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
                tech: "Dynamic UI, Conditional Rendering"
              }
            ]
          },
          {
            name: "Psikolog Yönetimi",
            screens: [
              {
                title: "Psikolog Listesi ve Filtreleme",
                description: "Doğrulanmış psikologlar, uzmanlık alanları ve değerlendirmeler",
                image: "/screenshots/mindconnect/psychologist-list.jpg",
                icon: "👨‍⚕️",
                color: "from-indigo-500 to-blue-500",
                bgPattern: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
                tech: "MongoDB, Advanced Filtering, Rating System"
              },
              {
                title: "Psikolog Profili",
                description: "Detaylı bilgiler, uzmanlık alanları ve terapi paketleri",
                image: "/screenshots/mindconnect/psychologist-profile.jpg",
                icon: "📋",
                color: "from-emerald-500 to-teal-500",
                bgPattern: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
                tech: "Profile Management, Package Creation"
              },
              {
                title: "Değerlendirme Sistemi",
                description: "Puanlama, yorum sistemi ve güvenilirlik takibi",
                image: "/screenshots/mindconnect/rating-system.jpg",
                icon: "⭐",
                color: "from-amber-500 to-orange-500",
                bgPattern: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
                tech: "Rating Algorithm, Review Management"
              }
            ]
          },
          {
            name: "İletişim ve Ödeme",
            screens: [
              {
                title: "Gerçek Zamanlı Mesajlaşma",
                description: "Socket.io ile güvenli, şifrelenmiş mesajlaşma sistemi",
                image: "/screenshots/mindconnect/realtime-chat.jpg",
                icon: "💬",
                color: "from-rose-500 to-pink-500",
                bgPattern: "bg-gradient-to-br from-rose-500/20 to-pink-500/20",
                tech: "Socket.io, Message Encryption, Status Tracking"
              },
              {
                title: "İyzico Ödeme Sistemi",
                description: "3D Secure güvenli ödeme, ödeme talepleri ve geçmiş takibi",
                image: "/screenshots/mindconnect/payment-system.jpg",
                icon: "💳",
                color: "from-green-500 to-teal-500",
                bgPattern: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
                tech: "İyzico Integration, 3D Secure, Payment Tracking"
              },
              {
                title: "Randevu Sistemi",
                description: "Müsaitlik takibi, randevu onayı ve otomatik chat odası",
                image: "/screenshots/mindconnect/appointment-system.jpg",
                icon: "📅",
                color: "from-violet-500 to-purple-500",
                bgPattern: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
                tech: "Calendar Integration, Auto Chat Creation"
              }
            ]
          },
          {
            name: "Güvenlik ve Yönetim",
            screens: [
              {
                title: "JWT Authentication",
                description: "Güvenli kimlik doğrulama ve rol tabanlı erişim kontrolü",
                image: "/screenshots/mindconnect/authentication.jpg",
                icon: "🔐",
                color: "from-red-500 to-rose-500",
                bgPattern: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
                tech: "JWT, Role-based Access, Data Encryption"
              },
              {
                title: "Admin Dashboard",
                description: "Kullanıcı yönetimi, ödeme takibi ve platform istatistikleri",
                image: "/screenshots/mindconnect/admin-dashboard.jpg",
                icon: "📊",
                color: "from-indigo-500 to-purple-500",
                bgPattern: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
                tech: "Admin Panel, Analytics, User Management"
              },
              {
                title: "GDPR Uyumluluğu",
                description: "Kişisel veri koruma, şifreleme ve gizlilik standartları",
                image: "/screenshots/mindconnect/gdpr-compliance.jpg",
                icon: "🛡️",
                color: "from-blue-500 to-indigo-500",
                bgPattern: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
                tech: "Data Protection, Encryption, Privacy Standards"
              }
            ]
          }
        ]
      }
    },
  },
  {
    icon: Activity,
    slug: 'solunum-sagligi-uygulamasi',
    title: 'Spiroble - Solunum Sağlığı Takip Uygulaması',
    description:
      'Spirometre cihazı ile solunum sağlığını ölçen ve analiz eden mobil uygulama.',
    technologies: ['Flutter', 'Firebase Realtime Database', 'Bluetooth LE'],
    color: 'from-emerald-500 to-teal-500',
    details: {
      longDescription:
        'Spiroble, solunum sağlığını ölçmek ve analiz etmek için tasarlanmış bir mobil uygulamadır. Spirometre cihazı ile entegre çalışarak kullanıcılara akciğer kapasitesi, nefes alma kalıpları ve diğer önemli metrikler hakkında detaylı veriler sağlar. Uygulama, solunum performansını izlemeye ve iyileştirmeye yardımcı olur. Kullanıcı dostu arayüzü, cihazlarla sorunsuz entegrasyonu ve kişiselleştirilmiş sağlık yönetimi öngörüleri sunar.',
      images: [
        'Ana ekran - Solunum ölçümleri ve istatistikler',
        'Ölçüm ekranı - Spirometre cihazı bağlantısı',
        'Grafik analiz - Nefes alma kalıpları',
        'Sağlık raporu - Detaylı solunum analizi',
        'Ayarlar - Kişiselleştirme ve cihaz yönetimi'
      ],
      screenshots: {
        flows: [
          {
            name: "Spiroble Uygulama Ekranları",
                screens: [
                  {
                    title: "Splash Screen",
                    description: "Uygulama başlangıç ekranı ve yükleme",
                    image: "/screenshots/spiroble/splashscreen.jpg",
                    icon: "🚀",
                    color: "from-emerald-500 to-teal-500",
                    bgPattern: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
                    tech: "Flutter, Dart, UI/UX"
                  },
                  {
                    title: "Ana Sayfa",
                    description: "Günlük solunum ölçümleri ve genel sağlık durumu",
                    image: "/screenshots/spiroble/anasayfa.jpg",
                    icon: "📊",
                    color: "from-blue-500 to-cyan-500",
                    bgPattern: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
                    tech: "Flutter, Dart, State Management"
                  },
                  {
                    title: "Bluetooth Bağlantısı",
                    description: "Spirometre cihazına Bluetooth ile bağlanma",
                    image: "/screenshots/spiroble/bluetooth.jpg",
                    icon: "🔗",
                    color: "from-purple-500 to-pink-500",
                    bgPattern: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
                    tech: "Bluetooth LE, Device Integration"
                  },
                  {
                    title: "Üfleme Testi",
                    description: "Gerçek zamanlı solunum ölçümü ve veri toplama",
                    image: "/screenshots/spiroble/üfleme.jpg",
                    icon: "💨",
                    color: "from-orange-500 to-red-500",
                    bgPattern: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
                    tech: "Real-time Data Processing, Sensors"
                  },
                  {
                    title: "Test Sonuçları",
                    description: "Detaylı solunum analizi ve sağlık raporları",
                    image: "/screenshots/spiroble/test sonuçları.jpg",
                    icon: "📋",
                    color: "from-indigo-500 to-purple-500",
                    bgPattern: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
                    tech: "Firebase Realtime Database, Data Visualization"
                  }
                ]
          }
        ]
      }
    },
  },
  {
    icon: Eye,
    slug: 'isaret-dili-ai-uygulamasi',
    title: 'Conversign - İşaret Dili AI Çevirici',
    description:
      'Yapay zeka ile işaret dilini gerçek zamanlı olarak sese dönüştüren mobil uygulama.',
    technologies: ['React Native', 'TensorFlow.js', 'OpenCV', 'Python', 'Firebase'],
    color: 'from-indigo-500 to-purple-500',
    details: {
      longDescription:
        'Conversign, işitme engelli bireylerin iletişimini kolaylaştıran devrim niteliğinde bir uygulama. Gelişmiş yapay zeka algoritmaları ile işaret dilini gerçek zamanlı olarak tanıyor ve sese dönüştürüyor. Computer vision, machine learning ve natural language processing teknolojilerini bir araya getirerek erişilebilir bir iletişim platformu sunuyor.',
      images: [
        'Kamera görüntüsü - İşaret dili tanıma',
        'AI işleme - Gerçek zamanlı analiz',
        'Ses çıkışı - Metin ve ses dönüşümü',
        'Eğitim modu - İşaret dili öğrenme',
        'Ayarlar - Kişiselleştirme seçenekleri'
      ],
      screenshots: {
        flows: [
          {
            name: "Conversign Uygulama Ekranları",
            screens: [
              {
                title: "Giriş Ekranı",
                description: "Kullanıcı girişi ve kimlik doğrulama",
                image: "/screenshots/signai/login.jpg",
                icon: "🔐",
                color: "from-blue-500 to-cyan-500",
                bgPattern: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
                tech: "React Native, Authentication, JWT"
              },
              {
                title: "Ana Sayfa",
                description: "İşaret dili tanıma ve çeviri arayüzü",
                image: "/screenshots/signai/homepage.jpg",
                icon: "🏠",
                color: "from-purple-500 to-pink-500",
                bgPattern: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
                tech: "TensorFlow.js, OpenCV, Real-time Processing"
              },
              {
                title: "Kullanım Kılavuzu",
                description: "İşaret dili öğrenme ve rehberlik",
                image: "/screenshots/signai/guide.jpg",
                icon: "📖",
                color: "from-green-500 to-emerald-500",
                bgPattern: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
                tech: "Interactive Tutorial, User Education"
              },
              {
                title: "Ayarlar",
                description: "Uygulama konfigürasyonu ve kişiselleştirme",
                image: "/screenshots/signai/settings.jpg",
                icon: "⚙️",
                color: "from-orange-500 to-red-500",
                bgPattern: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
                tech: "Settings Management, User Preferences"
              }
            ]
          }
        ]
      }
    },
  },
  {
    icon: Newspaper,
    slug: 'haberapron-web-sitesi',
    title: 'HaberApron - Havacılık Haber Platformu',
    description:
      'Modern, hızlı ve güvenilir havacılık odaklı haber platformu. React + TypeScript + Node.js + PostgreSQL teknoloji stack\'i ile geliştirilmiş profesyonel web uygulaması.',
    technologies: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Nginx'],
    color: 'from-blue-600 to-indigo-600',
    details: {
      longDescription:
        'HaberApron, havacılık sektörüne odaklanmış modern bir haber platformudur. React 18 + TypeScript + Vite ile geliştirilmiş frontend, Node.js + Express + TypeScript ile güçlendirilmiş backend ve PostgreSQL + Prisma ORM ile yönetilen veritabanı altyapısına sahiptir. Redis cache sistemi, Docker containerization, Nginx web server ve GitHub Actions CI/CD pipeline ile tam profesyonel bir web uygulamasıdır. Mobile-first responsive tasarım, WebP/AVIF görsel optimizasyonu, gelişmiş arama sistemi, yorum sistemi ve newsletter aboneliği gibi modern web özelliklerini içerir. Platform, havacılık haberlerini kategorize ederek kullanıcılara sunar ve admin paneli ile içerik yönetimi sağlar.',
      images: [
        'Ana sayfa - Modern haber listesi, kategoriler ve breaking news banner',
        'Makale sayfası - Rich text editor, yorum sistemi ve sosyal medya paylaşım',
        'Admin paneli - Kapsamlı içerik yönetimi ve kullanıcı yönetimi',
        'Arama sonuçları - Full-text search ve gelişmiş filtreleme sistemi',
        'Mobil responsive - Mobile-first tasarım ve touch-friendly arayüz'
      ],
      screenshots: {
        flows: [
          {
            name: "Kullanıcı Deneyimi",
            screens: [
              {
                title: "Ana Sayfa",
                description: "Modern tasarım ile havacılık haberleri, kategoriler ve son dakika haberleri. Breaking news banner ve kategori bazlı filtreleme özellikleri",
                image: "/screenshots/haberapron/Ekran görüntüsü 2025-10-21 192026.png",
                icon: "🏠",
                color: "from-blue-600 to-indigo-600",
                bgPattern: "bg-gradient-to-br from-blue-600/20 to-indigo-600/20",
                tech: "React 18, TypeScript, Tailwind CSS, Framer Motion"
              },
              {
                title: "Makale Sayfası",
                description: "Rich text editor ile zengin içerik, yorum sistemi ve sosyal medya paylaşım özellikleri. Email doğrulamalı yorum sistemi",
                image: "/screenshots/haberapron/Ekran görüntüsü 2025-10-21 192044.png",
                icon: "📰",
                color: "from-purple-600 to-pink-600",
                bgPattern: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
                tech: "Quill.js, React Hook Form, Yup Validation"
              },
              {
                title: "Arama Sonuçları",
                description: "Full-text search ve gelişmiş filtreleme sistemi. Kategori, tarih ve popülerlik bazlı sıralama özellikleri",
                image: "/screenshots/haberapron/Ekran görüntüsü 2025-10-21 192115.png",
                icon: "🔍",
                color: "from-green-600 to-emerald-600",
                bgPattern: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
                tech: "PostgreSQL Full-text Search, Advanced Filtering"
              }
            ]
          },
          {
            name: "Yönetim Paneli",
            screens: [
              {
                title: "Admin Dashboard",
                description: "Kapsamlı içerik yönetimi, kullanıcı yönetimi ve analitik paneli. Makale oluşturma, düzenleme ve yayınlama özellikleri",
                image: "/screenshots/haberapron/Ekran görüntüsü 2025-10-21 192101.png",
                icon: "⚙️",
                color: "from-orange-600 to-red-600",
                bgPattern: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
                tech: "Admin Panel, Content Management, User Management"
              },
              {
                title: "Mobil Responsive",
                description: "Mobile-first yaklaşım ile responsive tasarım. Tüm cihazlarda optimize edilmiş kullanıcı deneyimi ve touch-friendly arayüz",
                image: "/screenshots/haberapron/Ekran görüntüsü 2025-10-21 192132.png",
                icon: "📱",
                color: "from-teal-600 to-cyan-600",
                bgPattern: "bg-gradient-to-br from-teal-600/20 to-cyan-600/20",
                tech: "Responsive Design, Mobile-first, Progressive Web App"
              }
            ]
          }
        ]
      }
    },
  },
];
