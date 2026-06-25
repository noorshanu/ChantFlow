import { Pressable, View } from 'react-native';

import { AppText } from '../../../components/ui';
import { cx } from '../../../components/ui/cx';
import { type ReligionOption } from '../types/religion';
import { ReligionSymbol } from './ReligionSymbol';

type ReligionGridCardProps = {
  isSelected: boolean;
  onPress: () => void;
  option: ReligionOption;
};

export const ReligionGridCard = ({
  isSelected,
  onPress,
  option,
}: ReligionGridCardProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: isSelected }}
      className="w-[48%] active:opacity-90"
      onPress={onPress}
    >
      <View
        className={cx(
          'items-center rounded-premium border bg-card/90 px-3 py-5 shadow-premium',
          isSelected ? 'border-gold bg-gold/10' : 'border-premium',
        )}
      >
        <ReligionSymbol id={option.id} />
        <AppText className="mt-3 text-center text-lg" variant="title">
          {option.title}
        </AppText>
        <AppText className="mt-1 text-center text-sm text-goldSecondary">
          {option.practiceLabel}
        </AppText>
      </View>
    </Pressable>
  );
};
