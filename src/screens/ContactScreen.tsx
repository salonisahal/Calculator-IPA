import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Platform, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { SectionHeader, TextField, PrimaryButton, InfoBanner } from '../components';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!name.trim()) nextErrors.name = 'Name is required.';
    if (!emailRegex.test(email)) nextErrors.email = 'Enter a valid email.';
    if (!company.trim()) nextErrors.company = 'Company is required.';
    if (!message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setErrors({});
    setSuccess(false);
  };

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
            title="Contact"
            subtitle="Talk to our experts about enterprise onboarding and pricing."
          />
          {success ? (
            <InfoBanner title="Message sent" description="Our team will reach out within 24 hours." />
          ) : null}
          <TextField label="Name" value={name} placeholder="Your name" onChangeText={setName} error={errors.name} />
          <TextField
            label="Email"
            value={email}
            placeholder="you@company.com"
            onChangeText={setEmail}
            error={errors.email}
            keyboardType="email-address"
          />
          <TextField
            label="Company"
            value={company}
            placeholder="Company name"
            onChangeText={setCompany}
            error={errors.company}
          />
          <TextField
            label="Message"
            value={message}
            placeholder="Tell us about your goals"
            onChangeText={setMessage}
            error={errors.message}
            multiline
          />
          <View style={styles.buttonRow}>
            <PrimaryButton title="Submit" onPress={handleSubmit} style={styles.buttonSpacing} />
            <Pressable
              onPress={handleReset}
              android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
              style={({ pressed }) => [styles.resetButton, pressed && Platform.OS === 'ios' && { opacity: 0.7 }]}
            >
              <Text style={styles.resetText}>Reset</Text>
            </Pressable>
          </View>
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
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: s(2),
  },
  buttonSpacing: {
    marginRight: s(2),
  },
  resetButton: {
    paddingVertical: s(3),
    paddingHorizontal: s(5),
    borderRadius: s(2),
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.textPrimary,
  },
});
