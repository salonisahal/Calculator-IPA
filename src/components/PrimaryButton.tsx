import React from 'react';
import { Pressable, Text, StyleSheet, Platform, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: ViewStyle;
};

export function PrimaryButton({ title, onPress, variant = 'primary', style }: PrimaryButtonProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const backgroundColor =
    variant === 'primary' ? colors.primary : variant === 'secondary' ? colors.primaryLight : 'transparent';
  const borderColor = variant === 'ghost' ? colors.border : 'transparent';
  const textColor = variant === 'primary' ? colors.textInverse : colors.textPrimary;

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withTiming(0.98, { duration: 120 });
      }}
      onPressOut={() => {
        scale.value = withTiming(1, { duration: 120 });
      }}
      android_ripple={{ color: 'rgba(0,0,0,0.12)' }}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor, borderColor },
        pressed && Platform.OS === 'ios' && { opacity: 0.8 },
        style,
      ]}
      accessibilityRole="button"
    >
      <Animated.View style={animatedStyle}>
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: s(3),
    paddingHorizontal: s(5),
    borderRadius: s(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
  },
});
