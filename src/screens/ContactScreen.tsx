import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, Phone, Mail, Globe, MessageCircle, MessageSquare } from 'lucide-react-native';

export const ContactScreen = ({ navigation }: any) => {

    const handleLink = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Couldn't open link", err));
    };

    return (
        <ScreenBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                    <ChevronLeft color={Colors.glass.text} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>İletişim</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>

                <GlassCard style={styles.card}>
                    <TouchableOpacity style={styles.row} onPress={() => handleLink('tel:05456647662')}>
                        <View style={styles.rowContent}>
                            <Text style={styles.label}>Telefon: 0545 664 76 62</Text>
                        </View>
                        <Phone color={Colors.primary} size={20} />
                    </TouchableOpacity>
                </GlassCard>

                <GlassCard style={styles.card}>
                    <TouchableOpacity style={styles.row} onPress={() => handleLink('mailto:ibrahim.topuz@ksbu.edu.tr')}>
                        <View style={styles.rowContent}>
                            <Text style={styles.label}>E-Posta : ibrahim.topuz@ksbu.edu.tr</Text>
                        </View>
                        <Mail color={Colors.accent.orange} size={20} />
                    </TouchableOpacity>
                </GlassCard>

                <GlassCard style={styles.card}>
                    <TouchableOpacity style={styles.row} onPress={() => handleLink('https://www.prediabet-tr.com')}>
                        <View style={styles.rowContent}>
                            <Text style={styles.label}>Website : www.prediabet-tr.com</Text>
                        </View>
                        <Globe color={Colors.primary} size={20} />
                    </TouchableOpacity>
                </GlassCard>

                <GlassCard style={styles.card}>
                    <TouchableOpacity style={styles.row} onPress={() => handleLink('https://wa.me/905456647662')}>
                        <View style={styles.rowContent}>
                            <Text style={styles.label}>Whatsapp ile yaz</Text>
                        </View>
                        <MessageCircle color={Colors.accent.green} size={20} />
                    </TouchableOpacity>
                </GlassCard>

                <GlassCard style={styles.card}>
                    <TouchableOpacity style={styles.row}>
                        <View style={styles.rowContent}>
                            <Text style={styles.label}>Uzmana sor</Text>
                        </View>
                        <MessageSquare color={Colors.accent.purple} size={20} />
                    </TouchableOpacity>
                </GlassCard>

            </ScrollView>
        </ScreenBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
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
        gap: 16,
    },
    card: {
        padding: 0,
        borderRadius: 12,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    rowContent: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
});
