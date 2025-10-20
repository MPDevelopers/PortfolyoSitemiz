import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Gönderiliyor...' });

    try {
      if (!supabase) {
        throw new Error('Supabase yapılandırılmadı');
      }
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus({ type: 'success', message: 'Mesajınız başarıyla gönderildi!' });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      });
      console.error('Error submitting form:', error);
    }
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              İletişim
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Projeleriniz için bizimle iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hadi Konuşalım
                </h3>
                <p className="text-dark-300 leading-relaxed mb-6">
                  Projeniz için profesyonel destek mi arıyorsunuz? Size özel
                  çözümler sunmak için buradayız. Mesajınızı bırakın, en kısa
                  sürede geri dönüş yapalım.
                </p>

                <div className="flex items-center space-x-3 text-dark-300">
                  <Mail className="w-5 h-5 text-white" />
                  <a
                    href="mailto:mpdevelopers@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    mpdevelopers@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Sosyal Medya
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-dark-800 hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-dark-900" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              {status.type !== 'idle' && (
                <div
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-900/50 text-green-300'
                      : status.type === 'error'
                      ? 'bg-red-900/50 text-red-300'
                      : 'bg-dark-800 text-dark-300'
                  }`}
                >
                  {status.type === 'success' && (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === 'loading' || !supabase}
                className="w-full px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 disabled:bg-transparent disabled:cursor-not-allowed font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2"
              >
                <span>
                  {!supabase
                    ? 'Çevrimdışı: Supabase yapılandırılmadı'
                    : status.type === 'loading'
                    ? 'Gönderiliyor...'
                    : 'Mesaj Gönder'}
                </span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
