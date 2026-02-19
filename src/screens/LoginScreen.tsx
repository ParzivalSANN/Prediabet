import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Colors } from '../constants/Colors';
import { GlassCard } from '../components/GlassCard';
import { Mail, Lock, Eye, EyeOff, Activity, ChevronRight, Zap } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export const LoginScreen = ({ navigation }: any) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Mock authentication
        navigation.replace('Main');
    };

    const handleQuickTest = () => {
        navigation.navigate('RiskTest');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* Mesh Gradient Background */}
            <View style={styles.backgroundContainer}>
                <View style={[styles.blob, styles.blobTopLeft]} />
                <View style={[styles.blob, styles.blobBottomRight]} />
                <View style={[styles.blob, styles.blobCenter]} />
                <BlurView intensity={100} style={StyleSheet.absoluteFill} tint="dark" />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.content}>

                    {/* Branding */}
                    <View style={styles.brandSection}>
                        <View style={styles.logoContainer}>
                            <Activity color={Colors.primary} size={32} />
                        </View>
                        <Text style={styles.brandTitle}>
                            Predia<Text style={{ fontWeight: 'bold', color: Colors.primary }}>Bet</Text>
                        </Text>
                        <Text style={styles.brandSubtitle}>Hassas Prediyabet Yönetimi</Text>
                    </View>

                    {/* Glass Login Card */}
                    <GlassCard style={styles.loginCard}>
                        <Text style={styles.cardTitle}>Giriş Yap</Text>

                        <View style={styles.form}>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>E-POSTA ADRESİ</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="name@example.com"
                                        placeholderTextColor={Colors.glass.textSecondary}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                    <Mail color={Colors.glass.textSecondary} size={20} style={styles.inputIcon} />
                                </View>
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>ŞİFRE</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Şifrenizi girin"
                                        placeholderTextColor={Colors.glass.textSecondary}
                                        secureTextEntry={!passwordVisible}
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setPasswordVisible(!passwordVisible)}
                                        style={styles.inputIcon}
                                    >
                                        {passwordVisible ? (
                                            <EyeOff color={Colors.glass.textSecondary} size={20} />
                                        ) : (
                                            <Eye color={Colors.glass.textSecondary} size={20} />
                                        )}
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                                <Text style={styles.loginBtnText}>Panele Devam Et</Text>
                            </TouchableOpacity>

                            <View style={styles.footerLinks}>
                                <TouchableOpacity>
                                    <Text style={styles.linkText}>Şifremi Unuttum?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={[styles.linkText, { color: Colors.primary }]}>Hesap Oluştur</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </GlassCard>

                    {/* Divider */}
                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>HIZLI ERİŞİM</Text>
                        <View style={styles.divider} />
                    </View>

                    {/* Quick Access Button */}
                    <TouchableOpacity
                        style={styles.quickAccessBtn}
                        activeOpacity={0.8}
                        onPress={handleQuickTest}
                    >
                        <LinearGradient
                            colors={['rgba(19, 127, 236, 0.1)', 'rgba(19, 127, 236, 0.05)']}
                            style={styles.quickAccessGradient}
                        >
                            <View style={styles.quickIconBox}>
                                <Zap color="white" size={24} fill="white" />
                            </View>
                            <View style={styles.quickContent}>
                                <Text style={styles.quickTitle}>HIZLI TEST ERİŞİMİ</Text>
                                <Text style={styles.quickSub}>Anında risk taraması başlat</Text>
                            </View>
                            <ChevronRight color={Colors.primary} size={20} />
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.secureText}>GÜVENLİ SAĞLIK ORTAMI</Text>
                    <View style={styles.homeIndicator} />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101922', // Dark background base
    },
    backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        overflow: 'hidden',
    },
    blob: {
        position: 'absolute',
        width: width * 0.8,
        height: width * 0.8,
        borderRadius: width * 0.4,
        opacity: 0.4,
    },
    blobTopLeft: {
        top: -width * 0.2,
        left: -width * 0.2,
        backgroundColor: 'rgba(19, 127, 236, 0.6)', // Primary Blue
    },
    blobBottomRight: {
        bottom: -width * 0.1,
        right: -width * 0.1,
        backgroundColor: 'rgba(19, 127, 236, 0.4)',
    },
    blobCenter: {
        top: height * 0.3,
        left: width * 0.1,
        backgroundColor: '#101922',
        width: width,
        height: height,
    },
    keyboardView: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    brandSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoContainer: {
        width: 64,
        height: 64,
        borderRadius: 16,
        backgroundColor: 'rgba(19, 127, 236, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(19, 127, 236, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    brandTitle: {
        fontSize: 32,
        color: 'white',
        fontWeight: '200',
        letterSpacing: -1,
    },
    brandSubtitle: {
        marginTop: 8,
        color: Colors.glass.textSecondary,
        fontSize: 14,
        letterSpacing: 0.5,
    },
    loginCard: {
        padding: 32,
        borderRadius: 24,
        marginBottom: 32,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.9)',
        marginBottom: 24,
    },
    form: {
        gap: 20,
    },
    inputGroup: {
        gap: 6,
    },
    label: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.glass.textSecondary,
        letterSpacing: 1,
        marginLeft: 4,
    },
    inputContainer: {
        position: 'relative',
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        borderRadius: 12,
        paddingVertical: 14,
        paddingLeft: 16,
        paddingRight: 44,
        color: 'white',
        fontSize: 14,
    },
    inputIcon: {
        position: 'absolute',
        right: 12,
        top: 14, // Roughly centered vertically
    },
    loginBtn: {
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    loginBtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    footerLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    linkText: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    dividerText: {
        marginHorizontal: 16,
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.glass.textSecondary,
        letterSpacing: 2,
    },
    quickAccessBtn: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(19, 127, 236, 0.4)',
        overflow: 'hidden',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    quickAccessGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    quickIconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    quickContent: {
        flex: 1,
    },
    quickTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
        marginBottom: 4,
    },
    quickSub: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
    },
    footer: {
        alignItems: 'center',
        paddingBottom: 40,
        marginTop: 'auto',
    },
    secureText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#475569', // Slate 600
        letterSpacing: 2,
        marginBottom: 24,
    },
    homeIndicator: {
        width: 128,
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 2,
    },
});
