import { Image, View } from 'react-native';

import { APP_LOGO } from '../../../app/assets/images';
import { AppText } from '../../../components/ui';

export const OnboardingHero = () => {
  return (
    <View className="w-full items-center">
      <AppText className="text-center text-[42px] font-bold tracking-wide text-goldSecondary">
        ChantFlow
      </AppText>
      <AppText className="mt-1 text-center text-lg italic text-goldSecondary/90">
        Your sacred practice,
      </AppText>

      <View className="mt-8 items-center justify-center">
        <Image
          accessibilityLabel="ChantFlow logo"
          className="h-60 w-60"
          resizeMode="contain"
          source={APP_LOGO}
        />
      </View>
    </View>
  );
};
