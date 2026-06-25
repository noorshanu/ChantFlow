import { type ReactNode } from 'react';
import { View } from 'react-native';

import { cx } from './cx';

type AppCardProps = {
  children: ReactNode;
  className?: string;
};

export const AppCard = ({ children, className }: AppCardProps) => {
  return (
    <View
      className={cx(
        'rounded-premium border border-premium bg-card/90 p-card shadow-premium',
        className,
      )}
    >
      {children}
    </View>
  );
};
