import {
  DarkTheme,
  type Theme as NavigationTheme,
} from '@react-navigation/native';

import { COLOR_TOKENS } from './tokens';

export const navigationTheme: NavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLOR_TOKENS.gold,
    background: COLOR_TOKENS.background,
    card: COLOR_TOKENS.card,
    text: COLOR_TOKENS.white,
    border: COLOR_TOKENS.borderPremium,
    notification: COLOR_TOKENS.goldSecondary,
  },
};
