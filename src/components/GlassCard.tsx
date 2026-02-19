import React from 'react';
import { StyleSheet, View, Pressable, ViewStyle, StyleProp } from 'react-native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { Colors } from '../constants/Colors';

interface GlassCardProps {
    children: React.ReactNode;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    intensity?: number;
    active?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    onPress,
    style,
    intensity = 30,
    active = false
}) => {
    const handlePress = () => {
        if (onPress) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onPress();
        }
    };

    return (
        <Pressable
            onPress={onPress ? handlePress : undefined}
            style={({ pressed }) => [
                styles.container,
                active && styles.activeContainer,
                pressed && styles.pressed,
                style
            ]}
        >
            <BlurView
                intensity={intensity}
                tint="dark"
                style={[
                    styles.blur,
                    active && { backgroundColor: Colors.glass.activeBackground }
                ]}
            >
                {children}
            </BlurView>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        borderColor: Colors.glass.border,
        borderWidth: 1,
        backgroundColor: Colors.glass.background,
    },
    activeContainer: {
        borderColor: Colors.glass.activeBorder,
        backgroundColor: Colors.glass.activeBackground,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
    },
    pressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
    blur: {
        padding: 20,
        borderRadius: 20,
    },
});
