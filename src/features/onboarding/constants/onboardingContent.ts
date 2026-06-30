export const ONBOARDING_FEATURES = [
  {
    id: 'effortless',
    icon: 'hands',
    label: 'Chant effortlessly, one tap at a time.',
  },
  {
    id: 'flow',
    icon: 'heart',
    label: 'Let your practice flow quietly within.',
  },
  {
    id: 'awareness',
    icon: 'star',
    label: 'Return in awareness, and watch your journey deepen.',
  },
] as const;

export type OnboardingFeatureIcon = (typeof ONBOARDING_FEATURES)[number]['icon'];
