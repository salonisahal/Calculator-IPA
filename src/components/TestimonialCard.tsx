import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TestimonialItem } from '../types';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

type TestimonialCardProps = {
  item: TestimonialItem;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  const stars = Array.from({ length: 5 }).map((_, index) => index < item.rating);
  const initials = item.name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.company}>{item.company}</Text>
        </View>
      </View>
      <Text style={styles.review}>{item.review}</Text>
      <View style={styles.ratingRow}>
        <View style={styles.stars}>
          {stars.map((filled, index) => (
            <MaterialIcons
              key={`star-${item.id}-${index}`}
              name={filled ? 'star' : 'star-border'}
              size={s(4)}
              color={colors.accent}
            />
          ))}
        </View>
        <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: s(10),
    height: s(10),
    borderRadius: s(5),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Bold',
    color: colors.textInverse,
  },
  headerText: {
    marginLeft: s(3),
    flex: 1,
  },
  name: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.textPrimary,
  },
  company: {
    marginTop: s(1),
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Regular',
    color: colors.textSecondary,
  },
  review: {
    marginTop: s(3),
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Regular',
    color: colors.textSecondary,
  },
  ratingRow: {
    marginTop: s(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stars: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.textPrimary,
  },
});
