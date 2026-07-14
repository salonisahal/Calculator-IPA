import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { SectionHeader, TestimonialCard } from '../components';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';
import { testimonials } from '../data/mockData';

export default function TestimonialsScreen() {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = width - s(8);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <SectionHeader
          title="Trusted by modern teams"
          subtitle="Swipe through high-impact stories from data-driven businesses."
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        directionalLockEnabled
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / cardWidth);
          setActiveIndex(index);
        }}
        contentContainerStyle={styles.carouselContent}
      >
        {testimonials.map((item) => (
          <View key={item.id} style={[styles.cardWrap, { width: cardWidth }]}> 
            <TestimonialCard item={item} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {testimonials.map((item, index) => (
          <View
            key={`dot-${item.id}`}
            style={[styles.dot, index === activeIndex && styles.dotActive]}
          />
        ))}
      </View>
      <Text style={styles.note}>Swipe to explore success stories.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
    ...(Platform.OS === 'web' ? { overflow: 'hidden' as const, maxHeight: '100vh' as any } : {}),
  },
  header: {
    paddingHorizontal: s(4),
    paddingTop: s(4),
  },
  carouselContent: {
    paddingHorizontal: s(4),
    paddingTop: s(3),
  },
  cardWrap: {
    paddingRight: s(3),
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: s(3),
  },
  dot: {
    width: s(2),
    height: s(2),
    borderRadius: s(1),
    backgroundColor: colors.primaryLight,
    marginHorizontal: s(1),
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: s(3),
  },
  note: {
    textAlign: 'center',
    marginTop: s(3),
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Regular',
    color: colors.textSecondary,
  },
});
