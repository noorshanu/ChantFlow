import './global.css';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './src/app/navigation/RootNavigator';
import { AppErrorBoundary } from './src/app/providers/AppErrorBoundary';
import { navigationTheme } from './src/app/theme/navigationTheme';

const App = () => (
  <AppErrorBoundary>
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  </AppErrorBoundary>
);

export default App;
