export const colors = {
  primary: '#F97316',
  primaryDark: '#EA580C',
  primaryLight: '#FED7AA',
  accent: '#FACC15',
  background: '#FAFAFA',
  surface: '#FFFFFF',
  card: '#FFFFFF',
  border: '#D1D5DB',
  textPrimary: '#111111',
  textSecondary: '#4B5563',
  textDisabled: '#9CA3AF',
  textInverse: '#FFFFFF',
  success: '#22C55E',
  warning: '#FEF9C3',
  error: '#EF4444',
  info: '#3B82F6',
  shadowColor: '#000000',
} as const;

export type Colors = typeof colors;
