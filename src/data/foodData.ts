import { Colors } from '../constants/Colors';

export interface FoodItem {
    id: string;
    name: string;
    category: 'Sebzeler' | 'Meyveler' | 'Tahıllar' | 'Proteinler' | 'Süt Ürünleri' | 'Yağlar';
    calories: number;
    carbs: string;
    gi: number; // Glycemic Index
    desc: string;
    image: string;
    badge: 'Low GI' | 'Complex Carb' | 'Antioxidant' | 'Healthy Fats' | 'High Protein' | 'Calcium Rich';
    badgeColor: string;
    details?: {
        benefits: string[];
        portion: string;
        tips: string;
    };
}

export const FOOD_DATA: FoodItem[] = [
    {
        id: '1', name: 'Ispanak', category: 'Sebzeler', calories: 23, carbs: '3.6g', gi: 15,
        desc: 'Demir ve magnezyum açısından zengin yeşil yapraklı sebze.',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80',
        badge: 'Düşük GI', badgeColor: Colors.accent.green,
        details: {
            benefits: ['Demir açısından zengin', 'Kemik sağlığı için K Vitamini', 'Kan şekeri kontrolü için Magnezyum'],
            portion: '1 kupa (çiğ)',
            tips: 'Tadı etkilemeden besin değerini artırmak için omlet veya smoothielere ekleyin.'
        }
    },
    {
        id: '2', name: 'Kinoa', category: 'Tahıllar', calories: 120, carbs: '21g', gi: 53,
        desc: 'Tam protein ve yüksek lifli tahıl alternatifi.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
        badge: 'Kompleks Karb', badgeColor: Colors.primary,
        details: {
            benefits: ['Tam Protein', 'Yüksek Lif', 'Glutensiz'],
            portion: '1/2 kupa (pişmiş)',
            tips: 'Salatalar için taban veya pirinç alternatifi olarak kullanın.'
        }
    },
    {
        id: '3', name: 'Yaban Mersini', category: 'Meyveler', calories: 57, carbs: '14g', gi: 53,
        desc: 'Antioksidanlar ve vitaminlerle dolu.',
        image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&q=80',
        badge: 'Antioksidan', badgeColor: Colors.accent.purple,
        details: {
            benefits: ['Yüksek Antioksidan', 'İnsülin Duyarlılığını Artırır', 'Kalp Sağlığı'],
            portion: '1 kupa',
            tips: 'Yoğurt veya yulaf ezmesi üzerine eklemek için mükemmel.'
        }
    },
    {
        id: '4', name: 'Avokado', category: 'Yağlar', calories: 160, carbs: '8.5g', gi: 15,
        desc: 'Sağlıklı tekli doymamış yağ kaynağı.',
        image: 'https://images.unsplash.com/photo-1523049673856-42848c51a7d6?w=500&q=80',
        badge: 'Sağlıklı Yağlar', badgeColor: Colors.accent.orange,
        details: {
            benefits: ['Kalp Dostu Yağlar', 'Yüksek Lif (7g)', 'Potasyum zengini'],
            portion: '1/2 orta boy avokado',
            tips: 'Tam tahıllı ekmek üzerine sürün veya kremamsı tat için salatalara ekleyin.'
        }
    },
    {
        id: '5', name: 'Somon', category: 'Proteinler', calories: 208, carbs: '0g', gi: 0,
        desc: 'Omega-3 yağ asitleri açısından zengin yağlı balık.',
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=500&q=80',
        badge: 'Sağlıklı Yağlar', badgeColor: Colors.accent.orange,
        details: {
            benefits: ['Yüksek Omega-3', 'Harika Protein Kaynağı', 'Kalp ve Beyin Sağlığı'],
            portion: '85g (pişmiş)',
            tips: 'Basit ve sağlıklı bir akşam yemeği için limon ve dereotu ile fırınlayın.'
        }
    },
    {
        id: '6', name: 'Süzme Yoğurt', category: 'Süt Ürünleri', calories: 59, carbs: '3.6g', gi: 11,
        desc: 'Probiyotik zengini ve yüksek proteinli.',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
        badge: 'Kalsiyum Zengini', badgeColor: Colors.primary,
        details: {
            benefits: ['Bağırsak Sağlığı için Probiyotikler', 'Yüksek Protein', 'Kalsiyum'],
            portion: '1 kupa (sade, yağsız)',
            tips: 'Aromalı olanlardan kaçının; şekeri kontrol etmek için kendi meyvenizi ekleyin.'
        }
    },
    {
        id: '7', name: 'Badem', category: 'Yağlar', calories: 164, carbs: '6g', gi: 0,
        desc: 'Sağlıklı yağlar ve lif içeren kıtır atıştırmalık.',
        image: 'https://images.unsplash.com/photo-1508061253366-f7da98b096d1?w=500&q=80',
        badge: 'Sağlıklı Yağlar', badgeColor: Colors.accent.orange,
        details: {
            benefits: ['Magnezyum', 'E Vitamini', 'Tokluk Hissi'],
            portion: '28g (yaklaşık 23 adet)',
            tips: 'Acil açlık durumları için çantanızda küçük bir porsiyon bulundurun.'
        }
    },
    {
        id: '8', name: 'Brokoli', category: 'Sebzeler', calories: 55, carbs: '11g', gi: 15,
        desc: 'Kansere karşı savaşan özellikleriyle bilinen turpgil sebze.',
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&q=80',
        badge: 'Düşük GI', badgeColor: Colors.accent.green,
        details: {
            benefits: ['C & K Vitamini', 'Lif', 'Sülforafan'],
            portion: '1 kupa (doğranmış)',
            tips: 'En fazla besin değerini korumak için hafifçe buharda pişirin.'
        }
    },
    {
        id: '9', name: 'Tatlı Patates', category: 'Sebzeler', calories: 86, carbs: '20g', gi: 44,
        desc: 'Beyaz patatese göre daha düşük GI, A Vitamini zengini.',
        image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a7c19?w=500&q=80',
        badge: 'Kompleks Karb', badgeColor: Colors.primary,
        details: {
            benefits: ['A Vitamini (Beta Karoten)', 'Lif', 'Potasyum'],
            portion: '1 orta boy (haşlanmış)',
            tips: 'Haşlamak, fırınlamaya göre GI değerini düşürür.'
        }
    },
    {
        id: '10', name: 'Mercimek', category: 'Proteinler', calories: 116, carbs: '20g', gi: 32,
        desc: 'Kan şekeri için mükemmel bitkisel protein kaynağı.',
        image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?w=500&q=80',
        badge: 'Yüksek Protein', badgeColor: Colors.accent.teal,
        details: {
            benefits: ['Yüksek Lif', 'Bitkisel Protein', 'Demir'],
            portion: '1/2 kupa (pişmiş)',
            tips: 'Çorbalarda veya soğuk salatalarda harikadır.'
        }
    },
    {
        id: '11', name: 'Chia Tohumu', category: 'Yağlar', calories: 137, carbs: '12g', gi: 1,
        desc: 'Lif ve Omega-3 deposu minik tohumlar.',
        image: 'https://images.unsplash.com/photo-1629196525974-f2a99d556942?w=500&q=80',
        badge: 'Sağlıklı Yağlar', badgeColor: Colors.accent.orange,
        details: {
            benefits: ['Muazzam Lif İçeriği', 'Omega-3', 'Hidrasyon'],
            portion: '28g (2 yemek kaşığı)',
            tips: 'Chia pudingi yapın veya yulaf ezmesi üzerine serpin.'
        }
    },
    {
        id: '12', name: 'Yulaf', category: 'Tahıllar', calories: 68, carbs: '12g', gi: 55,
        desc: 'Kolesterolü düşürmeye yardımcı beta-glukan içerir.',
        image: 'https://images.unsplash.com/photo-1595180637311-6df798f090d8?w=500&q=80',
        badge: 'Kompleks Karb', badgeColor: Colors.primary,
        details: {
            benefits: ['Beta-glukan Lifi', 'Kalp Sağlığı', 'Sürdürülebilir Enerji'],
            portion: '1/2 kupa (pişmiş)',
            tips: 'Hazır çeşitler yerine çelik kesim veya ezme yulaf tercih edin.'
        }
    },
    {
        id: '13', name: 'Yumurta', category: 'Proteinler', calories: 78, carbs: '0.6g', gi: 0,
        desc: 'Yüksek kaliteli protein için standart.',
        image: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=500&q=80',
        badge: 'Yüksek Protein', badgeColor: Colors.accent.teal,
        details: {
            benefits: ['Tam Protein', 'Kolin', 'Lutein'],
            portion: '1 büyük yumurta',
            tips: 'Haşlanmış yumurtalar mükemmel taşınabilir atıştırmalıklardır.'
        }
    },
    {
        id: '14', name: 'Çilek', category: 'Meyveler', calories: 32, carbs: '7.7g', gi: 41,
        desc: 'Yüksek C Vitamini içeren düşük şekerli meyve.',
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80',
        badge: 'Antioksidan', badgeColor: Colors.accent.purple,
        details: {
            benefits: ['C Vitamini', 'Manganez', 'Anti-enflamatuar'],
            portion: '1 kupa (bütün)',
            tips: 'Tatlı krizlerini doğal yoldan bastırmak için yeterince tatlıdır.'
        }
    },
    {
        id: '15', name: 'Lor Peyniri', category: 'Süt Ürünleri', calories: 98, carbs: '3.4g', gi: 10,
        desc: 'Yüksek kazein proteini içeriği sizi daha uzun süre tok tutar.',
        image: 'https://images.unsplash.com/photo-1594911769666-88059c25330e?w=500&q=80',
        badge: 'Yüksek Protein', badgeColor: Colors.accent.teal,
        details: {
            benefits: ['Yavaş Sindirilen Protein', 'Kalsiyum', 'Tokluk Hissi'],
            portion: '1/2 kupa',
            tips: 'Meyve ile eşleştirin veya tuzlu yemeklerde kullanın.'
        }
    },
];
