import { ScrollView } from 'react-native';

import { AppScreen } from '../../../components/ui';
import { AchievementsSection } from '../components/AchievementsSection';
import { DailyGoalCard } from '../components/DailyGoalCard';
import { ProfileStatsCard } from '../components/ProfileStatsCard';
import { ProfileTraditionPicker } from '../components/ProfileTraditionPicker';
import { useProfileTradition } from '../hooks/useProfileTradition';

export const ProfileScreen = () => {
  const { isSelected, select, selectedId } = useProfileTradition('hindu');

  return (
    <AppScreen contentClassName="pb-4 pt-4">
      <ScrollView
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        <ProfileStatsCard traditionId={selectedId} />
        <AchievementsSection />
        <DailyGoalCard />
        <ProfileTraditionPicker isSelected={isSelected} onSelect={select} />
      </ScrollView>
    </AppScreen>
  );
};
