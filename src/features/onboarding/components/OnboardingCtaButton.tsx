import { Pressable, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type OnboardingCtaButtonProps = {
  label: string;
  onPress: () => void;
};

const GRADIENT_COLORS = ['#F0D88E', '#D6B25E', '#C4A04E'] as const;

export const OnboardingCtaButton = ({
  label,
  onPress,
}: OnboardingCtaButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
    >
      <LinearGradient
        colors={[...GRADIENT_COLORS]}
        end={{ x: 1, y: 0.5 }}
        start={{ x: 0, y: 0.5 }}
        style={styles.gradient}
      >
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
    borderRadius: 999,
    justifyContent: 'center',
    paddingVertical: 18,
  },
  label: {
    color: '#1E1408',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  pressable: {
    borderRadius: 999,
    overflow: 'hidden',
    width: '100%',
  },
  pressed: {
    opacity: 0.92,
  },
});
