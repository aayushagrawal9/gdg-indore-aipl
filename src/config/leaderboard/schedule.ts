export type ScheduleStatus = 'live' | 'upcoming' | 'completed';

export interface FullMatch {
  matchLabel: string;
  statusLabel: string;
  teamA: { initials: string; name: string };
  teamB: { initials: string; name: string };
  time: string;
  location: string;
  cta: { label: string; variant: 'solid' | 'outline'; href?: string };
  tab: ScheduleStatus;
  highlighted?: boolean;
}

export const fullSchedule = {
  heading: 'Match Schedule',
  tabs: [
    { label: 'Upcoming', value: 'upcoming' as const },
    { label: 'Completed', value: 'completed' as const },
  ],
  matches: [
    {
      matchLabel: 'AIPL Event 3 • RR vs DC',
      statusLabel: '1 May',
      teamA: { initials: 'RR', name: 'Rajasthan Royals' },
      teamB: { initials: 'DC', name: 'Delhi Capitals' },
      time: '18:00 GMT+5:30',
      location: "Murphy's Cafe & Fine Dine, Indore",
      cta: { label: 'Register for Watch Party', variant: 'solid', href: 'https://aipl.gdgindore.in/register/' },
      tab: 'upcoming',
      highlighted: true,
    },
    {
      matchLabel: 'AIPL Event 2 • LSG vs RR',
      statusLabel: '22 April',
      teamA: { initials: 'LSG', name: 'Lucknow Super Giants' },
      teamB: { initials: 'RR', name: 'Rajasthan Royals' },
      time: '19:00 GMT+5:30',
      location: 'Cafe Aroma White, Indore',
      cta: { label: 'View Results', variant: 'solid', href: '#liveStandings' },
      tab: 'completed',
    },
    {
      matchLabel: 'AIPL Event 1 • LSG vs GT',
      statusLabel: '12 April',
      teamA: { initials: 'LSG', name: 'Lucknow Super Giants' },
      teamB: { initials: 'GT', name: 'Gujarat Titans' },
      time: '15:30 GMT+5:30',
      location: 'Hopin Patio Cafe, Indore',
      cta: { label: 'View Results', variant: 'solid', href: '#liveStandings' },
      tab: 'completed',
    },
  ] satisfies FullMatch[],
};
