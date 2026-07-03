import { View } from 'react-native';

import { AppText } from '../../../components/ui';
import { ACHIEVEMENTS } from '../constants/profileContent';
import { profileStyles } from '../theme/profileStyles';
import { AchievementBadge } from './AchievementBadge';

export const AchievementsSection = () => {
  const rows = [
    ACHIEVEMENTS.slice(0, 4),
    ACHIEVEMENTS.slice(4),
  ];

  return (
    <View className="mt-6">
      <AppText style={profileStyles.sectionTitle}>Achievements</AppText>
      <View className="gap-3">
        {rows.map(row => (
          <View className="flex-row gap-2" key={row.map(item => item.id).join('-')}>
            {row.map(achievement => (
              <AchievementBadge achievement={achievement} key={achievement.id} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
