import { View } from 'react-native';

import { AppText } from '../../../components/ui';
import { type AchievementItem } from '../constants/profileContent';
import { profileStyles } from '../theme/profileStyles';

type AchievementBadgeProps = {
  achievement: AchievementItem;
};

export const AchievementBadge = ({ achievement }: AchievementBadgeProps) => {
  return (
    <View
      className="relative min-h-[92px] flex-1 items-center rounded-2xl px-1 py-3"
      style={[
        profileStyles.badgeCard,
        achievement.unlocked ? profileStyles.badgeCardUnlocked : undefined,
        !achievement.unlocked ? styles.locked : undefined,
      ]}
    >
      <AppText className="text-2xl">{achievement.emoji}</AppText>
      <AppText
        style={[
          profileStyles.badgeTitle,
          achievement.unlocked ? profileStyles.badgeTitleUnlocked : undefined,
        ]}
      >
        {achievement.title}
      </AppText>
      {achievement.progress ? (
        <AppText style={profileStyles.badgeProgress}>{achievement.progress}</AppText>
      ) : null}
      {achievement.unlocked ? (
        <AppText className="absolute right-2 top-2" style={profileStyles.checkmark}>
          ✓
        </AppText>
      ) : null}
    </View>
  );
};

const styles = {
  locked: { opacity: 0.8 },
};
