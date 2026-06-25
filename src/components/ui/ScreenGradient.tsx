import { type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLOR_TOKENS } from '../../app/theme/tokens';

type ScreenGradientProps = {
  children: ReactNode;
};

const GRADIENT_COLORS = [
  '#0F1D30',
  COLOR_TOKENS.background,
  '#040A12',
] as const;

export const ScreenGradient = ({ children }: ScreenGradientProps) => {
  return (
    <LinearGradient
      colors={[...GRADIENT_COLORS]}
      end={{ x: 0.5, y: 1 }}
      start={{ x: 0.5, y: 0 }}
      style={styles.gradient}
    >
      <View className="absolute -right-16 top-24 h-56 w-56 rounded-full bg-gold/10" />
      <View className="absolute -left-20 bottom-40 h-48 w-48 rounded-full bg-goldSecondary/5" />
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
