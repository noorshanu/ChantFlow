import { View } from 'react-native';

import { AppText } from './AppText';
import { cx } from './cx';

type AppDividerProps = {
  className?: string;
  label?: string;
};

export const AppDivider = ({ className, label = 'or' }: AppDividerProps) => {
  return (
    <View className={cx('my-5 flex-row items-center', className)}>
      <View className="h-px flex-1 bg-white/10" />
      <AppText className="mx-4 text-sm uppercase tracking-widest text-muted">
        {label}
      </AppText>
      <View className="h-px flex-1 bg-white/10" />
    </View>
  );
};
