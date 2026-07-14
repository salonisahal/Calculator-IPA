import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CollaborationCard as CollaborationCardType } from '../types';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

type CollaborationCardProps = {
  item: CollaborationCardType;
};

export function CollaborationCard({ item }: CollaborationCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Ionicons name="image-outline" size={s(6)} color={colors.textDisabled} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: s(48),
    backgroundColor: colors.card,
    borderRadius: s(3),
    padding: s(4),
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: s(3),
    ...Platform.select({
      ios: {
        shadowColor: colors.shadowColor,
        shadowOffset: { width: 0, height: s(1) },
        shadowOpacity: 0.1,
        shadowRadius: s(3),
      },
      android: { elevation: 4 },
      default: {},
    }),
  },
  imagePlaceholder: {
    height: s(22),
    borderRadius: s(2),
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: s(3),
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.textPrimary,
  },
  subtitle: {
    marginTop: s(1),
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Regular',
    color: colors.textSecondary,
  },
});
