export const COLOR_TOKENS = {
  background: '#07111F',
  card: '#0F1D30',
  gold: '#D6B25E',
  goldSecondary: '#F3D483',
  white: '#FFFFFF',
  muted: '#9AA4B2',
  borderPremium: 'rgba(255,255,255,0.08)',
} as const;

export const SPACING_TOKENS = {
  screenHorizontal: 24,
  screenTop: 32,
  cardPadding: 24,
  sectionGap: 12,
} as const;

export const RADIUS_TOKENS = {
  premium: 24,
} as const;

export const SHADOW_TOKENS = {
  premium: {
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 12,
  },
} as const;
