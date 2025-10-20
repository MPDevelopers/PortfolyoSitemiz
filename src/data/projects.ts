import { Smartphone, Globe, ShoppingCart, Heart, Users, Calendar, Eye, Mic, Brain, Activity } from 'lucide-react';

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
    icon: Smartphone,
    slug: 'e-ticaret-mobil-uygulamasi',
    title: 'E-Ticaret Mobil Uygulaması',
    description:
      'Kullanıcı dostu arayüz ve hızlı performans sunan, tam özellikli e-ticaret mobil uygulaması.',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    color: 'from-blue-500 to-cyan-500',
    details: {
      longDescription:
        'Gerçek zamanlı envanter, güvenli ödeme, kullanıcı profili ve bildirim desteği ile modern e-ticaret deneyimi.',
    },
  },
  {
    icon: Heart,
    slug: 'saglik-takip-platformu',
    title: 'MindConnect - Psikolog Buluşturma Platformu',
    description:
      'Psikologlar ile kullanıcıları buluşturan, güvenli mesajlaşma ile online terapi imkanı sunan mobil platform.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
    color: 'from-pink-500 to-rose-500',
    details: {
      longDescription:
        'MindConnect, ruh sağlığı alanında devrim yaratan bir platform. Kullanıcıların ihtiyaçlarına uygun psikologları bulmasını, güvenli bir ortamda mesajlaşarak terapi almasını sağlıyor. Hem Google Play Store hem de Apple App Store\'da yayında olan uygulama, binlerce kullanıcıya ulaşmış durumda.',
      images: [
        'Ana ekran - Psikolog arama ve filtreleme',
        'Psikolog profili - Detaylı bilgiler ve değerlendirmeler',
        'Mesajlaşma ekranı - Güvenli terapi sohbeti',
        'Randevu takvimi - Kolay planlama sistemi',
        'Profil yönetimi - Kişisel terapi geçmişi'
      ],
      screenshots: {
        flows: [
          {
            name: "Frontend Development",
            screens: [
              {
                title: "UI/UX Tasarım",
                description: "React Native ile modern ve kullanıcı dostu arayüz tasarımı",
                image: "/screenshots/mindconnect/ui-design.jpg",
                icon: "🎨",
                color: "from-blue-500 to-cyan-500",
                bgPattern: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
                tech: "React Native, TypeScript, Styled Components"
              },
              {
                title: "State Management",
                description: "Redux Toolkit ile global state yönetimi ve veri akışı",
                image: "/screenshots/mindconnect/state-management.jpg",
                icon: "🔄",
                color: "from-green-500 to-emerald-500",
                bgPattern: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
                tech: "Redux Toolkit, Context API, Async Thunk"
              },
              {
                title: "Real-time Chat",
                description: "Socket.io ile gerçek zamanlı mesajlaşma sistemi",
                image: "/screenshots/mindconnect/chat.jpg",
                icon: "💬",
                color: "from-purple-500 to-pink-500",
                bgPattern: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
                tech: "Socket.io, WebSocket, Event Handling"
              }
            ]
          },
          {
            name: "Backend Development",
            screens: [
              {
                title: "API Development",
                description: "Node.js ve Express ile RESTful API geliştirme",
                image: "/screenshots/mindconnect/api.jpg",
                icon: "⚙️",
                color: "from-indigo-500 to-blue-500",
                bgPattern: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
                tech: "Node.js, Express, JWT, Middleware"
              },
              {
                title: "Database Design",
                description: "MongoDB ile ölçeklenebilir veritabanı mimarisi",
                image: "/screenshots/mindconnect/database.jpg",
                icon: "🗄️",
                color: "from-emerald-500 to-teal-500",
                bgPattern: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
                tech: "MongoDB, Mongoose, Indexing, Aggregation"
              },
              {
                title: "Authentication",
                description: "Güvenli kullanıcı kimlik doğrulama ve yetkilendirme",
                image: "/screenshots/mindconnect/auth.jpg",
                icon: "🔐",
                color: "from-rose-500 to-pink-500",
                bgPattern: "bg-gradient-to-br from-rose-500/20 to-pink-500/20",
                tech: "JWT, bcrypt, OAuth, Role-based Access"
              }
            ]
          },
          {
            name: "DevOps & Deployment",
            screens: [
              {
                title: "CI/CD Pipeline",
                description: "GitHub Actions ile otomatik test ve deployment",
                image: "/screenshots/mindconnect/cicd.jpg",
                icon: "🚀",
                color: "from-amber-500 to-orange-500",
                bgPattern: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
                tech: "GitHub Actions, Docker, AWS, Heroku"
              },
              {
                title: "Performance Optimization",
                description: "Uygulama performansı ve hız optimizasyonu",
                image: "/screenshots/mindconnect/performance.jpg",
                icon: "⚡",
                color: "from-red-500 to-rose-500",
                bgPattern: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
                tech: "Code Splitting, Lazy Loading, Caching"
              },
              {
                title: "Monitoring & Analytics",
                description: "Uygulama izleme ve kullanıcı analitikleri",
                image: "/screenshots/mindconnect/monitoring.jpg",
                icon: "📊",
                color: "from-violet-500 to-purple-500",
                bgPattern: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
                tech: "Firebase Analytics, Sentry, Performance Monitoring"
              }
            ]
          }
        ]
      }
    },
  },
  {
    icon: Globe,
    slug: 'kurumsal-web-portali',
    title: 'Kurumsal Web Portalı',
    description:
      'Modern tasarım ve yüksek performanslı kurumsal web sitesi ve yönetim paneli.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: ShoppingCart,
    slug: 'restoran-siparis-sistemi',
    title: 'Restoran Sipariş Sistemi',
    description:
      'QR kod tabanlı menü ve sipariş yönetimi sunan dijital restoran çözümü.',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
    color: 'from-white to-red-500',
  },
  {
    icon: Users,
    slug: 'sosyal-networking-uygulamasi',
    title: 'Sosyal Networking Uygulaması',
    description:
      'Gerçek zamanlı mesajlaşma ve içerik paylaşımı özelliklerine sahip sosyal platform.',
    technologies: ['React Native', 'WebSocket', 'PostgreSQL'],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Calendar,
    slug: 'etkinlik-yonetim-sistemi',
    title: 'Etkinlik Yönetim Sistemi',
    description:
      'Etkinlik organizasyonu, bilet satışı ve katılımcı yönetimi için kapsamlı çözüm.',
    technologies: ['Flutter', 'Node.js', 'Stripe'],
    color: 'from-yellow-500 to-amber-500',
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
                title: "Ana Dashboard",
                description: "Günlük solunum ölçümleri ve genel sağlık durumu",
                image: "/screenshots/spiroble/dashboard.jpg",
                icon: "📊",
                color: "from-emerald-500 to-teal-500",
                bgPattern: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
                tech: "Flutter, Dart, State Management"
              },
              {
                title: "Spirometre Bağlantısı",
                description: "Bluetooth LE ile spirometre cihazına bağlanma",
                image: "/screenshots/spiroble/device-connection.jpg",
                icon: "🔗",
                color: "from-blue-500 to-cyan-500",
                bgPattern: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
                tech: "Bluetooth LE, Device Integration"
              },
              {
                title: "Ölçüm Ekranı",
                description: "Gerçek zamanlı solunum ölçümü ve veri toplama",
                image: "/screenshots/spiroble/measurement.jpg",
                icon: "📈",
                color: "from-purple-500 to-pink-500",
                bgPattern: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
                tech: "Real-time Data Processing, Sensors"
              },
              {
                title: "Analiz ve Raporlar",
                description: "Detaylı solunum analizi ve sağlık raporları",
                image: "/screenshots/spiroble/analysis.jpg",
                icon: "📋",
                color: "from-orange-500 to-red-500",
                bgPattern: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
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
];
