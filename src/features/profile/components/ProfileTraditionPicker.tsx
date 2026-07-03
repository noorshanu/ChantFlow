import { Pressable, ScrollView, View } from 'react-native';

import { AppText } from '../../../components/ui';
import { ReligionSymbol } from '../../religion/components/ReligionSymbol';
import { RELIGION_OPTIONS } from '../../religion/services/religionOptions';
import { type ReligionId } from '../../religion/types/religion';
import { profileStyles } from '../theme/profileStyles';

type ProfileTraditionPickerProps = {
  isSelected: (id: ReligionId) => boolean;
  onSelect: (id: ReligionId) => void;
};

export const ProfileTraditionPicker = ({
  isSelected,
  onSelect,
}: ProfileTraditionPickerProps) => {
  return (
    <View className="mt-6">
      <AppText style={profileStyles.sectionEyebrow}>RELIGION & TRADITION</AppText>

      <View style={profileStyles.card}>
        <AppText style={profileStyles.traditionLabel}>Tradition</AppText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-3">
            {RELIGION_OPTIONS.map(option => {
              const selected = isSelected(option.id);

              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                  className="items-center justify-center active:opacity-90"
                  key={option.id}
                  onPress={() => onSelect(option.id)}
                  style={[
                    profileStyles.traditionChip,
                    selected ? profileStyles.traditionChipSelected : undefined,
                  ]}
                >
                  <ReligionSymbol id={option.id} size={32} />
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
