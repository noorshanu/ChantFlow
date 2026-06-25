import { Pressable, View } from 'react-native';

import { AppText } from './AppText';
import { cx } from './cx';

type AppSelectionCardProps = {
  description: string;
  onPress: () => void;
  title: string;
};

export const AppSelectionCard = ({
  description,
  onPress,
  title,
}: AppSelectionCardProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      className="w-[48%] active:opacity-90"
      onPress={onPress}
    >
      <View className={cx('rounded-premium border border-premium bg-card/90 p-4')}>
        <AppText variant="title">{title}</AppText>
        <AppText className="mt-2 text-sm" variant="body">
          {description}
        </AppText>
      </View>
    </Pressable>
  );
};
