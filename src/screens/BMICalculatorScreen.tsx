import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, Info, Activity, Zap, History } from 'lucide-react-native';
import LottieView from 'lottie-react-native';
import { BlurView } from 'expo-blur';

export const BMICalculatorScreen = ({ navigation }: any) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [status, setStatus] = useState<string>('');
    const [statusColor, setStatusColor] = useState<string>(Colors.primary);
    const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

    const [history, setHistory] = useState<{ date: string, bmi: number, status: string }[]>([]);

    // Animation ref
    const lottieRef = useRef<LottieView>(null);

    const clearHistory = () => {
        Alert.alert(
            "Clear History",
            "Are you sure you want to delete all calculation history?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", style: "destructive", onPress: () => setHistory([]) }
            ]
        );
    };

    const calculateBMI = () => {
        if (!height || !weight) {
            Alert.alert(
                "Eksik Bilgi",
                "Lütfen hesaplama yapabilmek için boy ve kilo değerlerini giriniz.",
                [{ text: "Tamam" }]
            );
            return;
        }

        let h = parseFloat(height);
        let w = parseFloat(weight);

        if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
            Alert.alert("Geçersiz Değer", "Lütfen geçerli sayısal değerler giriniz.");
            return;
        }

        // Calculate BMI: weight (kg) / [height (m)]^2
        const heightInMeters = h / 100;
        const bmiValue = w / Math.pow(heightInMeters, 2);

        setBmi(bmiValue);

        let currentStatus = '';
        let currentColor = '';

        if (bmiValue < 18.5) {
            currentStatus = 'Zayıf';
            currentColor = '#38bdf8'; // Light Blue
        } else if (bmiValue >= 18.5 && bmiValue < 25) {
            currentStatus = 'Normal';
            currentColor = '#2dd4bf'; // Teal/Green
        } else if (bmiValue >= 25 && bmiValue < 30) {
            currentStatus = 'Fazla Kilolu';
            currentColor = '#fbbf24'; // Warning Orange
        } else {
            currentStatus = 'Obez';
            currentColor = '#f87171'; // Red
        }

        setStatus(currentStatus);
        setStatusColor(currentColor);

        // Add to history
        const newEntry = {
            date: new Date().toLocaleDateString(),
            bmi: bmiValue,
            status: currentStatus
        };
        setHistory([newEntry, ...history]);

        // Play animation if available
        if (lottieRef.current) {
            lottieRef.current.play();
        }
    };

    return (
        <ScreenBackground>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.iconButton}
                        >
                            <ChevronLeft color="#fff" size={24} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>BMI Calculator</Text>
                        <TouchableOpacity style={styles.iconButton} onPress={clearHistory}>
                            <History color={Colors.accent.red} size={24} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                        {/* Introduction */}
                        <View style={styles.introSection}>
                            <Text style={styles.introTitle}>Check your health status</Text>
                            <Text style={styles.introSubtitle}>
                                Monitoring BMI is a key indicator for effective prediabetes management.
                            </Text>
                        </View>

                        {/* Unit Selector */}
                        <GlassCard style={styles.unitSelector}>
                            <TouchableOpacity
                                style={[styles.unitButton, unit === 'metric' && styles.unitButtonActive]}
                                onPress={() => setUnit('metric')}
                            >
                                <Text style={[styles.unitText, unit === 'metric' && styles.unitTextActive]}>Metric</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.unitButton, unit === 'imperial' && styles.unitButtonActive]}
                                onPress={() => setUnit('imperial')}
                            >
                                <Text style={[styles.unitText, unit === 'imperial' && styles.unitTextActive]}>Imperial</Text>
                            </TouchableOpacity>
                        </GlassCard>

                        {/* Inputs Area */}
                        <View style={styles.inputContainer}>
                            {/* Height Input */}
                            <GlassCard style={styles.inputCard}>
                                <View style={styles.inputLabelContainer}>
                                    <Text style={styles.inputLabel}>Height</Text>
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>CM</Text>
                                    </View>
                                </View>
                                <TextInput
                                    style={styles.largeInput}
                                    placeholder="175"
                                    placeholderTextColor="rgba(255,255,255,0.2)"
                                    keyboardType="numeric"
                                    value={height}
                                    onChangeText={setHeight}
                                    maxLength={3}
                                />
                            </GlassCard>

                            {/* Weight Input */}
                            <GlassCard style={styles.inputCard}>
                                <View style={styles.inputLabelContainer}>
                                    <Text style={styles.inputLabel}>Weight</Text>
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>KG</Text>
                                    </View>
                                </View>
                                <TextInput
                                    style={styles.largeInput}
                                    placeholder="72"
                                    placeholderTextColor="rgba(255,255,255,0.2)"
                                    keyboardType="numeric"
                                    value={weight}
                                    onChangeText={setWeight}
                                    maxLength={3}
                                />
                            </GlassCard>
                        </View>

                        {/* Action Button */}
                        <TouchableOpacity
                            style={styles.calculateButton}
                            onPress={calculateBMI}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.calculateButtonText}>Calculate BMI</Text>
                            <Zap color="#2dd4bf" size={20} fill="#2dd4bf" />
                        </TouchableOpacity>

                        {/* Result Section */}
                        <View style={styles.resultSection}>
                            <View style={styles.lastResultRow}>
                                <View style={styles.lastResultIcon}>
                                    <Activity color="#94a3b8" size={24} />
                                </View>
                                <View>
                                    <Text style={styles.lastResultLabel}>
                                        {bmi ? 'Current Result' : 'Last Result'}
                                    </Text>
                                    <Text style={[styles.lastResultValue, bmi ? { color: statusColor } : {}]}>
                                        {bmi ? `${bmi.toFixed(1)} - ${status}` : 'No calculation yet'}
                                    </Text>
                                </View>
                                {bmi && (
                                    <Text style={[styles.dateText, { marginLeft: 'auto' }]}>Just Now</Text>
                                )}
                            </View>

                            {/* History List */}
                            {history.length > 0 && (
                                <View style={{ marginTop: 24, width: '100%' }}>
                                    <Text style={[styles.inputLabel, { marginBottom: 16 }]}>History</Text>
                                    {history.map((entry, index) => (
                                        <GlassCard key={index} style={{ padding: 16, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{entry.bmi.toFixed(1)}</Text>
                                                <Text style={{ color: Colors.glass.textSecondary, fontSize: 12 }}>{entry.status}</Text>
                                            </View>
                                            <Text style={{ color: Colors.glass.textSecondary, fontSize: 12 }}>{entry.date}</Text>
                                        </GlassCard>
                                    ))}
                                </View>
                            )}
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        maxWidth: 480,
        width: '100%',
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginBottom: 20,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    content: {
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    introSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    introTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    introSubtitle: {
        fontSize: 14,
        color: '#94a3b8',
        textAlign: 'center',
        lineHeight: 20,
        maxWidth: 280,
    },
    unitSelector: {
        flexDirection: 'row',
        padding: 6,
        borderRadius: 12,
        marginBottom: 32,
        maxWidth: 200,
        alignSelf: 'center',
    },
    unitButton: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 8,
    },
    unitButtonActive: {
        backgroundColor: Colors.primary,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    unitText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#94a3b8',
    },
    unitTextActive: {
        color: '#fff',
    },
    inputContainer: {
        gap: 24,
    },
    inputCard: {
        padding: 24,
        borderRadius: 16,
    },
    inputLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#94a3b8',
    },
    badge: {
        backgroundColor: 'rgba(19, 127, 236, 0.1)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    largeInput: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#f1f5f9',
        padding: 0,
        height: 60,
    },
    calculateButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        gap: 8,
        shadowColor: '#2dd4bf',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 8,
    },
    calculateButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    resultSection: {
        marginTop: 32,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.05)',
        paddingTop: 32,
        alignItems: 'center',
    },
    lastResultRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 12,
        opacity: 0.8,
    },
    lastResultIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    lastResultLabel: {
        fontSize: 12,
        color: '#64748b',
    },
    lastResultValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#f1f5f9',
    },
    dateText: {
        fontSize: 12,
        color: '#64748b',
    },
});
