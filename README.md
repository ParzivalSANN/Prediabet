# PrediaBet 🩸

**PrediaBet**, pre-diyabet riskini değerlendirmek, sağlıklı yaşam alışkanlıklarını takip etmek ve kullanıcıları diyabet konusunda bilinçlendirmek için tasarlanmış modern bir mobil uygulamadır.

![PrediaBet Banner](https://via.placeholder.com/1200x600/0f172a/38bdf8?text=PrediaBet+Mobile+App)

## 🌟 Proje Hakkında

PrediaBet, kullanıcıların sağlık verilerini takip etmelerine, risk analizlerini yapmalarına ve beslenme alışkanlıklarını düzenlemelerine yardımcı olur. Uygulama, **Dark Glassmorphism** (Koyu Cam Efekti) tasarım diliyle modern, şık ve göz yormayan bir kullanıcı deneyimi sunar.

## 🚀 Özellikler

### 1. Kimlik Doğrulama (Authentication)
*   **Giriş Ekranı**: Neon efektli logo, mesh gradient arka plan ve cam efektli giriş kartı.
*   **Simüle Edilmiş Giriş**: Backend olmamasına rağmen, kullanıcı girişi hissi veren akıcı geçişler.

### 2. Ana Sayfa (Dashboard)
*   **Adım Sayar**: Dairesel ilerleme çubuğu ile günlük adım hedefi takibi.
*   **Risk Özeti**: Anlık FINDRISK skoru ve trend göstergesi.
*   **Günlük Görevler**: Su içme, egzersiz ve öğün takibi gibi interaktif görev listesi.
*   **Sağlık Metrikleri**: Uyku kalitesi ve kilo takibi kartları.

### 3. FINDRISK Diyabet Riski Testi
*   **8 Soruluk Bilimsel Test**: Yaş, BKİ, bel çevresi, aktivite düzeyi vb. kriterlere dayalı tam ölçekli test.
*   **Dinamik Sonuç Ekranı**:
    *   **Donut Grafik**: Risk seviyesini görselleştiren animasyonlu grafik.
    *   **Detaylı Analiz**: Kilo, kan şekeri ve aktivite bazlı alt kırılımlar.
    *   **Haftalık Öneri**: Kişiye özel sağlık tavsiyeleri.

### 4. Sağlık Araçları
*   **BKİ Hesaplayıcı**: Boy ve kilo ile Vücut Kitle İndeksi hesabı, geçmiş kayıtların listelenmesi (History) ve silme özellikleri.
*   **Besin Rehberi**: Arama özellikli, Glisemik İndeks (GI) ve Kalori değerlerini içeren kapsamlı besin veritabanı.
*   **Adım Geçmişi (Tracking)**: Haftalık ve aylık adım verilerini gösteren çubuk grafikler (Bar Charts).

### 5. Profil ve Ayarlar
*   **Sağlık Özeti**: Glikoz, HbA1c ve son aktivitelerin özet tablosu.
*   **Ayarlar Modülü**:
    *   **Tema Yönetimi**: *Dark Mode* optimizasyonu bilgilendirmesi.
    *   **Hesap Yönetimi**: Simüle edilmiş "Hesap Silme" ve veri temizleme fonksiyonları.
*   **Tıbbi Kayıtlar**: SSS, İletişim ve Hakkında sayfalarına erişim.

### 6. Destek Ekranları
*   **S.S.S. (FAQ)**: Akordiyon yapısında sıkça sorulan sorular.
*   **İletişim**: Şık tasarımlı iletişim formu ve harita entegrasyonu (görsel).

## 🛠 Kullanılan Teknolojiler

Bu proje aşağıdaki modern teknolojilerle geliştirilmiştir:

*   **React Native (Expo SDK 52)**: Cross-platform mobil geliştirme.
*   **TypeScript**: Tip güvenliği ve ölçeklenebilir kod yapısı.
*   **React Navigation**:
    *   `Native Stack Navigator`: Sayfalar arası geçişler.
    *   `Bottom Tab Navigator`: Ana menü navigasyonu.
*   **UI/UX Kütüphaneleri**:
    *   `expo-blur`: Glassmorphism efektleri için.
    *   `expo-linear-gradient`: Mesh gradient arka planlar için.
    *   `lucide-react-native`: Modern ve tutarlı ikon seti.
    *   `react-native-svg`: Grafikler ve görselleştirmeler için.

## 🎨 Tasarım Dili

Proje, **Premium Dark UI** prensiplerine sadık kalınarak tasarlanmıştır:
*   **Renk Paleti**: Derin maviler, neon vurgular (`#137fec`) ve koyu gri tonlar.
*   **Glassmorphism**: Arka planı bulanıklaştıran yarı saydam kartlar.
*   **Mesh Gradients**: Statik olmayan, derinlik hissi veren arka plan geçişleri.

## 📥 Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

1.  Repoyu klonlayın:
    ```bash
    git clone https://github.com/ParzivalSANN/Prediabet.git
    cd PrediaBet
    ```

2.  Bağımlılıkları yükleyin:
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  Uygulamayı başlatın:
    ```bash
    npx expo start
    ```

4.  Mobil cihazınızda **Expo Go** uygulaması ile QR kodu taratın veya emülatörde çalıştırın.

## 📱 Ekran Görüntüleri

| Giriş Ekranı | Ana Sayfa | Risk Testi |
|:---:|:---:|:---:|
| ![Login](public/ss-login.png) | ![Home](public/ss-home.png) | ![Risk](public/ss-risk.png) |

*(Not: Ekran görüntüleri temsilidir, uygulamayı çalıştırarak canlı deneyimleyebilirsiniz.)*

---

**Geliştirici**: [ParzivalSANN](https://github.com/ParzivalSANN)
**Lisans**: MIT
