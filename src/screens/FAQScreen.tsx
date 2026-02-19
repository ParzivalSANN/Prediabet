import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQS = [
    {
        q: "1- Kan şekerinizi evde ölçebileceğinizi biliyor musunuz?",
        a: "Cevap- Kan şekerinizi glukometre ile ev ortamında ölçebilirsiniz. Yaklaşık 5 saniye içerisinde dijital alanda sonuç görülmektedir. Kan şekeri ölçerken ilk gelen kanı pamukla silmeli devamında gelen kanı ölçüm için kullanmalısınız."
    },
    {
        q: "2- Prediyabet (gizli şeker) tehlikeli bir hastalık mıdır?",
        a: "Cevap- Kontrol altına alındıktan sonra prediyabet tehlikeli bir hastalık değildir. Hastalığı kontrol altında tutmanın bir diğer avantajı diyabete geçiş sürecinin önlenerek hastalık riskinin düşürülmesidir."
    },
    {
        q: "3- Prediyabeti (gizli şeker) nasıl kontrol altına alabilirim?",
        a: "Cevap- Hastalığın kontrol altında tutulması sağlıklı yaşam biçimi davranışlarına uyum gösterme ile mümkündür. Düzenli egzersiz, dengeli beslenme ve kilo kontrolü en önemli faktörlerdir."
    },
    {
        q: "4- Hangi sıklıkla doktora gitmeliyim?",
        a: "Cevap- Prediyabet tanısı aldıysanız, doktorunuzun önerdiği periyotlarda (genellikle 3-6 ayda bir) kontrollerinizi yaptırmalı ve HbA1c değerlerinizi takip etmelisiniz."
    }
];

export const FAQScreen = ({ navigation }: any) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleExpand = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <ScreenBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                    <ChevronLeft color={Colors.glass.text} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>S.S.S.</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {FAQS.map((item, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <TouchableOpacity key={index} activeOpacity={0.9} onPress={() => toggleExpand(index)}>
                            <GlassCard style={styles.faqCard}>
                                <View style={styles.faqHeader}>
                                    <Text style={styles.questionText}>{item.q}</Text>
                                    {isExpanded ? <ChevronUp color={Colors.primary} size={20} /> : <ChevronDown color={Colors.glass.textSecondary} size={20} />}
                                </View>
                                {isExpanded && (
                                    <View style={styles.answerContainer}>
                                        <Text style={styles.answerText}>{item.a}</Text>
                                    </View>
                                )}
                            </GlassCard>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 24,
        gap: 16,
    },
    faqCard: {
        padding: 16,
        borderRadius: 16,
    },
    faqHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 12,
    },
    questionText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.glass.text,
        flex: 1,
        lineHeight: 20,
    },
    answerContainer: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)',
    },
    answerText: {
        fontSize: 14,
        color: Colors.glass.textSecondary,
        lineHeight: 22,
    },
});
