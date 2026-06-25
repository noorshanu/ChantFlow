import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';

import { type RootStackParamList } from '../../../app/navigation/routeTypes';
import { AppButton, AppScreen } from '../../../components/ui';
import { OnboardingFeatureList } from '../components/OnboardingFeatureList';
import { OnboardingHero } from '../components/OnboardingHero';

type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  return (
    <AppScreen contentClassName="pb-10">
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
        >
          <OnboardingHero />
          <OnboardingFeatureList />
        </ScrollView>

        <AppButton
          accessibilityLabel="Begin your journey"
          className="mt-4 shadow-premium"
          label="Begin Your Journey"
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },
});
