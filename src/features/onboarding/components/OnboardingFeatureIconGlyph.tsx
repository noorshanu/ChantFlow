import Svg, { Path } from 'react-native-svg';

import { COLOR_TOKENS } from '../../../app/theme/tokens';
import { type OnboardingFeatureIcon } from '../constants/onboardingContent';

type OnboardingFeatureIconProps = {
  name: OnboardingFeatureIcon;
  size?: number;
};

const GOLD = COLOR_TOKENS.gold;

export const OnboardingFeatureIconGlyph = ({
  name,
  size = 22,
}: OnboardingFeatureIconProps) => {
  switch (name) {
    case 'hands':
      return (
        <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
          <Path
            d="M8 11V8.5a1.5 1.5 0 0 1 3 0V11m0-2.5a1.5 1.5 0 0 1 3 0V11m0-2.5a1.5 1.5 0 0 1 3 0V12c0 4-2.5 6.5-6 8-3.5-1.5-6-4-6-8V9.5a1.5 1.5 0 0 1 3 0V11"
            stroke={GOLD}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
          />
        </Svg>
      );
    case 'heart':
      return (
        <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
          <Path
            d="M12 19s-6.5-4.2-8.2-7.4C2.4 9.1 3.6 6 6.6 6c1.7 0 3 1 3.6 2.1C10.8 7 12.1 6 13.8 6c3 0 4.2 3.1 2.8 5.6C18.5 14.8 12 19 12 19z"
            stroke={GOLD}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
          />
        </Svg>
      );
    case 'star':
      return (
        <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
          <Path
            d="M12 3l1.2 3.8 3.8 1.2-3.8 1.2L12 13l-1.2-3.8-3.8-1.2 3.8-1.2L12 3zm0 8.5l.9 2.8 2.8.9-2.8.9L12 18.5l-.9-2.8-2.8-.9 2.8-.9L12 11.5z"
            stroke={GOLD}
            strokeLinejoin="round"
            strokeWidth={1.4}
          />
        </Svg>
      );
    default:
      return null;
  }
};
