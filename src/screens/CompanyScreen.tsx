import React from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { SectionHeader, StatTile, ValueCard } from '../components';
import { companyValues } from '../data/mockData';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

export default function CompanyScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <SectionHeader
          title="Company"
          subtitle="Built for enterprise outcomes, trusted by high-growth teams."
        />
        <View style={styles.statsRow}>
          <StatTile label="Customer uplift" value="32%" />
          <View style={styles.statsSpacer} />
          <StatTile label="Automation hours saved" value="240+" />
        </View>
      </View>
      <FlatList
        data={companyValues}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ValueCard item={item} />}
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
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: s(3),
  },
  statsSpacer: {
    width: s(3),
  },
  listContent: {
    paddingHorizontal: s(4),
    paddingBottom: s(6),
    paddingTop: s(3),
  },
  separator: {
    height: s(3),
  },
});
