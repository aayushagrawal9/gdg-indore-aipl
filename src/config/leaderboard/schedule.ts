export type ScheduleStatus = 'live' | 'upcoming' | 'completed';

export interface FullMatch {
  matchLabel: string; // e.g. "MATCH 12 • QUALIFIER"
  statusLabel: string; // e.g. "LIVE NOW", "TOMORROW", "24 OCT"
  teamA: { initials: string; name: string };
  teamB: { initials: string; name: string };
  time: string;
  location: string;
  cta: { label: string; variant: 'solid' | 'outline' };
  tab: ScheduleStatus;
  highlighted?: boolean; // LIVE NOW
}

export const fullSchedule = {
  heading: 'Full Match Schedule',
  tabs: [
    { label: 'Upcoming', value: 'upcoming' as const },
    { label: 'Completed', value: 'completed' as const },
  ],
  matches: [
    {
      matchLabel: 'IPL Match',
      statusLabel: '12 April',
      teamA: { initials: 'LSG', name: '' },
      teamB: { initials: 'GT', name: '' },
      time: '15:30 GMT+3:30',
      location: 'Hopin Patio Cafe, Indore',
      cta: { label: 'View Results', variant: 'solid' },
      tab: 'completed',
      highlighted: true,
    },
    // {
    //   matchLabel: 'MATCH 13 • ELIMINATOR',
    //   statusLabel: 'TOMORROW',
    //   teamA: { initials: 'BC', name: 'Byte Coders' },
    //   teamB: { initials: 'GT', name: 'GIGA TOKENS' },
    //   time: '09:00 GMT+5:30',
    //   location: 'Hall B, Indore',
    //   cta: { label: 'Register To Watch', variant: 'outline' },
    //   tab: 'upcoming',
    // },
    // {
    //   matchLabel: 'MATCH 14 • EXHIBITION',
    //   statusLabel: '24 OCT',
    //   teamA: { initials: 'AI', name: 'AI Mavericks' },
    //   teamB: { initials: 'LM', name: 'Logic Masters' },
    //   time: '18:00 GMT+5:30',
    //   location: 'Arena North',
    //   cta: { label: 'Register To Watch', variant: 'outline' },
    //   tab: 'upcoming',
    // },
    // {
    //   matchLabel: 'MATCH 11 • LEAGUE',
    //   statusLabel: '18 OCT',
    //   teamA: { initials: 'PK', name: 'PromptKings' },
    //   teamB: { initials: 'DR', name: 'Data Rangers' },
    //   time: '20:00 GMT+5:30',
    //   location: 'Main Hall, Indore',
    //   cta: { label: 'View Recap', variant: 'solid' },
    //   tab: 'completed',
    // },
  ] satisfies FullMatch[],
};
