export type ScheduleStatus = 'upcoming' | 'completed';

export interface ScheduleMatch {
  teams: string;
  date: string;
  status: ScheduleStatus;
  ctaLabel: string;
}

export const schedule = {
  eyebrow: 'The Schedule',
  heading: 'Upcoming Innings',
  matches: [
    {
      teams: 'MI vs CSK',
      date: 'May 24, 2024 • 7:30 PM',
      status: 'upcoming',
      ctaLabel: 'Register for Watch Party',
    },
    {
      teams: 'RCB vs KKR',
      date: 'May 18, 2024 • 7:30 PM',
      status: 'completed',
      ctaLabel: 'View Recap',
    },
    {
      teams: 'GT vs SRH',
      date: 'May 28, 2024 • 7:30 PM',
      status: 'upcoming',
      ctaLabel: 'Register for Watch Party',
    },
  ] satisfies ScheduleMatch[],
};
