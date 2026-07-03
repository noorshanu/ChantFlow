export const PROFILE_DISPLAY_NAME = 'Spiritual Seeker';

export const PROFILE_STATS = {
  dayStreak: 3,
  lifetime: 10,
  today: 4,
} as const;

export const DAILY_GOAL = {
  current: 4,
  target: 108,
} as const;

export type AchievementItem = {
  emoji: string;
  id: string;
  progress?: string;
  title: string;
  unlocked: boolean;
};

export const ACHIEVEMENTS: AchievementItem[] = [
  { id: 'first-japa', title: 'First Japa', emoji: '🌱', unlocked: true },
  {
    id: '108-club',
    title: '108 Club',
    emoji: '📿',
    progress: '10/108',
    unlocked: false,
  },
  {
    id: '1k-chants',
    title: '1K Chants',
    emoji: 'ॐ',
    progress: '10/1,000',
    unlocked: false,
  },
  {
    id: '7-day-streak',
    title: '7-Day Streak',
    emoji: '🔥',
    progress: '3/7',
    unlocked: false,
  },
  {
    id: '10k-chants',
    title: '10K Chants',
    emoji: '💎',
    progress: '10/10,000',
    unlocked: false,
  },
  {
    id: '1-lakh',
    title: '1 Lakh',
    emoji: '🏆',
    progress: '10/100,000',
    unlocked: false,
  },
];
