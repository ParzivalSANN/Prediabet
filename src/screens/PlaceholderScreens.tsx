import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { Colors } from '../constants/Colors';

const createPlaceholderScreen = (name: string) => {
    return () => (
        <ScreenBackground>
            <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </ScreenBackground>
    );
};

export const ReportsScreen = createPlaceholderScreen('Reports');
export const ProfileScreen = createPlaceholderScreen('Profile');
export const BMICalculatorScreen = createPlaceholderScreen('BMI Calculator');
export const RiskTestScreen = createPlaceholderScreen('Diabetes Risk Test');
export const FoodGuideScreen = createPlaceholderScreen('Food Guide');
export const TrackingScreen = createPlaceholderScreen('Daily Tracking');

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.glass.text,
        fontSize: 20,
    },
});
