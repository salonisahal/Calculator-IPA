import React, { useEffect } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { HeaderBar, PrimaryButton, SectionHeader, CollaborationCard, InfoBanner } from '../components';
import { DrawerParamList } from '../navigation';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';
import { collaborationCards } from '../data/mockData';

export default function HomeScreen() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const heroProgress = useSharedValue(0);
  const floatProgress = useSharedValue(0);
  const heroTranslate = s(6);
  const floatDistance = -s(1);

  useEffect(() => {
    heroProgress.value = withTiming(1, { duration: 500 });
    floatProgress.value = withRepeat(withTiming(floatDistance, { duration: 2200 }), -1, true);
  }, [floatDistance, heroProgress, floatProgress]);

  const heroStyle = useAnimatedStyle(() => ({
    opacity: heroProgress.value,
    transform: [{ translateY: (1 - heroProgress.value) * heroTranslate }],
  }));

  const floatStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: floatProgress.value }],
  }));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <HeaderBar title="Circle" onMenuPress={() => navigation.openDrawer()} />
        <Animated.View style={[styles.hero, heroStyle]}>
          <View style={styles.glow} pointerEvents="none" />
          <Text style={styles.heroTitle}>
            A powerful online engagement tool that's intuitive and simple to use.
          </Text>
          <Text style={styles.heroSubtitle}>
            With stellar one-click reports and unmatched support, see how Circle can make a difference in your business.
          </Text>
          <PrimaryButton
            title="Get Started Free"
            onPress={() => navigation.navigate('Pricing')}
            style={styles.heroButton}
          />
          <Pressable
            onPress={() => navigation.navigate('Contact')}
            android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
            style={({ pressed }) => [styles.secondaryLink, pressed && Platform.OS === 'ios' && { opacity: 0.7 }]}
          >
            <Text style={styles.secondaryText}>Schedule a demo</Text>
          </Pressable>
        </Animated.View>
        <SectionHeader
          title="Collaboration built for scale"
          subtitle="Premium collaboration experiences with smooth Android-first ergonomics."
        />
        <Animated.View style={floatStyle}>
          <ScrollView
            horizontal
            directionalLockEnabled
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalContent}
          >
            {collaborationCards.map((card) => (
              <CollaborationCard key={card.id} item={card} />
            ))}
          </ScrollView>
        </Animated.View>
        <InfoBanner
          title="Enterprise-ready security"
          description="SOC2-ready architecture, encrypted data lanes, and always-on monitoring."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
    ...(Platform.OS === 'web' ? { overflow: 'hidden' as const, maxHeight: '100vh' as any } : {}),
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: s(6),
  },
  hero: {
    paddingHorizontal: s(4),
    paddingVertical: s(6),
    backgroundColor: colors.background,
  },
  glow: {
    position: 'absolute',
    top: s(3),
    right: s(3),
    width: s(22),
    height: s(22),
    borderRadius: s(11),
    backgroundColor: colors.accent,
    opacity: 0.2,
  },
  heroTitle: {
    fontSize: 26,
    lineHeight: 31,
    letterSpacing: -0.5,
    fontFamily: 'Inter-Bold',
    color: colors.textPrimary,
  },
  heroSubtitle: {
    marginTop: s(2),
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: 'Inter-Regular',
    color: colors.textSecondary,
    marginBottom: s(4),
  },
  heroButton: {
    alignSelf: 'stretch',
    paddingVertical: s(4),
    borderRadius: s(3),
  },
  secondaryLink: {
    marginTop: s(3),
    alignSelf: 'flex-start',
  },
  secondaryText: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
  },
  horizontalContent: {
    paddingHorizontal: s(4),
    paddingBottom: s(5),
  },
});
