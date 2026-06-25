import { type ReactNode } from 'react';
import { Text, type TextProps } from 'react-native';

import { cx } from './cx';

type AppTextVariant = 'eyebrow' | 'hero' | 'title' | 'body' | 'button';

type AppTextProps = TextProps & {
  children: ReactNode;
  variant?: AppTextVariant;
};

const variantClassNameMap: Record<AppTextVariant, string> = {
  eyebrow: 'text-xs font-semibold uppercase tracking-[2px] text-goldSecondary',
  hero: 'text-hero text-textPrimary',
  title: 'text-title text-textPrimary',
  body: 'text-body text-muted',
  button: 'text-base font-semibold text-background',
};

export const AppText = ({
  children,
  className,
  variant = 'body',
  ...props
}: AppTextProps) => {
  return (
    <Text className={cx(variantClassNameMap[variant], className)} {...props}>
      {children}
    </Text>
  );
};
