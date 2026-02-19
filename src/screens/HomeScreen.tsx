import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { CircularProgress } from '../components/CircularProgress';
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Bell, Footprints, Activity, Check, Moon, Scale, ArrowDown, ChevronRight } from 'lucide-react-native';

export const HomeScreen = ({ navigation }: any) => {
    const insets = useSafeAreaInsets();

    return (
        <ScreenBackground>
            <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 10, paddingBottom: 100 }]}>

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.profileSection}>
                        <View style={styles.profileImageContainer}>
                            <Image
                                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg-XqFPqGTVVR6-D_inRxiAWEYCO-xTz31o5mHgAtjVhL7PyXJafeH-Bhf8xXUk_dcOetGW3iyposmGyR_397PWGhSjxaMAot1mELjgbMaIeKlROUVxxQbq9TmRz2Q4UwiMWnMcNq0LmsCVSDFNrloHTc-OnEJaXBEYJFdTe-xnzoEm5clG7GHPTErhAhHWrw7PE-yS0D2PcjaIIAP5jvcWhX9HHBlT21S74VWxDwLxJjx64AGIINu-8XYnyiqtxrMNmfslehM6xg' }}
                                style={styles.profileImage}
                            />
                        </View>
                        <View>
                            <Text style={styles.headerLabel}>HEALTH PROFILE</Text>
                            <Text style={styles.headerTitle}>Hi, Alex</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.notifButton}>
                        <Bell color={Colors.glass.text} size={22} />
                    </TouchableOpacity>
                </View>

                {/* Step Counter Hero */}
                <TouchableOpacity onPress={() => navigation.navigate('Tracking')}>
                    <View style={styles.heroSection}>
                        <CircularProgress current={6420} target={10000} size={250} strokeWidth={20} />
                        <View style={styles.stepInfoAbsolute}>
                            <Footprints color={Colors.primary} size={32} style={{ marginBottom: 5 }} />
                            <Text style={styles.stepCount}>6,420</Text>
                            <Text style={styles.stepLabel}>STEPS TODAY</Text>
                            <View style={styles.goalBadge}>
                                <Text style={styles.goalText}>GOAL: 10k</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Risk Score Card */}
                <GlassCard style={styles.riskCard} onPress={() => navigation.navigate('RiskTest')}>
                    <View style={styles.riskContent}>
                        <View>
                            <Text style={styles.cardLabel}>PREDIABETES RISK</Text>
                            <View style={styles.riskRow}>
                                <Text style={styles.riskValue}>24%</Text>
                                <View style={styles.trendBadge}>
                                    <ArrowDown color={Colors.accent.green} size={14} />
                                    <Text style={styles.trendText}>2%</Text>
                                </View>
                            </View>
                            <Text style={styles.lastCheck}>Last check: 2 days ago</Text>
                        </View>
                        <View style={styles.riskGauge}>
                            {/* Simplified visual gauge representation */}
                            <View style={styles.gaugeCircle}>
                                <Text style={styles.gaugeText}>LOW</Text>
                            </View>
                        </View>
                    </View>
                </GlassCard>

                {/* Quick Tools */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Tools & Guides</Text>
                </View>
                <View style={styles.gridContainer}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('BMICalculator')}>
                        <GlassCard style={styles.toolCard}>
                            <Scale color={Colors.accent.orange} size={24} />
                            <Text style={styles.toolTitle}>BMI Calc</Text>
                        </GlassCard>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('FoodGuide')}>
                        <GlassCard style={styles.toolCard}>
                            <Text style={{ fontSize: 20 }}>🍎</Text>
                            <Text style={styles.toolTitle}>Food Guide</Text>
                        </GlassCard>
                    </TouchableOpacity>
                </View>

                {/* Daily Tasks */}
                <View style={[styles.sectionHeader, { marginTop: 24 }]}>
                    <Text style={styles.sectionTitle}>Daily Tasks</Text>
                    <Text style={styles.progressText}>2/4 Done</Text>
                </View>

                <View style={styles.taskList}>
                    {/* Completed Task */}
                    <GlassCard style={[styles.taskCard, styles.taskCompleted]}>
                        <View style={styles.taskLeft}>
                            <View style={styles.taskIconBg}><Text>🥣</Text></View>
                            <View>
                                <Text style={[styles.taskTitle, styles.strikeThrough]}>Log Breakfast</Text>
                                <Text style={styles.taskSub}>420 kcal • 15g Fiber</Text>
                            </View>
                        </View>
                        <View style={styles.checkCircle}>
                            <Check color="white" size={14} />
                        </View>
                    </GlassCard>

                    {/* Active Task */}
                    <GlassCard style={[styles.taskCard, styles.taskActive]}>
                        <View style={styles.taskLeft}>
                            <View style={[styles.taskIconBg, { backgroundColor: 'rgba(19, 127, 236, 0.1)' }]}><Activity color={Colors.primary} size={20} /></View>
                            <View>
                                <Text style={styles.taskTitle}>15-min Post-meal Walk</Text>
                                <Text style={[styles.taskSub, { color: Colors.primary }]}>Earn +50 XP</Text>
                            </View>
                        </View>
                        <View style={styles.emptyCircle} />
                    </GlassCard>
                </View>

                {/* Metrics Grid */}
                <View style={styles.gridContainer}>
                    <GlassCard style={styles.metricCard}>
                        <View style={styles.metricHeader}>
                            <Moon color="#818cf8" size={24} />
                            <View style={styles.metricBadge}>
                                <Text style={styles.metricBadgeText}>GOOD</Text>
                            </View>
                        </View>
                        <Text style={styles.metricValue}>7h 20m</Text>
                        <Text style={styles.metricLabel}>SLEEP QUALITY</Text>
                    </GlassCard>

                    <GlassCard style={styles.metricCard}>
                        <View style={styles.metricHeader}>
                            <Scale color="#fdba74" size={24} />
                            <View style={[styles.metricBadge, { backgroundColor: 'rgba(253, 186, 116, 0.1)' }]}>
                                <Text style={[styles.metricBadgeText, { color: '#fdba74' }]}>-1.2KG</Text>
                            </View>
                        </View>
                        <Text style={styles.metricValue}>84.5 <Text style={styles.unitText}>kg</Text></Text>
                        <Text style={styles.metricLabel}>BODY WEIGHT</Text>
                    </GlassCard>
                </View>

            </ScrollView>
        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        paddingHorizontal: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    profileImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgba(19, 127, 236, 0.3)',
        padding: 2,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    headerLabel: {
        fontSize: 10,
        color: Colors.glass.textSecondary,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    headerTitle: {
        fontSize: 16,
        color: Colors.glass.text,
        fontWeight: 'bold',
    },
    notifButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    heroSection: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        height: 300,
    },
    stepInfoAbsolute: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepCount: {
        fontSize: 42,
        fontWeight: '800', // extra bold
        color: Colors.glass.text,
        letterSpacing: -1,
    },
    stepLabel: {
        fontSize: 10,
        color: Colors.glass.textSecondary,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginTop: 4,
    },
    goalBadge: {
        marginTop: 8,
        backgroundColor: 'rgba(19, 127, 236, 0.2)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(19, 127, 236, 0.3)',
    },
    goalText: {
        color: Colors.primary,
        fontSize: 10,
        fontWeight: 'bold',
    },
    riskCard: {
        padding: 20,
        marginBottom: 24,
    },
    riskContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardLabel: {
        color: Colors.glass.textSecondary,
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: 4,
    },
    riskRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 8,
    },
    riskValue: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    trendBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    trendText: {
        color: Colors.accent.green,
        fontSize: 12,
        fontWeight: 'bold',
    },
    lastCheck: {
        fontSize: 11,
        color: Colors.glass.textSecondary,
        marginTop: 4,
    },
    riskGauge: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed', // Representing the gauge chart simply
    },
    gaugeCircle: {
        // Inner circle stuff
    },
    gaugeText: {
        color: Colors.primary,
        fontSize: 10,
        fontWeight: 'bold',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    progressText: {
        fontSize: 12,
        color: Colors.primary,
        fontWeight: 'bold',
        backgroundColor: 'rgba(19, 127, 236, 0.1)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    taskList: {
        gap: 12,
        marginBottom: 24,
    },
    taskCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    taskCompleted: {
        opacity: 0.6,
    },
    taskActive: {
        borderLeftWidth: 4,
        borderLeftColor: Colors.primary,
    },
    taskLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    taskIconBg: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(19, 127, 236, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: Colors.glass.text,
    },
    strikeThrough: {
        textDecorationLine: 'line-through',
        color: Colors.glass.textSecondary,
    },
    taskSub: {
        fontSize: 10,
        color: Colors.glass.textSecondary,
    },
    checkCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.slate[700],
    },
    gridContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    metricCard: {
        flex: 1,
        padding: 16,
    },
    metricHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    metricBadge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor: 'rgba(129, 140, 248, 0.1)',
    },
    metricBadgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#818cf8',
    },
    metricValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    unitText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: Colors.glass.textSecondary,
    },
    metricLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.glass.textSecondary,
        marginTop: 4,
        letterSpacing: 1,
    },
    toolCard: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    toolTitle: {
        color: Colors.glass.text,
        fontWeight: 'bold',
        fontSize: 12,
    },
});
