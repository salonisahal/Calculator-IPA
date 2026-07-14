import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { ResourceItem } from '../types';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

type ResourceCardProps = {
  item: ResourceItem;
};

export function ResourceCard({ item }: ResourceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{item.tag}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: s(3),
    padding: s(4),
    borderWidth: 1,
    borderColor: colors.border,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadowColor,
        shadowOffset: { width: 0, height: s(1) },
        shadowOpacity: 0.08,
        shadowRadius: s(3),
      },
      android: { elevation: 3 },
      default: {},
    }),
  },
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: s(2),
    paddingVertical: s(1),
    borderRadius: s(2),
    backgroundColor: colors.primaryLight,
    marginBottom: s(2),
  },
  tagText: {
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 1.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.primaryDark,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.textPrimary,
  },
  description: {
    marginTop: s(1),
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Regular',
    color: colors.textSecondary,
  },
});
