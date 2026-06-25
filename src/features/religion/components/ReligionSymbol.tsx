import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { COLOR_TOKENS } from '../../../app/theme/tokens';
import { type ReligionId } from '../types/religion';

type ReligionSymbolProps = {
  id: ReligionId;
  size?: number;
};

const GOLD = COLOR_TOKENS.gold;

export const ReligionSymbol = ({ id, size = 36 }: ReligionSymbolProps) => {
  switch (id) {
    case 'hindu':
      return (
        <Svg height={size} viewBox="0 0 48 48" width={size}>
          <Path
            d="M24 6c-2 8-8 12-8 18s6 12 14 12 14-6 14-12-6-10-8-18"
            fill="none"
            stroke={GOLD}
            strokeWidth={2}
          />
          <Circle cx={24} cy={30} r={3} fill={GOLD} />
        </Svg>
      );
    case 'muslim':
      return (
        <Svg height={size} viewBox="0 0 48 48" width={size}>
          <Path
            d="M10 30c0-8 6-14 14-14s14 6 14 14"
            fill="none"
            stroke={GOLD}
            strokeWidth={2}
          />
          <Path d="M38 18l4-2v4l-4-2z" fill={GOLD} />
        </Svg>
      );
    case 'christian':
      return (
        <Svg height={size} viewBox="0 0 48 48" width={size}>
          <Rect fill={GOLD} height={22} width={4} x={22} y={10} />
          <Rect fill={GOLD} height={4} width={18} x={15} y={18} />
        </Svg>
      );
    case 'sikh':
      return (
        <Svg height={size} viewBox="0 0 48 48" width={size}>
          <Circle
            cx={24}
            cy={24}
            fill="none"
            r={14}
            stroke={GOLD}
            strokeWidth={2}
          />
          <Path d="M24 10v28M10 24h28" stroke={GOLD} strokeWidth={2} />
        </Svg>
      );
    case 'jain':
      return (
        <Svg height={size} viewBox="0 0 48 48" width={size}>
          <Path
            d="M24 8v32M14 18h20M14 30h20"
            fill="none"
            stroke={GOLD}
            strokeWidth={2}
          />
        </Svg>
      );
    case 'buddhist':
      return (
        <Svg height={size} viewBox="0 0 48 48" width={size}>
          <Circle
            cx={24}
            cy={24}
            fill="none"
            r={14}
            stroke={GOLD}
            strokeWidth={2}
          />
          <Circle cx={24} cy={24} fill={GOLD} r={4} />
          <Rect fill={GOLD} height={3} width={3} x={10} y={22} />
          <Rect fill={GOLD} height={3} width={3} x={35} y={22} />
        </Svg>
      );
    default:
      return null;
  }
};
