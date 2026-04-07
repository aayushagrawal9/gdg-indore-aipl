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
      teams: 'RR vs RCB',
      date: '10 April 2026',
      status: 'upcoming',
      ctaLabel: 'Register for Watch Party',
    },
  ] satisfies ScheduleMatch[],
};
