import { StyleSheet, View } from 'react-native';

import { AppText } from '../../../components/ui';
import { COLOR_TOKENS } from '../../../app/theme/tokens';
import { DAILY_GOAL } from '../constants/profileContent';
import { profileStyles } from '../theme/profileStyles';

export const DailyGoalCard = () => {
  const remaining = DAILY_GOAL.target - DAILY_GOAL.current;
  const progress = DAILY_GOAL.current / DAILY_GOAL.target;

  return (
    <View className="mt-6" style={profileStyles.card}>
      <View className="flex-row items-center justify-between">
        <AppText style={profileStyles.goalTitle}>Daily Goal</AppText>
        <View className="flex-row items-center gap-1">
          <AppText style={profileStyles.goalTarget}>{DAILY_GOAL.target}</AppText>
          <AppText className="text-base">📿</AppText>
        </View>
      </View>

      <AppText style={profileStyles.goalMeta}>
        {DAILY_GOAL.current} / {DAILY_GOAL.target} today
      </AppText>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${Math.max(progress * 100, 4)}%` }]} />
      </View>

      <AppText style={profileStyles.goalRemaining}>
        {remaining} chants remaining
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    backgroundColor: COLOR_TOKENS.gold,
    borderRadius: 999,
    height: '100%',
  },
  track: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 999,
    height: 8,
    marginTop: 12,
    overflow: 'hidden',
  },
});
