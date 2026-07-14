import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

type HeaderBarProps = {
  title: string;
  onMenuPress: () => void;
};

export function HeaderBar({ title, onMenuPress }: HeaderBarProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onMenuPress}
        android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
        style={({ pressed }) => [styles.menuButton, pressed && Platform.OS === 'ios' && { opacity: 0.7 }]}
        accessibilityRole="button"
        accessibilityLabel="Open menu"
      >
        <MaterialIcons name="menu" size={s(6)} color={colors.textPrimary} />
      </Pressable>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.menuButtonPlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(4),
    paddingVertical: s(3),
    backgroundColor: colors.surface,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadowColor,
        shadowOffset: { width: 0, height: s(0.5) },
        shadowOpacity: 0.08,
        shadowRadius: s(2),
      },
      android: { elevation: 4 },
      default: {},
    }),
  },
  menuButton: {
    width: s(10),
    height: s(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(5),
  },
  titleWrap: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.4,
    fontFamily: 'Inter-SemiBold',
    color: colors.textPrimary,
  },
  menuButtonPlaceholder: {
    width: s(10),
    height: s(10),
  },
});
