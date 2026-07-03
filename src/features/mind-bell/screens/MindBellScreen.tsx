import { AppCard, AppScreen, AppText } from '../../../components/ui';

export const MindBellScreen = () => {
  return (
    <AppScreen contentClassName="justify-center pb-8">
      <AppCard>
        <AppText variant="eyebrow">Mind Bell</AppText>
        <AppText className="mt-section" variant="title">
          Gentle reminders
        </AppText>
        <AppText className="mt-section">
          Configure mindful bell intervals for your daily practice.
        </AppText>
      </AppCard>
    </AppScreen>
  );
};
