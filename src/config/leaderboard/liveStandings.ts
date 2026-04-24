export interface LiveTeam {
  rank: string;
  name: string;
  description: string;
  vibeIndex: number;
  accent?: 'secondary' | 'tertiary';
  highlighted?: boolean;
  repoLink: string;
}

export const liveStandings = {
  heading: 'Current Scoreboard',
  matchId: 'Total Ranking',
  teams: 
  [
  {
    rank: '01',
    name: 'Crowd Pulse',
    vibeIndex: 26,
    description: 'Crowd Pulse',
    accent: 'secondary',
    repoLink: 'https://github.com/theayushshinde/crowd-pulse'
  },
    {
    rank: '02',
    name: 'Bhartiya Janta Party',
    vibeIndex: 26,
    description: '(BJP)',
    accent: 'tertiary',
    repoLink: ''
  },
    {
    rank: '03',
    name: 'Devesh Talreja',
    vibeIndex: 25.5,
    description: 'Gambit',
    accent: 'tertiary',
    repoLink: 'https://github.com/devesh-talreja/CricketPulse-Ai'
  },
  {
    rank: '04',
    name: 'Munish Jain',
    vibeIndex: 25,
    description: 'Crowd Pulse',
    accent: 'tertiary',
    repoLink: 'https://github.com/munishhhh/Projectt'
  },
  {
    rank: '05',
    name: 'Hustlers',
    vibeIndex: 23,
    description: 'CricGraph',
    accent: 'tertiary',
    repoLink: 'https://github.com/KrishnaG-101/IPL-Knowledge'
  },
  {
    rank: '06',
    name: 'Rizwan Sheikh',
    vibeIndex: 21,
    description: 'Crowd',
    accent: 'tertiary',
    repoLink: 'https://github.com/Rizwan050505/GDG-APL-'
  },
  {
    rank: '07',
    name: 'Meet Agrawal',
    vibeIndex: 20,
    description: 'Crowd-Pulse',
    accent: 'tertiary',
    repoLink: 'https://github.com/meetagrawal8989-cmyk/crow'
  },
  {
    rank: '08',
    name: 'Krishna Nema',
    vibeIndex: 19,
    description: 'Live Tactile Analysis',
    accent: 'tertiary',
    repoLink: 'https://github.com/Krish09112004/apl-2'
  },
  {
    rank: '09',
    name: 'Siddhi Khatri',
    vibeIndex: 17,
    description: '',
    repoLink: '',
    accent: 'tertiary',
  },
  {
    rank: '10',
    name: 'Havoc Breakers',
    vibeIndex: 17,
    description: 'Roargraph',
    accent: 'tertiary',
    repoLink: 'https://github.com/APL-Heavok-Wreakers/roargraph'
  },
  {
    rank: '11',
    name: 'Vivek Vishwakarma',
    vibeIndex: 15,
    description: 'Crowd Pulse Real-Time',
    accent: 'tertiary',
    repoLink: 'https://github.com/Vivek-2004V/CrowdPulse.git'
  },
  {
    rank: '12',
    name: 'Quantum Arcade',
    vibeIndex: 14,
    description: 'Crowd Pulse',
    accent: 'tertiary',
    repoLink: 'https://github.com/ashudotdev/apl_gdg'
  },
  {
    rank: '13',
    name: 'Imaginary Thinkers',
    vibeIndex: 13,
    description: 'Tactic Graph',
    repoLink: '',
    accent: 'tertiary'
  },
  {
    rank: '14',
    name: 'Devansh Kumar Patidar',
    vibeIndex: 9,
    description: 'Cricket Tactics',
    accent: 'tertiary',
    repoLink: 'https://github.com/DKP-RGB/cricket-tactics'
  },
  {
    rank: '15',
    name: 'Prajwal Singh',
    vibeIndex: 20,
    description: 'Crickty',
    accent: 'tertiary',
    repoLink: 'https://github.com/Mango-Piety/apl-crickty'
  },
  {
    rank: '16',
    name: 'Fellow Dev',
    vibeIndex: 21,
    description: 'Crowd Pulse Real-Time',
    accent: 'tertiary',
    repoLink: 'https://github.com/neeraj5050/APL-22'
  },
  {
    rank: '17',
    name: 'Xcode',
    vibeIndex: 7,
    description: 'ipl22',
    accent: 'tertiary',
    repoLink: 'https://github.com/namdevdivyansh406/ip22.git'
  },
  {
    rank: '18',
    name: 'Aagam',
    vibeIndex: 5,
    description: 'apl predictor',
    accent: 'tertiary',
    repoLink: 'https://github.com/aagamjain-art/APL-Predictor'
  }

  ] satisfies LiveTeam[],
};
