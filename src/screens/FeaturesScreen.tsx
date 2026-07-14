import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { FeatureCard, SectionHeader, InfoBanner } from '../components';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';
import { features } from '../data/mockData';

export default function FeaturesScreen() {
  const intro = useSharedValue(0);
  const introOffset = s(4);

  useEffect(() => {
    intro.value = withTiming(1, { duration: 450 });
  }, [intro]);

  const introStyle = useAnimatedStyle(() => ({
    opacity: intro.value,
    transform: [{ translateY: (1 - intro.value) * introOffset }],
  }));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <Animated.View style={[styles.header, introStyle]}>
        <SectionHeader
          title="Features built for growth"
          subtitle="Analytics, automation, and community in a single enterprise SaaS hub."
        />
        <InfoBanner
          title="Designed for Android"
          description="Material Design 3 layouts with bold typography and fast response times."
        />
      </Animated.View>
      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeatureCard item={item} />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'android'}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
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
    paddingBottom: s(2),
  },
  listContent: {
    paddingHorizontal: s(4),
    paddingBottom: s(6),
  },
  separator: {
    height: s(3),
  },
});
