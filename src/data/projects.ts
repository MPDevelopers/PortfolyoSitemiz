import { Smartphone, Globe, ShoppingCart, Heart, Users, Calendar } from 'lucide-react';

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
    title: 'Sağlık Takip Platformu',
    description:
      'Kişisel sağlık verilerini takip eden, doktorlarla iletişim kurmayı sağlayan kapsamlı platform.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    color: 'from-pink-500 to-rose-500',
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
];
