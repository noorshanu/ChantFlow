import { StyleSheet, View } from 'react-native';

import { AppText } from '../../../components/ui';
import { COLOR_TOKENS } from '../../../app/theme/tokens';
import { ReligionSymbol } from '../../religion/components/ReligionSymbol';
import { type ReligionId } from '../../religion/types/religion';
import {
  PROFILE_DISPLAY_NAME,
  PROFILE_STATS,
} from '../constants/profileContent';
import { profileStyles } from '../theme/profileStyles';

type ProfileStatsCardProps = {
  traditionId: ReligionId;
};

const STAT_ITEMS = [
  { key: 'today', label: 'TODAY', value: PROFILE_STATS.today },
  { key: 'lifetime', label: 'LIFETIME', value: PROFILE_STATS.lifetime },
  { key: 'streak', label: 'DAY STREAK', value: PROFILE_STATS.dayStreak },
] as const;

export const ProfileStatsCard = ({ traditionId }: ProfileStatsCardProps) => {
  return (
    <View className="items-center" style={profileStyles.card}>
      <View
        style={[
          styles.avatarRing,
          {
            backgroundColor: COLOR_TOKENS.card,
            borderColor: 'rgba(214, 178, 94, 0.5)',
          },
        ]}
      >
        <ReligionSymbol id={traditionId} size={52} />
      </View>

      <View className="mt-4 flex-row items-center gap-2">
        <AppText className="text-xl font-bold" style={profileStyles.userName}>
          {PROFILE_DISPLAY_NAME}
        </AppText>
        <AppText className="text-lg">📿</AppText>
      </View>

      <View className="mt-6 w-full flex-row">
        {STAT_ITEMS.map((item, index) => (
          <View
            className="flex-1 items-center"
            key={item.key}
            style={index > 0 ? profileStyles.statDivider : undefined}
          >
            <AppText style={profileStyles.statValue}>{item.value}</AppText>
            <AppText style={profileStyles.statLabel}>{item.label}</AppText>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarRing: {
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 2,
    height: 96,
    justifyContent: 'center',
    width: 96,
  },
});
