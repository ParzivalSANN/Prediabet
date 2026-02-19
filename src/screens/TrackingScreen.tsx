import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, Share, Zap, Award, TrendingUp } from 'lucide-react-native';

export const TrackingScreen = ({ navigation }: any) => {
    return (
        <ScreenBackground>
            <ScrollView contentContainerStyle={styles.content}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                        <ChevronLeft color={Colors.glass.text} size={24} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Step History</Text>
                    <TouchableOpacity style={styles.iconBtn}>
                        <Share color={Colors.glass.text} size={20} />
                    </TouchableOpacity>
                </View>

                {/* Time Selector */}
                <View style={styles.selector}>
                    <Text style={styles.selText}>Day</Text>
                    <View style={styles.selActive}>
                        <Text style={styles.selTextActive}>Week</Text>
                    </View>
                    <Text style={styles.selText}>Month</Text>
                    <Text style={styles.selText}>Year</Text>
                </View>

                {/* Hero Chart Card */}
                <GlassCard style={styles.chartCard}>
                    <View style={styles.chartHeader}>
                        <View>
                            <Text style={styles.chartLabel}>Total Steps</Text>
                            <Text style={styles.chartValue}>58,432</Text>
                            <Text style={styles.chartSub}><Text style={{ color: Colors.accent.green }}>+12%</Text> vs last week</Text>
                        </View>
                        <View style={styles.dateBadge}>
                            <Text style={styles.dateText}>Oct 14 - 20</Text>
                        </View>
                    </View>

                    {/* Bar Chart Visualization */}
                    <View style={styles.chartArea}>
                        {/* Grid Lines mockup */}
                        <View style={styles.gridLine} />
                        <View style={[styles.gridLine, { top: '33%' }]} />
                        <View style={[styles.gridLine, { top: '66%' }]} />

                        {/* Bars */}
                        <View style={styles.barsRow}>
                            <ChartBar day="Mon" height="35%" />
                            <ChartBar day="Tue" height="55%" />
                            <ChartBar day="Wed" height="75%" />
                            <ChartBar day="Thu" height="95%" active />
                            <ChartBar day="Fri" height="60%" />
                            <ChartBar day="Sat" height="40%" />
                            <ChartBar day="Sun" height="85%" />
                        </View>
                    </View>
                </GlassCard>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    <GlassCard style={styles.statItem}>
                        <Text style={styles.statLabel}>Daily Avg</Text>
                        <Text style={styles.statNum}>8,347</Text>
                        <Text style={styles.statUnit}>STEPS / DAY</Text>
                    </GlassCard>
                    <GlassCard style={styles.statItem}>
                        <Text style={styles.statLabel}>Distance</Text>
                        <Text style={styles.statNum}>42.5</Text>
                        <Text style={styles.statUnit}>TOTAL KM</Text>
                    </GlassCard>
                </View>

                {/* Insight */}
                <View style={styles.insightCard}>
                    <Zap color={Colors.primary} size={24} style={{ marginBottom: 8 }} />
                    <Text style={styles.insightTitle}>Keep it up!</Text>
                    <Text style={styles.insightText}>You hit your daily goal 5 times this week. Maintaining this consistency is key.</Text>
                </View>

                {/* Recent Milestones */}
                <View style={styles.milestones}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Milestones</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>

                    <GlassCard style={styles.milestoneItem}>
                        <View style={styles.msLeft}>
                            <View style={[styles.iconBox, { backgroundColor: Colors.accent.yellow + '20' }]}>
                                <Award color={Colors.accent.yellow} size={20} />
                            </View>
                            <View>
                                <Text style={styles.msTitle}>Goal Achieved</Text>
                                <Text style={styles.msSub}>Oct 19 • 12,403 steps</Text>
                            </View>
                        </View>
                    </GlassCard>

                    <GlassCard style={styles.milestoneItem}>
                        <View style={styles.msLeft}>
                            <View style={[styles.iconBox, { backgroundColor: Colors.primary + '20' }]}>
                                <TrendingUp color={Colors.primary} size={20} />
                            </View>
                            <View>
                                <Text style={styles.msTitle}>New Record</Text>
                                <Text style={styles.msSub}>Oct 17 • 15,221 steps</Text>
                            </View>
                        </View>
                    </GlassCard>
                </View>

            </ScrollView>
        </ScreenBackground>
    );
};

const ChartBar = ({ day, height, active }: any) => (
    <View style={styles.barContainer}>
        <View style={[styles.barFill, { height, backgroundColor: active ? Colors.primary : 'rgba(255,255,255,0.1)' }]} />
        <Text style={[styles.barLabel, active && { color: Colors.primary }]}>{day}</Text>
    </View>
);

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 100,
    },
    header: {
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
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    selector: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 12,
        padding: 4,
        marginBottom: 24,
        justifyContent: 'space-between',
    },
    selText: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        color: Colors.glass.textSecondary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    selActive: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 20,
        shadowColor: Colors.primary,
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    selTextActive: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    chartCard: {
        padding: 20,
        marginBottom: 20,
    },
    chartHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    chartLabel: { color: Colors.glass.textSecondary, fontSize: 12, fontWeight: 'bold' },
    chartValue: { color: Colors.glass.text, fontSize: 28, fontWeight: 'bold' },
    chartSub: { color: Colors.glass.textSecondary, fontSize: 10 },
    dateBadge: {
        backgroundColor: 'rgba(19, 127, 236, 0.1)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        height: 24,
        borderColor: 'rgba(19, 127, 236, 0.2)',
        borderWidth: 1,
    },
    dateText: { color: Colors.primary, fontSize: 10, fontWeight: 'bold' },
    chartArea: {
        height: 180,
        justifyContent: 'flex-end',
    },
    gridLine: {
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    barsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '90%',
        alignItems: 'flex-end',
    },
    barContainer: {
        alignItems: 'center',
        width: 20,
        height: '100%',
        justifyContent: 'flex-end',
        gap: 8,
    },
    barFill: {
        width: '100%',
        borderRadius: 4,
    },
    barLabel: {
        fontSize: 10,
        color: Colors.glass.textSecondary,
        fontWeight: 'bold',
    },
    statsGrid: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 20,
    },
    statItem: {
        flex: 1,
        padding: 16,
    },
    statLabel: { color: Colors.glass.textSecondary, fontSize: 10, fontWeight: 'bold' },
    statNum: { fontSize: 20, fontWeight: 'bold', color: Colors.glass.text, marginVertical: 4 },
    statUnit: { fontSize: 8, fontWeight: 'bold', color: Colors.glass.textSecondary },
    insightCard: {
        padding: 20,
        backgroundColor: 'rgba(19, 127, 236, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(19, 127, 236, 0.2)',
        borderRadius: 20,
        marginBottom: 24,
    },
    insightTitle: { fontWeight: 'bold', color: Colors.glass.text, marginBottom: 4 },
    insightText: { fontSize: 12, color: Colors.glass.textSecondary },
    milestones: { gap: 12 },
    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.glass.text },
    viewAll: { color: Colors.primary, fontSize: 12, fontWeight: 'bold' },
    milestoneItem: { padding: 16, flexDirection: 'row', alignItems: 'center' },
    msLeft: { flexDirection: 'row', gap: 12, alignItems: 'center' },
    iconBox: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
    msTitle: { fontWeight: 'bold', color: Colors.glass.text },
    msSub: { fontSize: 10, color: Colors.glass.textSecondary },
});
