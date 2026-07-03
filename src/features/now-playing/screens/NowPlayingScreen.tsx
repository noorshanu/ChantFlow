import { AppCard, AppScreen, AppText } from '../../../components/ui';

export const NowPlayingScreen = () => {
  return (
    <AppScreen contentClassName="justify-center pb-8">
      <AppCard>
        <AppText variant="eyebrow">Now Playing</AppText>
        <AppText className="mt-section" variant="title">
          Your active chant
        </AppText>
        <AppText className="mt-section">
          Live session controls and progress will appear here.
        </AppText>
      </AppCard>
    </AppScreen>
  );
};
