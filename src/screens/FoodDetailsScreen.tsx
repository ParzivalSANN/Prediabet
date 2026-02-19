import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, Heart, Share2, Flame, Scale, Activity } from 'lucide-react-native';
import { FoodItem } from '../data/foodData';

const { width } = Dimensions.get('window');

export const FoodDetailsScreen = ({ route, navigation }: any) => {
    const { item } = route.params as { item: FoodItem };

    return (
        <ScreenBackground>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
                {/* Hero Image Section */}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

                    {/* Header Overlay */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.iconBtn}
                        >
                            <ChevronLeft color="#fff" size={24} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <TouchableOpacity style={styles.iconBtn}>
                                <Share2 color="#fff" size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconBtn}>
                                <Heart color={Colors.accent.red} size={20} fill={Colors.accent.red} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Badge Overlay */}
                    <View style={styles.badgeContainer}>
                        <View style={[styles.badge, { backgroundColor: item.badgeColor }]}>
                            <Text style={styles.badgeText}>{item.badge}</Text>
                        </View>
                        <View style={[styles.badge, { backgroundColor: 'rgba(0,0,0,0.6)' }]}>
                            <Text style={[styles.badgeText, { color: '#fff' }]}>{item.category}</Text>
                        </View>
                    </View>
                </View>

                {/* Content Section */}
                <View style={styles.content}>
                    <GlassCard style={styles.mainCard}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>{item.desc}</Text>

                        {/* Stats Row */}
                        <View style={styles.statsRow}>
                            <View style={styles.statItem}>
                                <Flame color={Colors.accent.orange} size={24} />
                                <Text style={styles.statValue}>{item.calories}</Text>
                                <Text style={styles.statLabel}>Kcal</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.statItem}>
                                <Scale color={Colors.accent.teal} size={24} />
                                <Text style={styles.statValue}>{item.carbs}</Text>
                                <Text style={styles.statLabel}>Karb</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.statItem}>
                                <Activity color={Colors.primary} size={24} />
                                <Text style={styles.statValue}>{item.gi}</Text>
                                <Text style={styles.statLabel}>GI İndeksi</Text>
                            </View>
                        </View>
                    </GlassCard>

                    {item.details && (
                        <>
                            {/* Benefits */}
                            <Text style={styles.sectionTitle}>Sağlık Faydaları</Text>
                            <View style={styles.benefitsList}>
                                {item.details.benefits.map((benefit, index) => (
                                    <GlassCard key={index} style={styles.benefitCard}>
                                        <View style={styles.bullet} />
                                        <Text style={styles.benefitText}>{benefit}</Text>
                                    </GlassCard>
                                ))}
                            </View>

                            {/* Tips */}
                            <Text style={styles.sectionTitle}>Diyetisyen Tavsiyesi</Text>
                            <GlassCard style={styles.tipCard}>
                                <Text style={styles.tipText}>"{item.details.tips}"</Text>
                            </GlassCard>
                        </>
                    )}

                </View>
            </ScrollView>
        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: width,
        height: 300,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    header: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    badgeContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        flexDirection: 'row',
        gap: 8,
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    badgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
    },
    content: {
        padding: 20,
        marginTop: -30, // Overlap effect
    },
    mainCard: {
        padding: 24,
        borderRadius: 24,
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: Colors.glass.textSecondary,
        lineHeight: 20,
        marginBottom: 24,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)',
    },
    statItem: {
        alignItems: 'center',
        gap: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    statLabel: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
    },
    divider: {
        width: 1,
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
        marginLeft: 4,
    },
    benefitsList: {
        gap: 8,
        marginBottom: 24,
    },
    benefitCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.03)',
        gap: 12,
    },
    bullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.primary,
    },
    benefitText: {
        color: Colors.glass.text,
        fontSize: 14,
    },
    tipCard: {
        padding: 20,
        backgroundColor: 'rgba(19, 127, 236, 0.1)',
        borderColor: 'rgba(19, 127, 236, 0.2)',
    },
    tipText: {
        color: '#fff',
        fontStyle: 'italic',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 22,
    },
});
