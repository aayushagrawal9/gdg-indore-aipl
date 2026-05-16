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
      teams: 'Qualifier 1',
      date: '26th May 2026',
      status: 'upcoming',
      ctaLabel: 'Register',
      ctaHref: 'https://aipl.gdgindore.in/register/'
    },
    {
      teams: 'KKR vs MI',
      date: '20th May 2026',
      status: 'upcoming',
      ctaLabel: 'Register',
      ctaHref: 'https://aipl.gdgindore.in/register/'
    },
    {
      teams: 'LSG vs CSK',
      date: '15th May 2026',
      status: 'completed',
      ctaLabel: 'View Results',
      ctaHref: '/leaderboard'
    },
    {
      teams: 'RCB vs KKR',
      date: '13th May 2026',
      status: 'completed',
      ctaLabel: 'View Results',
      ctaHref: '/leaderboard'
    },
    {
      teams: 'LSG vs RCB',
      date: '7th May 2026',
      status: 'completed',
      ctaLabel: 'View Results',
      ctaHref: '/leaderboard'
    },
    {
      teams: 'RR vs DC',
      date: '1st May 2026',
      status: 'completed',
      ctaLabel: 'View Results',
      ctaHref: '/leaderboard'
    },
    {
      teams: 'LSG vs RR',
      date: '22nd April 2026',
      status: 'completed',
      ctaLabel: 'View Results',
      ctaHref: '/leaderboard'
    },
    {
      teams: 'LSG vs GT',
      date: '12th April 2026',
      status: 'completed',
      ctaLabel: 'View Results',
      ctaHref: '/leaderboard'
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
