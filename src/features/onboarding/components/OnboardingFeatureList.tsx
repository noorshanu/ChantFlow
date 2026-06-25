import { View } from 'react-native';

import { AppText } from '../../../components/ui';
import { ONBOARDING_FEATURES } from '../constants/onboardingContent';

export const OnboardingFeatureList = () => {
  return (
    <View className="mt-8 gap-4">
      {ONBOARDING_FEATURES.map(feature => (
        <View className="flex-row items-start gap-3" key={feature}>
          <View className="mt-2 h-2 w-2 rounded-full bg-gold" />
          <AppText className="flex-1 text-base leading-7 text-muted">
            {feature}
          </AppText>
        </View>
      ))}
    </View>
  );
};
