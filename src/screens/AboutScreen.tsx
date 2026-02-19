import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ArrowLeft, Globe, Mail, Phone, ExternalLink } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export const AboutScreen = ({ navigation }: any) => {

    const handleLink = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    return (
        <ScreenBackground>
            <ScrollView contentContainerStyle={styles.content}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                        <ArrowLeft color={Colors.glass.text} size={24} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Hakkımızda</Text>
                    <View style={{ width: 40 }} />
                </View>

                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>PREDIABET</Text>
                        <View style={styles.versionBadge}>
                            <Text style={styles.versionText}>v2.4.1</Text>
                        </View>
                    </View>
                    <Text style={styles.tagline}>Sağlıklı Bir Gelecek İçin İlk Adım</Text>
                </View>

                {/* Main Content */}
                <View style={styles.sectionContainer}>
                    <GlassCard style={styles.infoCard}>
                        <Text style={styles.cardTitle}>Biz Kimiz?</Text>
                        <Text style={styles.cardText}>
                            PrediaBet, prediyabet riski taşıyan bireylerin yaşam kalitesini artırmak ve Tip-2 diyabet gelişimini önlemek amacıyla geliştirilmiş kapsamlı bir mobil sağlık asistanıdır.
                        </Text>
                    </GlassCard>

                    <GlassCard style={styles.infoCard}>
                        <Text style={styles.cardTitle}>Misyonumuz</Text>
                        <Text style={styles.cardText}>
                            Kullanıcılarımıza bilimsel veriler ışığında kişiselleştirilmiş beslenme ve egzersiz rehberliği sunarak, sağlıklı yaşam alışkanlıkları kazanmalarını sağlamak.
                        </Text>
                    </GlassCard>

                    <GlassCard style={styles.infoCard}>
                        <Text style={styles.cardTitle}>Vizyonumuz</Text>
                        <Text style={styles.cardText}>
                            Teknolojinin gücünü kullanarak diyabetle mücadelede toplum bilincini artırmak ve önleyici sağlık hizmetlerinde lider bir çözüm ortağı olmak.
                        </Text>
                    </GlassCard>
                </View>

                {/* Contact Section */}
                <Text style={styles.sectionHeader}>İletişim & Destek</Text>
                <GlassCard style={styles.contactCard}>
                    <TouchableOpacity style={styles.contactRow} onPress={() => handleLink('mailto:info@prediabet.com')}>
                        <View style={styles.contactIcon}>
                            <Mail color={Colors.primary} size={20} />
                        </View>
                        <Text style={styles.contactText}>info@prediabet.com</Text>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.contactRow} onPress={() => handleLink('tel:+905551234567')}>
                        <View style={styles.contactIcon}>
                            <Phone color={Colors.accent.green} size={20} />
                        </View>
                        <Text style={styles.contactText}>+90 555 123 45 67</Text>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.contactRow} onPress={() => handleLink('https://prediabet.com')}>
                        <View style={styles.contactIcon}>
                            <Globe color={Colors.accent.orange} size={20} />
                        </View>
                        <Text style={styles.contactText}>www.prediabet.com</Text>
                        <ExternalLink color={Colors.glass.textSecondary} size={16} style={{ marginLeft: 'auto' }} />
                    </TouchableOpacity>
                </GlassCard>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.copyright}>© 2024 PrediaBet Sağlık Teknolojileri A.Ş.</Text>
                    <Text style={styles.rights}>Tüm Hakları Saklıdır.</Text>
                </View>

            </ScrollView>
        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    content: {
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    headerTitle: {
        fontSize: 20,
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
    heroSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    logoText: {
        fontSize: 32,
        fontWeight: '900',
        color: '#fff',
        letterSpacing: 2,
    },
    versionBadge: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    versionText: {
        fontSize: 10,
        color: Colors.glass.textSecondary,
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: '500',
        letterSpacing: 1,
    },
    sectionContainer: {
        gap: 16,
        marginBottom: 32,
    },
    infoCard: {
        padding: 20,
        borderRadius: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    cardText: {
        fontSize: 14,
        color: Colors.glass.textSecondary,
        lineHeight: 22,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.glass.textSecondary,
        marginBottom: 12,
        marginLeft: 4,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    contactCard: {
        padding: 0,
        borderRadius: 16,
        marginBottom: 40,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 16,
    },
    contactIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactText: {
        fontSize: 14,
        color: Colors.glass.text,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.05)',
        marginLeft: 68,
    },
    footer: {
        alignItems: 'center',
        gap: 4,
        opacity: 0.5,
    },
    copyright: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
    },
    rights: {
        fontSize: 10,
        color: Colors.glass.textSecondary,
    },
});
