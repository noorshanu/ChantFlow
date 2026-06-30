import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { type RootStackParamList } from '../../../app/navigation/routeTypes';
import { OnboardingBackground } from '../components/OnboardingBackground';
import { OnboardingCtaButton } from '../components/OnboardingCtaButton';
import { OnboardingFeatureList } from '../components/OnboardingFeatureList';
import { OnboardingHero } from '../components/OnboardingHero';

type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  return (
    <OnboardingBackground>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <OnboardingHero />
            <OnboardingFeatureList />
          </ScrollView>

          <OnboardingCtaButton
            label="Begin Your Journey"
            onPress={() => navigation.navigate('Auth')}
          />
        </View>
      </SafeAreaView>
    </OnboardingBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingHorizontal: 28,
    paddingTop: 12,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 24,
  },
});
