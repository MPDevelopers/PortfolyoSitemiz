import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import LiquidEther from './LiquidEther';

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Fiyatlar nelerdir?",
      answer: "Projelerimizin fiyatları, karmaşıklık, süre ve gereksinimlere göre değişiklik gösterir. Temel web siteleri için 5.000₺'den başlayan paketlerimiz bulunmaktadır. E-ticaret siteleri ve özel uygulamalar için daha detaylı bir fiyatlandırma yapılır. Size özel teklif hazırlamak için bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Daha fazla saat ihtiyacım olursa ne olur?",
      answer: "Proje sürecinde ek gereksinimler ortaya çıkarsa, esnek bir yaklaşım sergileriz. Ek geliştirme saatleri için ayrı bir fiyatlandırma yapılır ve müşterimizle mutabakat sağlandıktan sonra çalışmalara devam edilir. Müşteri memnuniyeti bizim için önceliktir."
    },
    {
      question: "Bakım ücretleri var mı?",
      answer: "Evet, projelerinizin düzenli bakımı için aylık bakım paketlerimiz bulunmaktadır. Bu paketler güvenlik güncellemeleri, performans optimizasyonları, içerik güncellemeleri ve teknik destek içerir."
    },
    {
      question: "Sistem için dökümantasyon sağlıyor musunuz?",
      answer: "Kesinlikle! Projenizi teslim ettikten sonra, web sitenizi veya uygulamanızı nasıl yöneteceğiniz konusunda dökümantasyon hazırlıyoruz."
    },
    {
      question: "Daha sonra ek özellik talep edebilir miyim?",
      answer: "Tabii ki! Projeniz tamamlandıktan sonra bile yeni özellikler ekleyebiliriz. Mevcut altyapıyı bozmadan, ölçeklenebilir bir şekilde yeni özellikler geliştiriyoruz. Her ek özellik için ayrı bir teklif hazırlanır ve müşterimizle görüşülür."
    },
    
  ];

  return (
    <section id="faq" className="py-32 bg-slate-900/30 relative overflow-hidden">
      {/* LiquidEther Arkaplan */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          mouseForce={15}
          cursorSize={50}
          resolution={0.2}
          iterationsPoisson={16}
          iterationsViscous={16}
          BFECC={false}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.0}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Koyu overlay - içeriğin daha iyi okunması için */}
      <div className="absolute inset-0 bg-dark-900/30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              SSS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Sorularınız mı var? Cevaplarımız var! Web tasarım sürecimiz, hizmetlerimiz ve vizyonunuzu nasıl hayata geçirebileceğimiz hakkında daha fazla bilgi edinmek için SSS bölümümüzü keşfedin.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden relative hover:bg-white/10 transition-all duration-300"
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
                  
                  <button
                    onClick={() => toggleItem(index)}
                    className="relative z-10 w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-semibold text-white pr-4">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`relative z-10 overflow-hidden transition-all duration-300 ${
                      openItems.includes(index) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 p-8 max-w-2xl mx-auto relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Sorunuz mu var?
                </h3>
                <p className="text-gray-300 mb-6">
                  SSS bölümümüzde aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin!
                </p>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  İletişime Geç
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
