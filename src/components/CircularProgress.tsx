import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Colors } from '../constants/Colors';

interface CircularProgressProps {
    current: number;
    target: number;
    size?: number;
    strokeWidth?: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircularProgress: React.FC<CircularProgressProps> = ({
    current,
    target,
    size = 200,
    strokeWidth = 15,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = Math.min(current / target, 1);
    const strokeDashoffset = circumference - progress * circumference;

    const animatedValue = useRef(new Animated.Value(circumference)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: strokeDashoffset,
            duration: 1500,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        }).start();
    }, [strokeDashoffset]);

    return (
        <View style={{ width: size, height: size }}>
            <Svg width={size} height={size} style={styles.svg}>
                <Defs>
                    <LinearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0" stopColor={Colors.primary} stopOpacity="1" />
                        <Stop offset="1" stopColor="#38bdf8" stopOpacity="1" />
                    </LinearGradient>
                </Defs>

                {/* Background Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Progress Circle with Glow */}
                <AnimatedCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="url(#blueGradient)"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={animatedValue}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                    // Shadow properties for "glow"
                    shadowColor={Colors.primary}
                    shadowOffset={{ width: 0, height: 0 }}
                    shadowOpacity={0.6}
                    shadowRadius={15}
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    svg: {
        transform: [{ rotate: '0deg' }], // Ensure correct orientation
    },
});
