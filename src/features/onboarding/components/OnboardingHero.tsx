import { Image, View } from 'react-native';

import { AppText } from '../../../components/ui';
import { ONBOARDING_HERO_IMAGE_URI } from '../constants/onboardingContent';

export const OnboardingHero = () => {
  return (
    <View className="items-center">
      <AppText className="text-center text-5xl tracking-wide text-gold">
        ChantFlow
      </AppText>
      <AppText className="mt-2 text-center text-lg italic text-goldSecondary">
        Your sacred practice,
      </AppText>

      <View className="mt-8 overflow-hidden rounded-full border border-premium shadow-premium">
        <Image
          accessibilityLabel="Sacred symbol illustration"
          className="h-56 w-56"
          source={{ uri: ONBOARDING_HERO_IMAGE_URI }}
        />
      </View>
    </View>
  );
};
