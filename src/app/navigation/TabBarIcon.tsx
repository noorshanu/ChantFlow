import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { COLOR_TOKENS } from '../../app/theme/tokens';

export type TabIconName =
  | 'home'
  | 'nowPlaying'
  | 'tracks'
  | 'mindBell'
  | 'profile';

type TabBarIconProps = {
  color: string;
  name: TabIconName;
  size?: number;
};

export const TabBarIcon = ({ color, name, size = 22 }: TabBarIconProps) => {
  switch (name) {
    case 'home':
      return (
        <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
          <Path
            d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"
            stroke={color}
            strokeLinejoin="round"
            strokeWidth={1.8}
          />
        </Svg>
      );
    case 'nowPlaying':
      return (
        <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
          <Path
            d="M8 20V8l8-3v12M6 18h2M16 15h2"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
          />
        </Svg>
      );
    case 'tracks':
      return (
        <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
          <Circle cx={12} cy={12} r={8} stroke={color} strokeWidth={1.8} />
          <Path
            d="M12 8v4l3 2"
            stroke={color}
            strokeLinecap="round"
            strokeWidth={1.8}
          />
        </Svg>
      );
    case 'mindBell':
      return (
        <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
          <Path
            d="M12 4a4 4 0 0 1 4 4v2.5c1.2.6 2 1.8 2 3.2V16H6v-2.3c0-1.4.8-2.6 2-3.2V8a4 4 0 0 1 4-4z"
            stroke={color}
            strokeLinejoin="round"
            strokeWidth={1.8}
          />
          <Path d="M10 18h4" stroke={color} strokeLinecap="round" strokeWidth={1.8} />
        </Svg>
      );
    case 'profile':
      return (
        <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
          <Circle cx={12} cy={9} r={3.5} stroke={color} strokeWidth={1.8} />
          <Path
            d="M6 20c1.2-3 3.4-4.5 6-4.5s4.8 1.5 6 4.5"
            stroke={color}
            strokeLinecap="round"
            strokeWidth={1.8}
          />
        </Svg>
      );
    default:
      return <Rect fill={COLOR_TOKENS.muted} height={size} width={size} />;
  }
};
