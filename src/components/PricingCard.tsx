import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { PricingPlan } from '../types';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';
import { PrimaryButton } from './PrimaryButton';

type PricingCardProps = {
  item: PricingPlan;
  onPress: () => void;
};

export function PricingCard({ item, onPress }: PricingCardProps) {
  return (
    <View style={[styles.card, item.highlight && styles.cardHighlight]}>
      <View style={styles.headerRow}>
        <Text style={[styles.plan, item.highlight && styles.planHighlight]}>{item.name}</Text>
        <Text style={[styles.price, item.highlight && styles.priceHighlight]}>{item.priceLabel}</Text>
      </View>
      <View style={styles.featureList}>
        {item.features.map((feature) => (
          <View key={`${item.id}-${feature}`} style={styles.featureRow}>
            <MaterialIcons name="check-circle" size={s(4)} color={colors.primary} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
      <PrimaryButton title={item.cta} onPress={onPress} variant={item.highlight ? 'primary' : 'ghost'} />
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
        shadowOpacity: 0.1,
        shadowRadius: s(3),
      },
      android: { elevation: 4 },
      default: {},
    }),
  },
  cardHighlight: {
    borderColor: colors.primary,
    backgroundColor: colors.warning,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: s(3),
  },
  plan: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.textPrimary,
  },
  planHighlight: {
    color: colors.primaryDark,
  },
  price: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Bold',
    color: colors.textPrimary,
  },
  priceHighlight: {
    color: colors.primaryDark,
  },
  featureList: {
    marginBottom: s(3),
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: s(2),
  },
  featureText: {
    marginLeft: s(2),
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Regular',
    color: colors.textSecondary,
  },
});
