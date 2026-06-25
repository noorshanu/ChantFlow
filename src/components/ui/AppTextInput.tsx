import { TextInput, type TextInputProps, View } from 'react-native';

import { AppText } from './AppText';
import { cx } from './cx';

type AppTextInputProps = TextInputProps & {
  error?: string;
  label: string;
};

export const AppTextInput = ({
  className,
  error,
  label,
  ...props
}: AppTextInputProps) => {
  return (
    <View>
      <AppText className="mb-2" variant="eyebrow">
        {label}
      </AppText>
      <TextInput
        className={cx(
          'rounded-premium border border-premium bg-card/80 px-4 py-4 text-base text-textPrimary',
          error ? 'border-goldSecondary' : '',
          className,
        )}
        placeholderTextColor="#9AA4B2"
        {...props}
      />
      {error ? (
        <AppText className="mt-2 text-goldSecondary" variant="body">
          {error}
        </AppText>
      ) : null}
    </View>
  );
};
