import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';

import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { MindBellScreen } from '../../features/mind-bell/screens/MindBellScreen';
import { NowPlayingScreen } from '../../features/now-playing/screens/NowPlayingScreen';
import { ProfileScreen } from '../../features/profile/screens/ProfileScreen';
import { TracksScreen } from '../../features/tracks/screens/TracksScreen';
import { COLOR_TOKENS } from '../theme/tokens';
import { TabBarIcon, type TabIconName } from './TabBarIcon';
import { type MainTabParamList } from './routeTypes';

const Tab = createBottomTabNavigator<MainTabParamList>();

type TabIconProps = {
  color: string;
  focused: boolean;
};

const createTabIcon =
  (routeName: keyof MainTabParamList, iconName: TabIconName) =>
  ({ color, focused }: TabIconProps) => {
    if (routeName === 'Profile' && focused) {
      return (
        <View style={styles.profileIconWrap}>
          <TabBarIcon color={COLOR_TOKENS.gold} name="profile" size={20} />
        </View>
      );
    }

    return <TabBarIcon color={color} name={iconName} />;
  };

const homeTabIcon = createTabIcon('Home', 'home');
const nowPlayingTabIcon = createTabIcon('NowPlaying', 'nowPlaying');
const tracksTabIcon = createTabIcon('Tracks', 'tracks');
const mindBellTabIcon = createTabIcon('MindBell', 'mindBell');
const profileTabIcon = createTabIcon('Profile', 'profile');

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR_TOKENS.gold,
        tabBarInactiveTintColor: COLOR_TOKENS.muted,
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{ tabBarIcon: homeTabIcon }}
      />
      <Tab.Screen
        component={NowPlayingScreen}
        name="NowPlaying"
        options={{ tabBarIcon: nowPlayingTabIcon, tabBarLabel: 'NOW PLAYING' }}
      />
      <Tab.Screen
        component={TracksScreen}
        name="Tracks"
        options={{ tabBarIcon: tracksTabIcon }}
      />
      <Tab.Screen
        component={MindBellScreen}
        name="MindBell"
        options={{ tabBarIcon: mindBellTabIcon, tabBarLabel: 'MIND BELL' }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="Profile"
        options={{ tabBarIcon: profileTabIcon }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  profileIconWrap: {
    alignItems: 'center',
    backgroundColor: 'rgba(214, 178, 94, 0.18)',
    borderColor: COLOR_TOKENS.gold,
    borderRadius: 999,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  tabBar: {
    backgroundColor: COLOR_TOKENS.background,
    borderTopColor: COLOR_TOKENS.borderPremium,
    borderTopWidth: 1,
    elevation: 0,
    height: 68,
    paddingBottom: 8,
    paddingTop: 6,
  },
  tabLabel: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginTop: 2,
    textTransform: 'uppercase',
  },
});
