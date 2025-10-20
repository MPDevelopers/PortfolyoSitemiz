import { Smartphone, Globe, ShoppingCart, Heart, Users, Calendar, Eye, Mic, Brain } from 'lucide-react';

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
      ]
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
    icon: Eye,
    slug: 'isaret-dili-ai-uygulamasi',
    title: 'SignAI - İşaret Dili AI Çevirici',
    description:
      'Yapay zeka ile işaret dilini gerçek zamanlı olarak sese dönüştüren mobil uygulama.',
    technologies: ['React Native', 'TensorFlow.js', 'OpenCV', 'Python', 'Firebase'],
    color: 'from-indigo-500 to-purple-500',
    details: {
      longDescription:
        'SignAI, işitme engelli bireylerin iletişimini kolaylaştıran devrim niteliğinde bir uygulama. Gelişmiş yapay zeka algoritmaları ile işaret dilini gerçek zamanlı olarak tanıyor ve sese dönüştürüyor. Computer vision, machine learning ve natural language processing teknolojilerini bir araya getirerek erişilebilir bir iletişim platformu sunuyor.',
      images: [
        'Kamera görüntüsü - İşaret dili tanıma',
        'AI işleme - Gerçek zamanlı analiz',
        'Ses çıkışı - Metin ve ses dönüşümü',
        'Eğitim modu - İşaret dili öğrenme',
        'Ayarlar - Kişiselleştirme seçenekleri'
      ]
    },
  },
];
