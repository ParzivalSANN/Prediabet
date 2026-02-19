import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, Share, Zap, Award, TrendingUp } from 'lucide-react-native';

export const TrackingScreen = ({ navigation }: any) => {
    const [selectedTab, setSelectedTab] = React.useState('Hafta');

    return (
        <ScreenBackground>
            <ScrollView contentContainerStyle={styles.content}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                        <ChevronLeft color={Colors.glass.text} size={24} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Adım Geçmişi</Text>
                    <TouchableOpacity style={styles.iconBtn}>
                        <Share color={Colors.glass.text} size={20} />
                    </TouchableOpacity>
                </View>

                {/* Time Selector */}
                <View style={styles.selector}>
                    {['Gün', 'Hafta', 'Ay', 'Yıl'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={selectedTab === tab ? styles.selActive : { paddingVertical: 8 }}
                            onPress={() => setSelectedTab(tab)}
                        >
                            <Text style={selectedTab === tab ? styles.selTextActive : styles.selText}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Hero Chart Card */}
                <GlassCard style={styles.chartCard}>
                    <View style={styles.chartHeader}>
                        <View>
                            <Text style={styles.chartLabel}>Toplam Adım</Text>
                            <Text style={styles.chartValue}>58,432</Text>
                            <Text style={styles.chartSub}><Text style={{ color: Colors.accent.green }}>+12%</Text> geçen haftaya göre</Text>
                        </View>
                        <View style={styles.dateBadge}>
                            <Text style={styles.dateText}>Eki 14 - 20</Text>
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
                            {getChartData(selectedTab).map((item, index) => (
                                <ChartBar
                                    key={index}
                                    label={item.label}
                                    height={item.height}
                                    active={item.active}
                                />
                            ))}
                        </View>
                    </View>
                </GlassCard>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    <GlassCard style={styles.statItem}>
                        <Text style={styles.statLabel}>Günlük Ort.</Text>
                        <Text style={styles.statNum}>{selectedTab === 'Gün' ? '6,420' : selectedTab === 'Hafta' ? '8,347' : '7,920'}</Text>
                        <Text style={styles.statUnit}>ADIM / {selectedTab.toUpperCase()}</Text>
                    </GlassCard>
                    <GlassCard style={styles.statItem}>
                        <Text style={styles.statLabel}>Mesafe</Text>
                        <Text style={styles.statNum}>{selectedTab === 'Gün' ? '4.2' : selectedTab === 'Hafta' ? '42.5' : '180.3'}</Text>
                        <Text style={styles.statUnit}>TOPLAM KM</Text>
                    </GlassCard>
                </View>

                {/* Insight */}
                <View style={styles.insightCard}>
                    <Zap color={Colors.primary} size={24} style={{ marginBottom: 8 }} />
                    <Text style={styles.insightTitle}>Böyle devam et!</Text>
                    <Text style={styles.insightText}>
                        {selectedTab === 'Gün'
                            ? 'Bugün hedefine %64 oranında ulaştın.'
                            : 'Bu dönem istikrarlı bir ilerleme kaydettin.'}
                    </Text>
                </View>

                {/* Recent Milestones */}
                <View style={styles.milestones}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Son Başarılar</Text>
                        <Text style={styles.viewAll}>Tümünü Gör</Text>
                    </View>

                    <GlassCard style={styles.milestoneItem}>
                        <View style={styles.msLeft}>
                            <View style={[styles.iconBox, { backgroundColor: Colors.accent.yellow + '20' }]}>
                                <Award color={Colors.accent.yellow} size={20} />
                            </View>
                            <View>
                                <Text style={styles.msTitle}>Hedefe Ulaşıldı</Text>
                                <Text style={styles.msSub}>19 Eki • 12,403 adım</Text>
                            </View>
                        </View>
                    </GlassCard>

                    <GlassCard style={styles.milestoneItem}>
                        <View style={styles.msLeft}>
                            <View style={[styles.iconBox, { backgroundColor: Colors.primary + '20' }]}>
                                <TrendingUp color={Colors.primary} size={20} />
                            </View>
                            <View>
                                <Text style={styles.msTitle}>Yeni Rekor</Text>
                                <Text style={styles.msSub}>17 Eki • 15,221 adım</Text>
                            </View>
                        </View>
                    </GlassCard>
                </View>

            </ScrollView>
        </ScreenBackground>
    );
};

// Mock data generator
const getChartData = (tab: string) => {
    switch (tab) {
        case 'Gün':
            return [
                { label: '06:00', height: '20%' },
                { label: '09:00', height: '40%' },
                { label: '12:00', height: '80%', active: true },
                { label: '15:00', height: '60%' },
                { label: '18:00', height: '45%' },
                { label: '21:00', height: '30%' },
            ];
        case 'Ay':
            return [
                { label: 'H1', height: '50%' },
                { label: 'H2', height: '70%' },
                { label: 'H3', height: '45%' },
                { label: 'H4', height: '90%', active: true },
            ];
        case 'Yıl':
            return [
                { label: 'Q1', height: '60%' },
                { label: 'Q2', height: '75%' },
                { label: 'Q3', height: '50%' },
                { label: 'Q4', height: '85%', active: true },
            ];
        case 'Hafta':
        default:
            return [
                { label: 'Pzt', height: '35%' },
                { label: 'Sal', height: '55%' },
                { label: 'Çar', height: '75%' },
                { label: 'Per', height: '95%', active: true },
                { label: 'Cum', height: '60%' },
                { label: 'Cmt', height: '40%' },
                { label: 'Paz', height: '85%' },
            ];
    }
};

const ChartBar = ({ label, height, active }: any) => (
    <View style={styles.barContainer}>
        <View style={[styles.barFill, { height, backgroundColor: active ? Colors.primary : 'rgba(255,255,255,0.1)' }]} />
        <Text style={[styles.barLabel, active && { color: Colors.primary }]}>{label}</Text>
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
