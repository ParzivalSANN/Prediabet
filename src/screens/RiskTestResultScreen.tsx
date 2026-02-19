import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, Share2, Scale, Activity, Info, CheckCircle, ArrowRight } from 'lucide-react-native';
import Svg, { Circle, G } from 'react-native-svg';

export const RiskTestResultScreen = ({ navigation, route }: any) => {
    // You might pass score via route.params in the future
    const riskScore = 25; // 25% Low Risk (Mock)
    const riskLabel = "Low Risk";
    const riskColor = Colors.primary;

    // Donut Chart Calculations
    const size = 200;
    const strokeWidth = 20;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = riskScore / 100;
    const strokeDashoffset = circumference * (1 - progress);

    return (
        <ScreenBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeTab')} style={styles.iconBtn}>
                    <ChevronLeft color="#fff" size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Risk Analizi</Text>
                <TouchableOpacity style={styles.iconBtn}>
                    <Share2 color="#fff" size={20} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {/* Risk Chart Section */}
                <View style={styles.chartSection}>
                    <View style={styles.chartContainer}>
                        <Svg width={size} height={size}>
                            {/* Background Circle */}
                            <Circle
                                cx={center}
                                cy={center}
                                r={radius}
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth={strokeWidth}
                            />
                            {/* Progress Circle */}
                            <Circle
                                cx={center}
                                cy={center}
                                r={radius}
                                stroke={riskColor}
                                strokeWidth={strokeWidth}
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                rotation="-90"
                                origin={`${center}, ${center}`}
                            />
                        </Svg>
                        <View style={styles.chartTextContainer}>
                            <Text style={styles.scoreText}>{riskScore}%</Text>
                            <Text style={[styles.scoreLabel, { color: riskColor }]}>DÜŞÜK RİSK</Text>
                        </View>
                    </View>
                    <Text style={styles.chartDescription}>
                        Risk skorunuz optimal aralıkta. Mevcut yaşam tarzı alışkanlıklarınızı sürdürerek bu sonucu koruyun.
                    </Text>
                </View>

                {/* Detailed Breakdown */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Detaylı Analiz</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>BUGÜN GÜNCELLENDİ</Text>
                    </View>
                </View>

                <View style={styles.breakdownList}>
                    {/* Weight Management */}
                    <GlassCard style={styles.breakdownCard}>
                        <View style={styles.cardIconBox}>
                            <Scale color={Colors.primary} size={24} />
                        </View>
                        <View style={styles.cardText}>
                            <Text style={styles.cardTitle}>Kilo Yönetimi</Text>
                            <Text style={styles.cardSubtitle}>BMI: 22.4 (Optimal)</Text>
                        </View>
                        <CheckCircle color={Colors.accent.green} size={24} />
                    </GlassCard>

                    {/* Blood Sugar (Mock) */}
                    <GlassCard style={styles.breakdownCard}>
                        <View style={[styles.cardIconBox, { backgroundColor: 'rgba(245, 158, 11, 0.2)' }]}>
                            <Activity color="#f59e0b" size={24} />
                        </View>
                        <View style={styles.cardText}>
                            <Text style={styles.cardTitle}>Kan Şekeri Seviyeleri</Text>
                            <Text style={styles.cardSubtitle}>Açlık: 92 mg/dL</Text>
                        </View>
                        <Info color="#f59e0b" size={24} />
                    </GlassCard>

                    {/* Physical Activity */}
                    <GlassCard style={styles.breakdownCard}>
                        <View style={styles.cardIconBox}>
                            <Activity color={Colors.primary} size={24} />
                        </View>
                        <View style={styles.cardText}>
                            <Text style={styles.cardTitle}>Fiziksel Aktivite</Text>
                            <Text style={styles.cardSubtitle}>150+ dk aktif/hafta</Text>
                        </View>
                        <CheckCircle color={Colors.accent.green} size={24} />
                    </GlassCard>
                </View>

                {/* Insights Banner */}
                <GlassCard style={styles.insightBanner}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.bannerLabel}>HAFTALIK ÖNERİ</Text>
                        <Text style={styles.bannerTitle}>Lifli beslenmeye odaklanın</Text>
                        <Text style={styles.bannerText}>
                            Akşam yemeklerine bakliyat ve yeşil yapraklı sebzeler ekleyerek glikoz seviyelerini dengeleyin.
                        </Text>
                    </View>
                </GlassCard>

                {/* Action Button */}
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.actionButtonText}>Aksiyon Planımı Oluştur</Text>
                </TouchableOpacity>

            </ScrollView>
        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    chartSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    chartContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    chartTextContainer: {
        position: 'absolute',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
    scoreLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginTop: 4,
    },
    chartDescription: {
        textAlign: 'center',
        color: Colors.glass.textSecondary,
        fontSize: 14,
        lineHeight: 20,
        maxWidth: 280,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    badge: {
        backgroundColor: 'rgba(19, 127, 236, 0.2)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    breakdownList: {
        gap: 12,
    },
    breakdownCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 16,
        gap: 16,
    },
    cardIconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: 'rgba(19, 127, 236, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 2,
    },
    cardSubtitle: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
    },
    insightBanner: {
        marginTop: 24,
        padding: 0,
        borderRadius: 16,
        overflow: 'hidden',
        minHeight: 180,
        justifyContent: 'flex-end',
        backgroundColor: '#2d3748', // Fallback
    },
    bannerContent: {
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        // In a real app, you'd put an ImageBackground here
    },
    bannerLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 4,
        letterSpacing: 1,
    },
    bannerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    bannerText: {
        fontSize: 12,
        color: '#cbd5e1',
    },
    actionButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 30,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
