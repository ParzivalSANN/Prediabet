import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { Settings, TrendingUp, TrendingDown, Activity, FileText, ChevronRight, LogOut } from 'lucide-react-native';

export const ProfileScreen = ({ navigation }: any) => {
    return (
        <ScreenBackground>
            <ScrollView contentContainerStyle={styles.content}>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Profile</Text>
                    <TouchableOpacity style={styles.iconBtn}>
                        <Settings color={Colors.glass.text} size={24} />
                    </TouchableOpacity>
                </View>

                {/* Profile Identity */}
                <View style={styles.identitySection}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnRLcNWzzoWDc-I0iNVQsgj1eGGwO5dYW8oUn4RWvhE2gNHoh0j79wdsv5euvVhh5JEI561p9F5F6U7K-mDYbRDacOV6B24sOB5cXX_UJNoWwe77q1re5gaA2KBexTP443OHm3wGyjDO8A76BjykvQGqCWJfjkSbnoBwiPksukadx34rMfCJrH0qiBgHc80BTjER3EAD9evVX5dU5w07Wveo-gh_xBv7E0imvfD0qYFe1cAdKWmN4sFWUvNAgHijdegz-NYbxZXFU' }}
                            style={styles.avatar}
                        />
                        <View style={styles.verifiedBadge}>
                            <CheckIcon size={12} color="white" />
                        </View>
                    </View>
                    <Text style={styles.userName}>Alex Johnson</Text>
                    <View style={styles.userMeta}>
                        <View style={styles.stageBadge}>
                            <Text style={styles.stageText}>PREDIABETES STAGE 1</Text>
                        </View>
                        <Text style={styles.metaText}>• 32 years</Text>
                    </View>

                    <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={styles.editBtnText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Health Snapshot */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Health Snapshot</Text>
                    <Text style={styles.updateText}>Updated 2m ago</Text>
                </View>

                <View style={styles.grid}>
                    <GlassCard style={styles.statCard}>
                        <View style={styles.statHeader}>
                            <Activity color={Colors.accent.orange} size={20} />
                            <View style={styles.trendBadg}>
                                <TrendingUp color={Colors.accent.red} size={12} />
                                <Text style={styles.badgTextRed}>2%</Text>
                            </View>
                        </View>
                        <Text style={styles.statLabel}>GLUCOSE</Text>
                        <Text style={styles.statValue}>105 <Text style={styles.unit}>mg/dL</Text></Text>
                    </GlassCard>

                    <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate('BMICalculator')}>
                        <GlassCard style={{ height: '100%', padding: 16 }}>
                            <View style={styles.statHeader}>
                                <Activity color={Colors.primary} size={20} />
                                <View style={styles.trendBadg}>
                                    <TrendingDown color={Colors.accent.green} size={12} />
                                    <Text style={styles.badgTextGreen}>0.4%</Text>
                                </View>
                            </View>
                            <Text style={styles.statLabel}>BMI</Text>
                            <Text style={styles.statValue}>24.2 <Text style={styles.unit}>index</Text></Text>
                        </GlassCard>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate('Tracking')}>
                        <GlassCard style={{ height: '100%', padding: 16 }}>
                            <View style={styles.statHeader}>
                                <Activity color={Colors.accent.green} size={20} />
                                <View style={styles.trendBadg}>
                                    <TrendingUp color={Colors.accent.green} size={12} />
                                    <Text style={styles.badgTextGreen}>15%</Text>
                                </View>
                            </View>
                            <Text style={styles.statLabel}>STEPS</Text>
                            <Text style={styles.statValue}>8,432 <Text style={styles.unit}>today</Text></Text>
                        </GlassCard>
                    </TouchableOpacity>

                    <GlassCard style={styles.statCard}>
                        <View style={styles.statHeader}>
                            <Activity color={Colors.accent.purple} size={20} />
                            <Text style={styles.stableText}>Stable</Text>
                        </View>
                        <Text style={styles.statLabel}>HbA1c</Text>
                        <Text style={styles.statValue}>5.7 <Text style={styles.unit}>%</Text></Text>
                    </GlassCard>
                </View>

                {/* Menu List */}
                <Text style={[styles.sectionTitle, { marginTop: 24, marginBottom: 12 }]}>Medical Records</Text>

                <View style={styles.menuList}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddFood')}>
                        <MenuItem icon={<TrendingUp color={Colors.primary} size={20} />} title="Add Food Log" subtitle="Log daily meals" color={Colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                        <MenuItem icon={<FileText color={Colors.accent.green} size={20} />} title="S.S.S. (FAQ)" subtitle="Frequently Asked Questions" color={Colors.accent.green} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                        <MenuItem icon={<Activity color={Colors.accent.orange} size={20} />} title="Contact Support" subtitle="Get help & info" color={Colors.accent.orange} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('About')}>
                        <MenuItem icon={<FileText color={Colors.primary} size={20} />} title="About PrediaBet" subtitle="Version 2.4.1" color={Colors.primary} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.signOutBtn}>
                    <LogOut color={Colors.accent.red} size={20} style={{ marginRight: 8 }} />
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>

                <Text style={styles.versionText}>PrediaBet v2.4.1 (Variant 9)</Text>

            </ScrollView>
        </ScreenBackground>
    );
};

const MenuItem = ({ icon, title, subtitle, color }: any) => (
    <GlassCard style={styles.menuItem}>
        <View style={[styles.menuIconBox, { backgroundColor: color + '20' }]}>
            {icon}
        </View>
        <View style={{ flex: 1 }}>
            <Text style={styles.menuTitle}>{title}</Text>
            <Text style={styles.menuSub}>{subtitle}</Text>
        </View>
        <ChevronRight color={Colors.glass.textSecondary} size={20} />
    </GlassCard>
);

// Simple SVG Check icon replacement since lucide doesn't fill
const CheckIcon = ({ size, color }: { size: number, color: string }) => (
    <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 2 }} />
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
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    iconBtn: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    identitySection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarContainer: {
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    verifiedBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: Colors.primary,
        padding: 4,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.background.dark,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    userMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 8,
    },
    stageBadge: {
        backgroundColor: 'rgba(249, 115, 22, 0.2)',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(249, 115, 22, 0.3)',
    },
    stageText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.accent.orange,
    },
    metaText: {
        fontSize: 14,
        color: Colors.glass.textSecondary,
    },
    editBtn: {
        marginTop: 20,
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 12,
    },
    editBtnText: {
        color: 'white',
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
    updateText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    statCard: {
        width: '48%',
        padding: 16,
    },
    statHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    trendBadg: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    badgTextRed: { fontSize: 10, fontWeight: 'bold', color: Colors.accent.red },
    badgTextGreen: { fontSize: 10, fontWeight: 'bold', color: Colors.accent.green },
    stableText: { fontSize: 10, fontWeight: 'bold', color: Colors.glass.textSecondary },
    statLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.glass.textSecondary,
        marginBottom: 4,
    },
    statValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    unit: {
        fontSize: 10,
        fontWeight: 'normal',
        color: Colors.glass.textSecondary,
    },
    menuList: {
        gap: 12,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 16,
    },
    menuIconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    menuSub: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
    },
    signOutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        padding: 16,
        backgroundColor: 'rgba(239, 68, 68, 0.05)',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(239, 68, 68, 0.1)',
    },
    signOutText: {
        color: Colors.accent.red,
        fontWeight: 'bold',
    },
    versionText: {
        textAlign: 'center',
        fontSize: 10,
        marginTop: 20,
        color: Colors.glass.textSecondary,
        fontWeight: 'bold',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
});
