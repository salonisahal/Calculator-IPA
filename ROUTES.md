# Android Test Final — Screens & Navigation

## How to run
cd /home/ryzen/frontend_generator_backend/frontend_runs/run_551260a1_20260714_022324/project
npm install && npx expo start
# Press 'a' for Android, 'i' for iOS simulator, 'w' for web,
# or scan the QR code with the Expo Go app on a physical iOS/Android device.

## Screens
| Screen | File | Description |
|--------|------|-------------|
| Home | src/screens/HomeScreen.tsx | Premium SaaS landing experience with hero CTA and collaboration cards. |
| Features | src/screens/FeaturesScreen.tsx | Feature cards for analytics, community, and automation. |
| Pricing | src/screens/PricingScreen.tsx | Pricing tiers with highlighted professional plan and CTA. |
| Testimonials | src/screens/TestimonialsScreen.tsx | Swipeable testimonial carousel with ratings and pagination. |
| Resources | src/screens/ResourcesScreen.tsx | Resource cards for reports, guides, and training. |
| Company | src/screens/CompanyScreen.tsx | Company values and impact stats. |
| Contact | src/screens/ContactScreen.tsx | Contact form with validation, submit, and reset. |
| Login | src/screens/LoginScreen.tsx | Authentication form with login and Google sign-in. |
| Not Found | src/screens/NotFoundScreen.tsx | Fallback screen for invalid routes. |

## Navigation map
- Drawer menu -> Home, Features, Pricing, Testimonials, Resources, Company, Contact, Login (tap drawer items)
- Home -> Pricing (tap "Get Started Free")
- Home -> Contact (tap "Schedule a demo")
- Not Found -> previous screen (tap "Go Back")

## Shared components
- src/components/HeaderBar.tsx — sticky header with centered logo and menu button
- src/components/PrimaryButton.tsx — primary/secondary CTA button with press scaling
- src/components/TextField.tsx — labeled TextInput with error state
- src/components/SectionHeader.tsx — section title/subtitle block
- src/components/FeatureCard.tsx — feature card with icon and description
- src/components/TestimonialCard.tsx — testimonial card with avatar and stars
- src/components/PricingCard.tsx — pricing plan card with features and CTA
- src/components/ResourceCard.tsx — resource summary card with tag
- src/components/ValueCard.tsx — company value card
- src/components/CollaborationCard.tsx — horizontal collaboration card with image placeholder
- src/components/StatTile.tsx — compact stats tile
- src/components/InfoBanner.tsx — highlighted banner for info/feedback

## Design tokens
primary, primaryDark, primaryLight, accent, background, surface, card, border, textPrimary, textSecondary, textDisabled, textInverse, success, warning, error, info, shadowColor
