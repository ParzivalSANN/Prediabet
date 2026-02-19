import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, User, Phone, Lock, Save } from 'lucide-react-native';

export const EditProfileScreen = ({ navigation }: any) => {
    const [name, setName] = useState('Alex Johnson');
    const [phone, setPhone] = useState('+90 555 123 4567');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        Alert.alert('Success', 'Profile updated successfully!');
        navigation.goBack();
    };

    return (
        <ScreenBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                    <ChevronLeft color={Colors.glass.text} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profili Güncelle</Text>
                <View style={{ width: 40 }} />
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.content}>

                    <View style={styles.avatarSection}>
                        <View style={styles.avatarPlaceholder}>
                            <Image
                                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnRLcNWzzoWDc-I0iNVQsgj1eGGwO5dYW8oUn4RWvhE2gNHoh0j79wdsv5euvVhh5JEI561p9F5F6U7K-mDYbRDacOV6B24sOB5cXX_UJNoWwe77q1re5gaA2KBexTP443OHm3wGyjDO8A76BjykvQGqCWJfjkSbnoBwiPksukadx34rMfCJrH0qiBgHc80BTjER3EAD9evVX5dU5w07Wveo-gh_xBv7E0imvfD0qYFe1cAdKWmN4sFWUvNAgHijdegz-NYbxZXFU' }}
                                style={styles.avatar}
                            />
                            <View style={styles.editIconBadge}>
                                <Text style={{ fontSize: 10 }}>✏️</Text>
                            </View>
                        </View>
                        <Text style={styles.changePhotoText}>Fotoğrafı Değiştir</Text>
                    </View>

                    <View style={styles.form}>
                        <GlassCard style={styles.inputCard}>
                            <View style={styles.labelRow}>
                                <User color={Colors.primary} size={16} />
                                <Text style={styles.label}>Adı Soyadı</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Ad Soyad Giriniz"
                                placeholderTextColor={Colors.glass.textSecondary}
                            />
                        </GlassCard>

                        <GlassCard style={styles.inputCard}>
                            <View style={styles.labelRow}>
                                <Phone color={Colors.primary} size={16} />
                                <Text style={styles.label}>Telefon</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={phone}
                                onChangeText={setPhone}
                                keyboardType="phone-pad"
                                placeholder="Telefon Giriniz"
                                placeholderTextColor={Colors.glass.textSecondary}
                            />
                        </GlassCard>

                        <GlassCard style={styles.inputCard}>
                            <View style={styles.labelRow}>
                                <Lock color={Colors.primary} size={16} />
                                <Text style={styles.label}>Şifre</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                placeholder="Yeni Şifre (Boş bırakılabilir)"
                                placeholderTextColor={Colors.glass.textSecondary}
                            />
                        </GlassCard>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                    <Text style={styles.saveText}>Profili Güncelle</Text>
                </TouchableOpacity>
            </View>

        </ScreenBackground>
    );
};

// Quick fix for Image import if not top-level
import { Image } from 'react-native';

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
    },
    avatarSection: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
        position: 'relative',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    editIconBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: Colors.primary,
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.background.dark,
    },
    changePhotoText: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 14,
    },
    form: {
        gap: 20,
    },
    inputCard: {
        padding: 16,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    label: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    input: {
        fontSize: 16,
        color: Colors.glass.text,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    footer: {
        padding: 24,
        paddingBottom: 40,
    },
    saveBtn: {
        backgroundColor: Colors.accent.red, // Matching the red button from mockup
        padding: 18,
        borderRadius: 16,
        alignItems: 'center',
    },
    saveText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
