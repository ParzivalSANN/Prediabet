import React from 'react';
import { StyleSheet, View, ViewStyle, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

interface ScreenBackgroundProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const { width, height } = Dimensions.get('window');

export const ScreenBackground: React.FC<ScreenBackgroundProps> = ({ children, style }) => {
    return (
        <View style={styles.container}>
            {/* Base Background */}
            <View style={styles.baseBackground} />

            {/* Mesh Gradient Orbs - Simulating CSS radial gradients */}
            <View style={[styles.orb, styles.orb1]} />
            <View style={[styles.orb, styles.orb2]} />
            <View style={[styles.orb, styles.orb3]} />

            {/* Content */}
            <SafeAreaView style={[styles.safeArea, style]}>
                {children}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.dark,
        overflow: 'hidden',
    },
    baseBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors.background.dark,
    },
    orb: {
        position: 'absolute',
        borderRadius: 9999,
        opacity: 0.4,
    },
    orb1: {
        // Top Left - Blue
        width: width * 1.2,
        height: width * 1.2,
        top: -width * 0.4,
        left: -width * 0.4,
        backgroundColor: 'rgba(19, 127, 236, 0.15)', // Primary Blue
        transform: [{ scale: 1 }],
    },
    orb2: {
        // Bottom Right - Purple/Teal hint
        width: width * 1.5,
        height: width * 1.5,
        bottom: -width * 0.5,
        right: -width * 0.5,
        backgroundColor: 'rgba(45, 212, 191, 0.05)', // Teal hint
    },
    orb3: {
        // Center - Primary
        width: width * 0.8,
        height: width * 0.8,
        top: height * 0.3,
        left: width * 0.1,
        backgroundColor: 'rgba(19, 127, 236, 0.05)',
    },
    safeArea: {
        flex: 1,
    },
});
