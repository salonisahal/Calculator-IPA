import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FeatureItem } from '../types';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

type FeatureCardProps = {
  item: FeatureItem;
};

export function FeatureCard({ item }: FeatureCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <MaterialIcons name={item.icon as keyof typeof MaterialIcons.glyphMap} size={s(6)} color={colors.primary} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
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
  iconWrap: {
    width: s(12),
    height: s(12),
    borderRadius: s(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryLight,
  },
  content: {
    flex: 1,
    marginLeft: s(3),
  },
  title: {
    fontSize: 16,
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
