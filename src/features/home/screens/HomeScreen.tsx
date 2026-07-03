import { AppCard, AppScreen, AppText } from '../../../components/ui';

export const HomeScreen = () => {
  return (
    <AppScreen contentClassName="pb-8">
      <AppText variant="eyebrow">Today</AppText>
      <AppText className="mt-2" variant="title">
        Your Sacred Practice
      </AppText>
      <AppText className="mt-2 text-muted">
        Begin your chant session or review your journey from the home dashboard.
      </AppText>

      <AppCard className="mt-8">
        <AppText variant="eyebrow">Quick start</AppText>
        <AppText className="mt-section" variant="title">
          Ready to chant
        </AppText>
        <AppText className="mt-section">
          Your personalized practice space will appear here as we build out the
          core chanting experience.
        </AppText>
      </AppCard>
    </AppScreen>
  );
};
