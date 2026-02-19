import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, X, Activity, Calendar, Footprints, Armchair, Apple, Pill, Dna, Gauge } from 'lucide-react-native';

// FINDRISK Questions
interface QuestionOption {
    id: string;
    label: string;
    points?: number;
    desc?: string;
    icon?: React.ReactNode;
}

interface Question {
    id: string;
    step: number;
    question: string;
    options: QuestionOption[];
}

const QUESTIONS: Question[] = [
    {
        id: 'age',
        step: 1,
        question: 'How old are you?',
        options: [
            { id: '0', label: 'Under 45 years', points: 0 },
            { id: '2', label: '45-54 years', points: 2 },
            { id: '3', label: '55-64 years', points: 3 },
            { id: '4', label: 'Over 64 years', points: 4 },
        ]
    },
    {
        id: 'bmi',
        step: 2,
        question: 'What is your Body Mass Index (BMI)?',
        options: [
            { id: '0', label: 'Lower than 25 kg/m²', points: 0 },
            { id: '1', label: '25-30 kg/m²', points: 1 },
            { id: '3', label: 'Higher than 30 kg/m²', points: 3 },
        ]
    },
    {
        id: 'waist',
        step: 3,
        question: 'Waist circumference measured below the ribs?',
        options: [
            { id: '0', label: 'Less than 94 cm (men) / 80 cm (women)', points: 0 },
            { id: '3', label: '94-102 cm (men) / 80-88 cm (women)', points: 3 },
            { id: '4', label: 'More than 102 cm (men) / 88 cm (women)', points: 4 },
        ]
    },
    {
        id: 'activity',
        step: 4,
        question: 'Do you usually have at least 30 minutes of daily physical activity?',
        options: [
            { id: '0', label: 'Yes', desc: 'At least 30 mins daily', icon: <Activity color={Colors.primary} size={24} /> },
            { id: '2', label: 'No', desc: 'Less than 30 mins', icon: <Armchair color="gray" size={24} /> },
        ]
    },
    {
        id: 'veggies',
        step: 5,
        question: 'How often do you eat vegetables, fruit, or berries?',
        options: [
            { id: '0', label: 'Every day', icon: <Apple color={Colors.accent.green} size={24} /> },
            { id: '1', label: 'Not every day', icon: <Apple color="gray" size={24} /> },
        ]
    },
    {
        id: 'meds',
        step: 6,
        question: 'Have you ever taken medication for high blood pressure?',
        options: [
            { id: '0', label: 'No', icon: <Pill color="gray" size={24} /> },
            { id: '2', label: 'Yes', icon: <Pill color={Colors.accent.red} size={24} /> },
        ]
    },
    {
        id: 'glucose',
        step: 7,
        question: 'Have you ever been found to have high blood glucose?',
        options: [
            { id: '0', label: 'No', icon: <Gauge color="gray" size={24} /> },
            { id: '5', label: 'Yes', icon: <Gauge color={Colors.accent.orange} size={24} /> },
        ]
    },
    {
        id: 'family',
        step: 8,
        question: 'Have any of the members of your immediate family or other relatives been diagnosed with diabetes?',
        options: [
            { id: '0', label: 'No', icon: <Dna color="gray" size={24} /> },
            { id: '3', label: 'Yes: grandparent, aunt, uncle, or first cousin', points: 3 },
            { id: '5', label: 'Yes: parent, brother, sister, or own child', points: 5 },
        ]
    },
];

