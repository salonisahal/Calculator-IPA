import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import FeaturesScreen from '../screens/FeaturesScreen';
import PricingScreen from '../screens/PricingScreen';
import TestimonialsScreen from '../screens/TestimonialsScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import CompanyScreen from '../screens/CompanyScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginScreen from '../screens/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

export type DrawerParamList = {
  Home: undefined;
  Features: undefined;
  Pricing: undefined;
  Testimonials: undefined;
  Resources: undefined;
  Company: undefined;
  Contact: undefined;
  Login: undefined;
};

export type RootStackParamList = {
  MainDrawer: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
          ...Platform.select({ android: { elevation: 4 }, ios: {}, default: {} }),
        },
        headerTitleStyle: {
          fontFamily: 'Inter-SemiBold',
          fontSize: 17,
          color: colors.textPrimary,
        },
        headerTintColor: colors.primary,
        headerShadowVisible: true,
        drawerStyle: {
          backgroundColor: colors.surface,
          width: s(60),
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.textSecondary,
        drawerLabelStyle: {
          fontFamily: 'Inter-Medium',
          fontSize: 13,
          letterSpacing: 0.2,
        },
        drawerType: 'front',
        overlayColor: 'rgba(0,0,0,0.4)',
        sceneContainerStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Features"
        component={FeaturesScreen}
        options={{
          title: 'Features',
          drawerIcon: ({ color, size }) => <MaterialIcons name="insights" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Pricing"
        component={PricingScreen}
        options={{
          title: 'Pricing',
          drawerIcon: ({ color, size }) => <MaterialIcons name="payments" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Testimonials"
        component={TestimonialsScreen}
        options={{
          title: 'Testimonials',
          drawerIcon: ({ color, size }) => <MaterialIcons name="stars" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{
          title: 'Resources',
          drawerIcon: ({ color, size }) => <MaterialIcons name="menu-book" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Company"
        component={CompanyScreen}
        options={{
          title: 'Company',
          drawerIcon: ({ color, size }) => <MaterialIcons name="business" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Contact',
          drawerIcon: ({ color, size }) => <MaterialIcons name="support-agent" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          drawerIcon: ({ color, size }) => <MaterialIcons name="login" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainDrawer"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
          ...Platform.select({ android: { elevation: 4 }, ios: {}, default: {} }),
        },
        headerTitleStyle: {
          fontFamily: 'Inter-SemiBold',
          fontSize: 17,
          color: colors.textPrimary,
        },
        headerTintColor: colors.primary,
        headerBackTitleVisible: false,
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen name="MainDrawer" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Not Found' }} />
    </Stack.Navigator>
  );
}
