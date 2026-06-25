import { Pressable, type PressableProps } from 'react-native';

import { AppText } from './AppText';
import { cx } from './cx';

type AppButtonVariant = 'primary' | 'secondary';

type AppButtonProps = Omit<PressableProps, 'children'> & {
  label: string;
  variant?: AppButtonVariant;
};

export const AppButton = ({
  accessibilityRole = 'button',
  className,
  disabled,
  label,
  variant = 'primary',
  ...props
}: AppButtonProps) => {
  const variantClassName =
    variant === 'primary'
      ? 'bg-gold'
      : 'border border-premium bg-card/80';

  const textVariant = variant === 'primary' ? 'button' : 'body';

  return (
    <Pressable
      accessibilityRole={accessibilityRole}
      className={cx(
        'items-center rounded-premium py-4 active:opacity-90',
        variantClassName,
        disabled && 'opacity-50',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      <AppText className={variant === 'secondary' ? 'text-textPrimary' : ''} variant={textVariant}>
        {label}
      </AppText>
    </Pressable>
  );
};
