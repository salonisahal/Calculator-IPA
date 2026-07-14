import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

type TextFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  error?: string;
  keyboardType?: 'default' | 'email-address';
};

export function TextField({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  multiline,
  error,
  keyboardType = 'default',
}: TextFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        keyboardType={keyboardType}
        placeholderTextColor={colors.textDisabled}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        underlineColorAndroid="transparent"
        selectionColor={colors.primary}
        style={[styles.input, multiline && styles.inputMultiline, error ? styles.inputError : undefined]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: s(3),
  },
  label: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Medium',
    color: colors.textSecondary,
    marginBottom: s(2),
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: s(2),
    paddingHorizontal: s(3),
    paddingVertical: s(3),
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
    color: colors.textPrimary,
    backgroundColor: colors.surface,
  },
  inputMultiline: {
    minHeight: s(24),
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: colors.error,
  },
  error: {
    marginTop: s(1),
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter-Regular',
    color: colors.error,
  },
});
