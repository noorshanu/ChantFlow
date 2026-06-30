import { View } from 'react-native';

import { AppText } from '../../../components/ui';
import { ONBOARDING_FEATURES } from '../constants/onboardingContent';
import { OnboardingFeatureIconGlyph } from './OnboardingFeatureIconGlyph';

export const OnboardingFeatureList = () => {
  return (
    <View className="mt-10 w-full gap-5">
      {ONBOARDING_FEATURES.map(feature => (
        <View className="flex-row items-center gap-4" key={feature.id}>
          <View className="h-12 w-12 items-center justify-center rounded-2xl border border-premium bg-card/70">
            <OnboardingFeatureIconGlyph name={feature.icon} />
          </View>
          <AppText className="flex-1 text-base leading-7 text-goldSecondary/90">
            {feature.label}
          </AppText>
        </View>
      ))}
    </View>
  );
};
