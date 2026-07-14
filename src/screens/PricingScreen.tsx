import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { PricingCard, SectionHeader, InfoBanner } from '../components';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';
import { pricingPlans } from '../data/mockData';

export default function PricingScreen() {
  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0]?.name ?? 'Starter');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <SectionHeader
          title="Flexible pricing"
          subtitle="Choose a plan that scales from startup to enterprise."
        />
        <InfoBanner
          title={`Selected: ${selectedPlan}`}
          description="Tap any plan to update your selection and compare benefits."
        />
      </View>
      <FlatList
        data={pricingPlans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PricingCard item={item} onPress={() => setSelectedPlan(item.name)} />
        )}
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
