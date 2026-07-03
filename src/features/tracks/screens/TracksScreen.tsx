import { AppCard, AppScreen, AppText } from '../../../components/ui';

export const TracksScreen = () => {
  return (
    <AppScreen contentClassName="justify-center pb-8">
      <AppCard>
        <AppText variant="eyebrow">Tracks</AppText>
        <AppText className="mt-section" variant="title">
          Sacred audio library
        </AppText>
        <AppText className="mt-section">
          Browse mantras, chants, and guided tracks from here.
        </AppText>
      </AppCard>
    </AppScreen>
  );
};
