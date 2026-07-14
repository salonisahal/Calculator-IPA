import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Platform, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { PrimaryButton, TextField, SectionHeader, InfoBanner } from '../components';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [info, setInfo] = useState('');
  const cardProgress = useSharedValue(0);
  const cardOffset = s(4);

  useEffect(() => {
    cardProgress.value = withTiming(1, { duration: 400 });
  }, [cardProgress]);

  const cardStyle = useAnimatedStyle(() => ({
    opacity: cardProgress.value,
    transform: [{ translateY: (1 - cardProgress.value) * cardOffset }],
  }));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <SectionHeader
            title="Log in"
            subtitle="Access your Circle workspace with secure Android authentication."
          />
          {info ? <InfoBanner title="Update" description={info} /> : null}
          <Animated.View style={cardStyle}>
            <TextField
              label="Email"
              value={email}
              placeholder="you@company.com"
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextField
              label="Password"
              value={password}
              placeholder="Enter password"
              onChangeText={setPassword}
              secureTextEntry
            />
            <Pressable
              onPress={() => setInfo('Password reset instructions sent to your email.')}
              android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
              style={({ pressed }) => [styles.forgotButton, pressed && Platform.OS === 'ios' && { opacity: 0.7 }]}
            >
              <Text style={styles.forgotText}>Forgot Password</Text>
            </Pressable>
            <PrimaryButton title="Login" onPress={() => setInfo('Welcome back! Redirecting to your dashboard.')} />
            <Pressable
              onPress={() => setInfo('Google sign-in initiated for your workspace.')}
              android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
              style={({ pressed }) => [styles.googleButton, pressed && Platform.OS === 'ios' && { opacity: 0.7 }]}
            >
              <Text style={styles.googleText}>Sign in with Google</Text>
            </Pressable>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
    ...(Platform.OS === 'web' ? { overflow: 'hidden' as const, maxHeight: '100vh' as any } : {}),
  },
  keyboard: {
    flex: 1,
  },
  content: {
    paddingHorizontal: s(4),
    paddingTop: s(4),
    paddingBottom: s(6),
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: s(3),
  },
  forgotText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.primaryDark,
  },
  googleButton: {
    marginTop: s(3),
    paddingVertical: s(3),
    paddingHorizontal: s(4),
    borderRadius: s(2),
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.textPrimary,
  },
});
