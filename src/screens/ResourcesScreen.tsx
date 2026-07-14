import React from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ResourceCard, SectionHeader } from '../components';
import { resources } from '../data/mockData';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

export default function ResourcesScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <SectionHeader
          title="Resources"
          subtitle="Guides, reports, and enablement assets built for modern teams."
        />
      </View>
      <FlatList
        data={resources}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResourceCard item={item} />}
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
  listContent: {
    paddingHorizontal: s(4),
    paddingBottom: s(6),
  },
  separator: {
    height: s(3),
  },
});
