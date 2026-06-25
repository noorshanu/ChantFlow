import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';

import { type RootStackParamList } from '../../../app/navigation/routeTypes';
import { AppButton, AppScreen, AppText } from '../../../components/ui';
import { ReligionGridCard } from '../components/ReligionGridCard';
import { useReligionSelection } from '../hooks/useReligionSelection';
import {
  RELIGION_OPTIONS,
  RELIGION_SELECTION_SUBTITLE,
} from '../services/religionOptions';

type ReligionSelectionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ReligionSelection'
>;

export const ReligionSelectionScreen = ({
  navigation,
}: ReligionSelectionScreenProps) => {
  const { hasSelection, isSelected, select } = useReligionSelection();

  return (
    <AppScreen contentClassName="pb-10">
      <View className="mb-5">
        <AppText variant="eyebrow">1 of 3</AppText>
        <AppText className="mt-2" variant="title">
          Choose Your Tradition
        </AppText>
        <AppText className="mt-2">{RELIGION_SELECTION_SUBTITLE}</AppText>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between gap-y-4">
          {RELIGION_OPTIONS.map(option => (
            <ReligionGridCard
              isSelected={isSelected(option.id)}
              key={option.id}
              onPress={() => select(option.id)}
              option={option}
            />
          ))}
        </View>
      </ScrollView>

      <AppButton
        accessibilityLabel="Continue with selected tradition"
        className="mt-4"
        disabled={!hasSelection}
        label="Continue"
        onPress={() => navigation.replace('Home')}
      />
    </AppScreen>
  );
};
