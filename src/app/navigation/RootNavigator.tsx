import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { AuthScreen } from '../../features/auth/screens/AuthScreen';
import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { OnboardingScreen } from '../../features/onboarding/screens/OnboardingScreen';
import { ReligionSelectionScreen } from '../../features/religion/screens/ReligionSelectionScreen';
import { COLOR_TOKENS } from '../theme/tokens';
import { type RootStackParamList } from './routeTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const baseScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'fade',
  contentStyle: {
    backgroundColor: COLOR_TOKENS.background,
  },
};

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={baseScreenOptions}
    >
      <Stack.Screen component={OnboardingScreen} name="Onboarding" />
      <Stack.Screen component={AuthScreen} name="Auth" />
      <Stack.Screen
        component={ReligionSelectionScreen}
        name="ReligionSelection"
      />
      <Stack.Screen component={HomeScreen} name="Home" />
    </Stack.Navigator>
  );
};
