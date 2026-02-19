import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Alert } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, Moon, Sun, Bell, Lock, Globe, Database, Trash2, ChevronRight } from 'lucide-react-native';

export const SettingsScreen = ({ navigation }: any) => {
    // Mock States for Simulated Backend Feel
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [biometrics, setBiometrics] = useState(false);
    const [dataSaver, setDataSaver] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // In a real app, this would use Context API. 
        // For this demo, we show a toast/alert simulating the change or explain it's locked to Dark Mode for Glassmorphism.
        if (isDarkMode) {
            Alert.alert(
                "Tema Değişikliği",
                "PrediaBet şu anda en iyi deneyim için 'Koyu Mod (Dark Glassmorphism)' olarak optimize edilmiştir. Açık mod yakında eklenecektir.",
                [{ text: "Tamam" }]
            );
            setIsDarkMode(true); // Revert switch
        }
    };

    const handleDeleteAccount = () => {
        Alert.alert(
            "Hesabı Sil",
            "Hesabınızı ve tüm verilerinizi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
            [
                { text: "İptal", style: "cancel" },
                {
                    text: "Sil", style: "destructive", onPress: () => {
                        // Simulate backend call
                        setTimeout(() => {
                            Alert.alert("Hesap Silindi", "Hesabınız başarıyla silindi. Giriş ekranına yönlendiriliyorsunuz.");
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                        }, 1000);
                    }
                }
            ]
        );
    };

    return (
        <ScreenBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                    <ChevronLeft color={Colors.glass.text} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ayarlar</Text>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.content}>

                {/* Appearance Section */}
                <Text style={styles.sectionTitle}>Görünüm</Text>
                <GlassCard style={styles.settingItem}>
                    <View style={styles.itemLeft}>
                        {isDarkMode ? <Moon color={Colors.primary} size={20} /> : <Sun color={Colors.accent.orange} size={20} />}
                        <Text style={styles.itemText}>Koyu Tema</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: Colors.primary }}
                        thumbColor={Colors.glass.text}
                        onValueChange={toggleTheme}
                        value={isDarkMode}
                    />
                </GlassCard>

                {/* Notifications Section */}
                <Text style={styles.sectionTitle}>Bildirimler</Text>
                <GlassCard style={styles.settingItem}>
                    <View style={styles.itemLeft}>
                        <Bell color={Colors.accent.purple} size={20} />
                        <Text style={styles.itemText}>Anlık Bildirimler</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: Colors.accent.green }}
                        thumbColor={Colors.glass.text}
                        onValueChange={setNotifications}
                        value={notifications}
                    />
                </GlassCard>

                {/* Security Section */}
                <Text style={styles.sectionTitle}>Güvenlik & Veri</Text>
                <GlassCard style={styles.settingItem}>
                    <View style={styles.itemLeft}>
                        <Lock color={Colors.accent.teal} size={20} />
                        <Text style={styles.itemText}>Biyometrik Giriş (FaceID)</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: Colors.accent.teal }}
                        thumbColor={Colors.glass.text}
                        onValueChange={setBiometrics}
                        value={biometrics}
                    />
                </GlassCard>

                <GlassCard style={styles.settingItem}>
                    <View style={styles.itemLeft}>
                        <Database color={Colors.accent.orange} size={20} />
                        <Text style={styles.itemText}>Veri Tasarrufu Modu</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: Colors.accent.orange }}
                        thumbColor={Colors.glass.text}
                        onValueChange={setDataSaver}
                        value={dataSaver}
                    />
                </GlassCard>

                {/* Account Actions */}
                <Text style={styles.sectionTitle}>Hesap Yönetimi</Text>
                <TouchableOpacity onPress={handleDeleteAccount}>
                    <GlassCard style={[styles.settingItem, { borderColor: 'rgba(239, 68, 68, 0.3)' }]}>
                        <View style={styles.itemLeft}>
                            <Trash2 color={Colors.accent.red} size={20} />
                            <Text style={[styles.itemText, { color: Colors.accent.red }]}>Hesabımı Sil</Text>
                        </View>
                        <ChevronRight color={Colors.accent.red} size={20} />
                    </GlassCard>
                </TouchableOpacity>

            </View>
        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: 20,
        gap: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.glass.textSecondary,
        marginTop: 8,
        marginBottom: 4,
        marginLeft: 4,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    itemText: {
        fontSize: 16,
        color: Colors.glass.text,
        fontWeight: '500',
    },
});
