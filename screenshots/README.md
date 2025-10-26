# Screenshots Klasörü

Bu klasör, proje detay sayfalarında gösterilecek mobil uygulama screenshot'larını içerir.

## Klasör Yapısı

```
public/screenshots/
├── AnlatmamLazım/          # AnlatmamLazım projesi screenshot'ları
│   ├── ui-design.jpg
│   ├── state-management.jpg
│   ├── chat.jpg
│   ├── api.jpg
│   ├── database.jpg
│   ├── auth.jpg
│   ├── cicd.jpg
│   ├── performance.jpg
│   └── monitoring.jpg
└── signai/              # SignAI projesi screenshot'ları
    ├── computer-vision.jpg
    ├── machine-learning.jpg
    ├── realtime-processing.jpg
    ├── camera-integration.jpg
    ├── audio-synthesis.jpg
    ├── accessibility.jpg
    ├── dataset-creation.jpg
    ├── model-training.jpg
    └── performance-optimization.jpg
```

## Screenshot Özellikleri

- **Format**: JPG veya PNG
- **Boyut**: Mobil cihaz ekranına uygun (yaklaşık 375x812px veya benzer)
- **Kalite**: Yüksek çözünürlük, net görüntü
- **İçerik**: Gerçek uygulama ekranları veya geliştirme sürecini gösteren görseller

## Nasıl Eklenir

1. Screenshot'ları ilgili klasöre koyun
2. Dosya adlarını yukarıdaki yapıya uygun şekilde adlandırın
3. Proje otomatik olarak screenshot'ları yükleyecektir

## Fallback

Eğer bir screenshot bulunamazsa, sistem otomatik olarak placeholder bir ekran gösterecektir.
