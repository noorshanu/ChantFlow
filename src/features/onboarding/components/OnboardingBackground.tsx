import { type ReactNode } from 'react';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ONBOARDING_BG } from '../../../app/assets/images';
import { COLOR_TOKENS } from '../../../app/theme/tokens';

type OnboardingBackgroundProps = {
  children: ReactNode;
};

const OVERLAY_COLORS = [
  'rgba(7, 17, 31, 0.45)',
  'rgba(7, 17, 31, 0.68)',
  'rgba(4, 10, 18, 0.88)',
] as const;

export const OnboardingBackground = ({ children }: OnboardingBackgroundProps) => {
  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Image
        blurRadius={Platform.OS === 'ios' ? 12 : 0}
        resizeMode="cover"
        source={ONBOARDING_BG}
        style={styles.backgroundImage}
      />
      {Platform.OS === 'android' ? (
        <Image
          resizeMode="cover"
          source={ONBOARDING_BG}
          style={styles.androidBlurLayer}
        />
      ) : null}
      <LinearGradient
        colors={[...OVERLAY_COLORS]}
        end={{ x: 0.5, y: 1 }}
        start={{ x: 0.5, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  androidBlurLayer: {
    ...StyleSheet.absoluteFill,
    opacity: 0.35,
    transform: [{ scale: 1.08 }],
  },
  backgroundImage: {
    ...StyleSheet.absoluteFill,
    transform: [{ scale: 1.06 }],
  },
  root: {
    backgroundColor: COLOR_TOKENS.background,
    flex: 1,
  },
});
