export type ScheduleStatus = 'upcoming' | 'completed';

export interface ScheduleMatch {
  teams: string;
  date: string;
  status: ScheduleStatus;
  ctaLabel: string;
  ctaHref: string;
}

export const schedule = {
  eyebrow: 'The Schedule',
  heading: 'Upcoming Innings',
  matches: [
    {
      teams: 'LSG vs RR',
      date: '22nd April 2026',
      status: 'upcoming',
      ctaLabel: 'Register for Watch Party',
      ctaHref: '/register'
    },
    {
      teams: 'LSG vs GT',
      date: '12th April 2026',
      status: 'completed',
      ctaLabel: 'Register for Watch Party',
      ctaHref: '/register'
    },
    {
      teams: 'KRIYETA 5.0 36hrs Women lead National level hackathon',
      date: '17th-18th-19th April 2026',
      status: 'completed',
      ctaLabel: 'Register',
      ctaHref: 'https://unstop.com/hackathons/kriyeta-50-acropolis-institute-of-technology-research-1662045'
    }
    
  ] satisfies ScheduleMatch[],
};
