import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet, View } from 'react-native';
import { Home, Activity, User, PieChart } from 'lucide-react-native';

import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { BMICalculatorScreen } from '../screens/BMICalculatorScreen';
import { RiskTestScreen } from '../screens/RiskTestScreen';
import { FoodGuideScreen } from '../screens/FoodGuideScreen';
import { TrackingScreen } from '../screens/TrackingScreen';
import { Colors } from '../constants/Colors';

import { RiskTestResultScreen } from '../screens/RiskTestResultScreen';
import { FoodDetailsScreen } from '../screens/FoodDetailsScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import { AddFoodScreen } from '../screens/AddFoodScreen';
import { FAQScreen } from '../screens/FAQScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarBackground: () => (
                    <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
                ),
                tabBarActiveTintColor: Colors.accent.red,
                tabBarInactiveTintColor: Colors.glass.textSecondary,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="ReportsTab"
                component={TrackingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <PieChart color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
}

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export const RootNavigator = () => {
    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: 'transparent' },
                    animation: 'slide_from_right',
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={BottomTabs} />
                <Stack.Screen name="BMICalculator" component={BMICalculatorScreen} />
                <Stack.Screen name="RiskTest" component={RiskTestScreen} />
                <Stack.Screen name="RiskTestResult" component={RiskTestResultScreen} />
                <Stack.Screen name="FoodGuide" component={FoodGuideScreen} />
                <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
                <Stack.Screen name="Tracking" component={TrackingScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                <Stack.Screen name="AddFood" component={AddFoodScreen} />
                <Stack.Screen name="FAQ" component={FAQScreen} />
                <Stack.Screen name="Contact" component={ContactScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