export const RiskTestScreen = ({ navigation }: any) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

    const currentQuestion = QUESTIONS[currentStepIndex];
    const progress = ((currentStepIndex + 1) / QUESTIONS.length) * 100;

    const handleSelect = (option: any) => {
        setSelectedOptionId(option.id);
        // We'll save the points later on "Next"
    };

    const handleNext = () => {
        if (!selectedOptionId) return;

        // Find selected option to get points
        const selectedOpt = currentQuestion.options.find(o => o.id === selectedOptionId);
        const points = selectedOpt?.points !== undefined ? selectedOpt.points : (parseInt(selectedOptionId) || 0); // fallback if simple ID usage

        const newAnswers = { ...answers, [currentQuestion.id]: points };
        setAnswers(newAnswers);

        if (currentStepIndex < QUESTIONS.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
            setSelectedOptionId(null);
        } else {
            // Finish
            const totalScore = Object.values(newAnswers).reduce((a, b) => a + b, 0);
            navigation.navigate('RiskTestResult', { score: totalScore });
        }
    };

    const handleBack = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
            // Optional: Restore previous selection
            setSelectedOptionId(null);
        } else {
            navigation.goBack();
        }
    };

    return (
        <ScreenBackground>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.navRow}>
                    <TouchableOpacity onPress={handleBack} style={styles.iconBtn}>
                        <ChevronLeft color={Colors.glass.text} size={24} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>RISK ASSESSMENT</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeTab')} style={styles.iconBtn}>
                        <X color={Colors.glass.text} size={24} />
                    </TouchableOpacity>
                </View>

                {/* Progress Bar */}
                <View style={styles.progressContainer}>
                    <View style={styles.progressLabels}>
                        <Text style={styles.stepText}>Step {currentStepIndex + 1} <Text style={styles.totalText}>of {QUESTIONS.length}</Text></Text>
                        <Text style={styles.percentText}>{Math.round(progress)}% Complete</Text>
                    </View>
                    <View style={styles.track}>
                        <View style={[styles.fill, { width: `${progress}%` }]} />
                    </View>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.question}>
                    {currentQuestion.question}
                </Text>

                <View style={styles.optionsList}>
                    {currentQuestion.options.map((opt) => {
                        const isActive = selectedOptionId === opt.id;
                        return (
                            <GlassCard
                                key={opt.id}
                                style={styles.optionCard}
                                active={isActive}
                                onPress={() => handleSelect(opt)}
                            >
                                <View style={styles.cardInner}>
                                    <View style={styles.cardLeft}>
                                        {opt.icon && (
                                            <View style={[styles.iconBox, isActive ? styles.activeIconBox : styles.inactiveIconBox]}>
                                                {opt.icon}
                                            </View>
                                        )}
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.optLabel}>{opt.label}</Text>
                                            {opt.desc && <Text style={styles.optDesc}>{opt.desc}</Text>}
                                        </View>
                                    </View>
                                    <View style={[styles.radio, isActive && styles.activeRadio]}>
                                        {isActive && <View style={styles.radioDot} />}
                                    </View>
                                </View>
                            </GlassCard>
                        );
                    })}
                </View>

            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.prevBtn} onPress={handleBack}>
                    <Text style={styles.prevText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.nextBtn, !selectedOptionId && styles.disabledBtn]}
                    onPress={handleNext}
                    disabled={!selectedOptionId}
                >
                    <Text style={styles.nextText}>Continue</Text>
                </TouchableOpacity>
            </View>

        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255,255,255,0.02)',
        paddingBottom: 20,
    },
    navRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.05)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: 'rgba(255,255,255,0.6)',
        textTransform: 'uppercase',
    },
    progressContainer: {
        gap: 8,
    },
    progressLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    stepText: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalText: {
        fontSize: 14,
        color: Colors.glass.textSecondary,
        fontWeight: 'normal',
    },
    percentText: {
        fontSize: 10,
        color: Colors.glass.textSecondary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    track: {
        height: 6,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 3,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 3,
    },
    content: {
        padding: 24,
    },
    question: {
        fontSize: 24, // Slightly smaller to fit longer questions
        color: Colors.glass.text,
        fontWeight: '300',
        marginBottom: 30,
        lineHeight: 34,
    },
    optionsList: {
        gap: 16,
    },
    optionCard: {
        padding: 0,
    },
    cardInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        flex: 1,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIconBox: {
        backgroundColor: 'rgba(19, 127, 236, 0.2)',
    },
    inactiveIconBox: {
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    optLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.glass.text,
        marginBottom: 2,
    },
    optDesc: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
    },
    radio: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeRadio: {
        borderColor: Colors.primary,
    },
    radioDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.primary,
    },
    footer: {
        flexDirection: 'row',
        padding: 24,
        gap: 16,
        paddingBottom: 40,
    },
    prevBtn: {
        flex: 1,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
    },
    prevText: {
        color: Colors.glass.textSecondary,
        fontWeight: 'bold',
    },
    nextBtn: {
        flex: 2,
        padding: 16,
        borderRadius: 16,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    disabledBtn: {
        opacity: 0.5,
        backgroundColor: 'gray',
    },
    nextText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
