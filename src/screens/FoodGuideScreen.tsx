import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { ScreenBackground } from '../components/ScreenBackground';
import { GlassCard } from '../components/GlassCard';
import { Colors } from '../constants/Colors';
import { ArrowLeft, Search, Bolt, Heart } from 'lucide-react-native';
import { FOOD_DATA, FoodItem } from '../data/foodData';

const CATEGORIES = ['Tümü', 'Sebzeler', 'Meyveler', 'Tahıllar', 'Proteinler', 'Süt Ürünleri', 'Yağlar'];

export const FoodGuideScreen = ({ navigation }: any) => {
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tümü');

    const filteredData = useMemo(() => {
        return FOOD_DATA.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchText.toLowerCase());
            const matchesCategory = selectedCategory === 'Tümü' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchText, selectedCategory]);

    const renderItem = ({ item }: { item: FoodItem }) => (
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('FoodDetails', { item })}>
            <GlassCard style={styles.foodCard}>
                <Image source={{ uri: item.image }} style={styles.foodImage} />
                <View style={styles.itemContent}>
                    <View style={styles.itemHeader}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <View style={[styles.badge, { backgroundColor: item.badgeColor + '40' }]}>
                            <Text style={[styles.badgeText, { color: item.badgeColor }]}>{item.badge}</Text>
                        </View>
                    </View>
                    <Text style={styles.itemDesc} numberOfLines={2}>{item.desc}</Text>
                    <View style={styles.itemMeta}>
                        <Text style={styles.metaText}>{item.calories} kcal</Text>
                        <Text style={styles.metaDot}>•</Text>
                        <Text style={styles.metaText}>{item.carbs} Karb</Text>
                    </View>
                </View>
            </GlassCard>
        </TouchableOpacity>
    );

    return (
        <ScreenBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <ArrowLeft color={Colors.primary} size={24} />
                    <Text style={styles.headerTitle}>Besin Rehberi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                    <Heart color={Colors.primary} size={20} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchSection}>
                <GlassCard style={styles.searchBar}>
                    <Search color={Colors.glass.textSecondary} size={20} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Sağlıklı besinlerde ara..."
                        placeholderTextColor={Colors.glass.textSecondary}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </GlassCard>
            </View>

            <View style={{ height: 60, marginBottom: 10 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.catFiles}
                >
                    {CATEGORIES.map(cat => (
                        <CategoryPill
                            key={cat}
                            label={cat}
                            active={selectedCategory === cat}
                            onPress={() => setSelectedCategory(cat)}
                        />
                    ))}
                </ScrollView>
            </View>

            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={
                    <View style={styles.listHeader}>
                        <Text style={styles.sectionTitle}>
                            {searchText ? `Arama Sonuçları (${filteredData.length})` : 'Sizin İçin Önerilenler'}
                        </Text>
                        {!searchText && <Text style={styles.seeAll}>Tümünü Gör</Text>}
                    </View>
                }
                ListEmptyComponent={
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <Text style={{ color: Colors.glass.textSecondary }}>Besin bulunamadı.</Text>
                    </View>
                }
            />
        </ScreenBackground>
    );
};

const CategoryPill = ({ label, active, onPress }: any) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.pill, active ? styles.pillActive : styles.pillInactive]}>
            <Text style={[styles.pillText, active && { color: 'white' }]}>{label}</Text>
        </View>
    </TouchableOpacity>
);

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
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    iconBtn: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(19, 127, 236, 0.1)',
    },
    searchSection: {
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 50,
    },
    searchInput: {
        flex: 1,
        marginLeft: 12,
        color: Colors.glass.text,
        fontSize: 14,
    },
    catFiles: {
        paddingHorizontal: 20,
        gap: 8,
        alignItems: 'center',
    },
    pill: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        marginRight: 8,
    },
    pillActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    pillInactive: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderColor: 'rgba(255,255,255,0.1)',
    },
    pillText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.glass.textSecondary,
    },
    listContent: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 40,
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 8,
    },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.glass.text },
    seeAll: { color: Colors.primary, fontSize: 12, fontWeight: 'bold' },
    foodCard: {
        flexDirection: 'row',
        padding: 12,
        marginBottom: 12,
        gap: 12,
    },
    foodImage: {
        width: 80,
        height: 80,
        borderRadius: 12,
        backgroundColor: '#333',
    },
    itemContent: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.glass.text,
    },
    badge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 8,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    itemDesc: {
        fontSize: 12,
        color: Colors.glass.textSecondary,
        marginBottom: 6,
        lineHeight: 16,
    },
    itemMeta: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    metaText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: Colors.glass.textSecondary,
    },
    metaDot: { fontSize: 10, color: Colors.glass.textSecondary },
});
