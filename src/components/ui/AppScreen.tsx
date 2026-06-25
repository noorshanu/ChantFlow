import { type ReactNode } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import { cx } from './cx';
import { ScreenGradient } from './ScreenGradient';
import { COLOR_TOKENS } from '../../app/theme/tokens';

type AppScreenProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: 'solid' | 'gradient';
};

export const AppScreen = ({
  children,
  className,
  contentClassName,
  variant = 'gradient',
}: AppScreenProps) => {
  const content = (
    <View className={cx('flex-1 px-screenX pt-screenTop', contentClassName)}>
      {children}
    </View>
  );

  return (
    <View className={className} style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR_TOKENS.background} />
      {variant === 'gradient' ? (
        <ScreenGradient>{content}</ScreenGradient>
      ) : (
        content
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLOR_TOKENS.background,
    flex: 1,
  },
});
