import { AppCard, AppScreen, AppText } from '../../../components/ui';

export const HomeScreen = () => {
  return (
    <AppScreen>
      <AppCard>
        <AppText variant="eyebrow">Home</AppText>
        <AppText className="mt-section" variant="title">
          Step 5 Ready
        </AppText>
        <AppText className="mt-section">
          Typed navigation and reusable UI primitives are integrated. Next step
          is building onboarding and religion-selection feature modules.
        </AppText>
      </AppCard>
    </AppScreen>
  );
};
