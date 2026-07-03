import { StyleSheet } from 'react-native';

import { COLOR_TOKENS, SHADOW_TOKENS } from '../../../app/theme/tokens';

export const profileStyles = StyleSheet.create({
  badgeCard: {
    backgroundColor: 'rgba(15, 29, 48, 0.8)',
    borderColor: COLOR_TOKENS.borderPremium,
    borderWidth: 1,
  },
  badgeCardUnlocked: {
    borderColor: 'rgba(214, 178, 94, 0.7)',
  },
  badgeProgress: {
    color: COLOR_TOKENS.muted,
    fontSize: 10,
    textAlign: 'center',
  },
  badgeTitle: {
    color: COLOR_TOKENS.muted,
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 16,
    textAlign: 'center',
  },
  badgeTitleUnlocked: {
    color: COLOR_TOKENS.goldSecondary,
  },
  card: {
    backgroundColor: 'rgba(15, 29, 48, 0.9)',
    borderColor: COLOR_TOKENS.borderPremium,
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    ...SHADOW_TOKENS.premium,
  },
  checkmark: {
    color: COLOR_TOKENS.gold,
    fontSize: 12,
  },
  goalMeta: {
    color: COLOR_TOKENS.muted,
    fontSize: 14,
    marginTop: 12,
  },
  goalRemaining: {
    color: COLOR_TOKENS.muted,
    fontSize: 13,
    marginTop: 8,
  },
  goalTarget: {
    color: COLOR_TOKENS.gold,
    fontSize: 20,
    fontWeight: '700',
  },
  goalTitle: {
    color: COLOR_TOKENS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  sectionTitle: {
    color: COLOR_TOKENS.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  sectionEyebrow: {
    color: COLOR_TOKENS.gold,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  statDivider: {
    borderLeftColor: COLOR_TOKENS.borderPremium,
    borderLeftWidth: 1,
  },
  statLabel: {
    color: COLOR_TOKENS.muted,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    marginTop: 4,
    textTransform: 'uppercase',
  },
  statValue: {
    color: COLOR_TOKENS.gold,
    fontSize: 24,
    fontWeight: '700',
  },
  traditionLabel: {
    color: COLOR_TOKENS.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  traditionChip: {
    backgroundColor: 'rgba(15, 29, 48, 0.6)',
    borderColor: COLOR_TOKENS.borderPremium,
    borderRadius: 16,
    borderWidth: 1,
    height: 64,
    width: 64,
  },
  traditionChipSelected: {
    backgroundColor: 'rgba(214, 178, 94, 0.1)',
    borderColor: COLOR_TOKENS.gold,
  },
  userName: {
    color: COLOR_TOKENS.white,
    fontSize: 20,
    fontWeight: '700',
  },
});
