import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { CompanyValue } from '../types';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

type ValueCardProps = {
  item: CompanyValue;
};

export function ValueCard({ item }: ValueCardProps) {
  return (
    <View style={styles.card}>
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
