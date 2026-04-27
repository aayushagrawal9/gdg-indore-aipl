export type ScheduleStatus = 'live' | 'upcoming' | 'completed';

export interface FullMatch {
  matchLabel: string;
  statusLabel: string;
  teamA: { initials: string; name: string };
  teamB: { initials: string; name: string };
  time: string;
  location: string;
  cta: { label: string; variant: 'solid' | 'outline' };
  tab: ScheduleStatus;
  highlighted?: boolean;
}

export const fullSchedule = {
  heading: 'Match Schedule',
  tabs: [
    { label: 'Completed', value: 'completed' as const },
  ],
  matches: [
    {
      matchLabel: 'AIPL Event 2 • LSG vs RR',
      statusLabel: '22 April',
      teamA: { initials: 'LSG', name: 'Lucknow Super Giants' },
      teamB: { initials: 'RR', name: 'Rajasthan Royals' },
      time: '19:00 GMT+5:30',
      location: 'Hopin Patio Cafe, Indore',
      cta: { label: 'View Results', variant: 'solid' },
      tab: 'completed',
      highlighted: true,
    },
    {
      matchLabel: 'AIPL Event 1 • LSG vs GT',
      statusLabel: '12 April',
      teamA: { initials: 'LSG', name: 'Lucknow Super Giants' },
      teamB: { initials: 'GT', name: 'Gujarat Titans' },
      time: '15:30 GMT+5:30',
      location: 'Hopin Patio Cafe, Indore',
      cta: { label: 'View Results', variant: 'solid' },
      tab: 'completed',
    },
  ] satisfies FullMatch[],
};
