import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ChevronLeft, Plus, Check } from 'lucide-react-native';

const FOOD_CATEGORIES = [
    "Çavdar unu ve kepekli ekmeğin yanı sıra buğday unu",
    "Balık Havyarı",
    "Et ve mantar et suyu, yanı sıra bunlara dayalı yemekler",
    "Yüksek yağlı içerikli süt ürünleri",
    "Siyah ve yeşil çay, bitkisel çaylar ve soğanlar",
    "Az yağlı balıklar (pollock, walleye, turna)",
    "Yağda konserve balık",
    "Füme, kurutulmuş ve tuzlu balık",
    "Sütlü tatlılar",
    "İç yağ",
    "Dondurma, reçeller, kremler, tatlılar",
    "Herhangi bir formda yağlı balık türleri"
];

export const AddFoodScreen = ({ navigation }: any) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const toggleItem = (item: string) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleSave = () => {
        Alert.alert('Kaydedildi', `${selectedItems.length} besin günlüğünüze eklendi.`);
        navigation.goBack();
    };

    return (
        <ScreenBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
                    <ChevronLeft color={Colors.glass.text} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Besin Ekle</Text>
                <TouchableOpacity onPress={handleSave} style={styles.iconBtn}>
                    <Check color={Colors.accent.green} size={24} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.subtitle}>Günlük tüketiminizi seçiniz:</Text>

                <View style={styles.list}>
                    {FOOD_CATEGORIES.map((item, index) => {
                        const isSelected = selectedItems.includes(item);
                        return (
                            <TouchableOpacity key={index} onPress={() => toggleItem(item)}>
                                <GlassCard style={[styles.itemCard, isSelected && styles.itemSelected]}>
                                    <Text style={[styles.itemText, isSelected && styles.itemTextSelected]}>
                                        {item}
                                    </Text>
                                    {isSelected && <Check color={Colors.accent.red} size={18} />}
                                </GlassCard>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                    <Text style={styles.saveText}>Kaydet</Text>
                </TouchableOpacity>
            </View>

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
        paddingBottom: 100,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.glass.textSecondary,
        marginBottom: 16,
    },
    list: {
        gap: 12,
    },
    itemCard: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
    },
    itemSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: Colors.accent.red,
        borderWidth: 1,
    },
    itemText: {
        fontSize: 14,
        color: Colors.glass.text,
        flex: 1,
        marginRight: 10,
    },
    itemTextSelected: {
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        paddingBottom: 40,
        backgroundColor: 'rgba(0,0,0,0.5)', // slightly dim background for button visibility
    },
    saveBtn: {
        backgroundColor: Colors.accent.red,
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
