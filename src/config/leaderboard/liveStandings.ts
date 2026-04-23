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
    name: 'Devesh Talreja',
    vibeIndex: 27,
    description: 'Gambit',
    repoLink: 'https://github.com/devesh-talreja/CricketPulse-Ai'
  },
  {
    rank: '02',
    name: 'Ayush Shinde',
    vibeIndex: 26,
    description: 'Crowd Pulse',
    repoLink: 'https://github.com/theayushshinde/crowd-pulse'
  },
  {
    rank: '03',
    name: 'Cyber-squad',
    vibeIndex: 25,
    description: 'Crowd Pulse Real-Time',
    repoLink: 'https://github.com/Aniket1603/crowd-pulse'
  },
  {
    rank: '04',
    name: 'Pushpraj Singhal',
    vibeIndex: 25,
    description: 'Crowd Pulse Real-Time',
    repoLink: 'https://github.com/pushprajsinghal/crowd-Pulse-'
  },
  {
    rank: '05',
    name: 'Munish Jain',
    vibeIndex: 25,
    description: 'Crowd Pulse',
    repoLink: 'https://github.com/munishhhh/Projectt'
  },
  {
    rank: '06',
    name: 'Hustlers',
    vibeIndex: 23,
    description: 'CricGraph',
    repoLink: 'https://github.com/KrishnaG-101/IPL-Knowledge'
  },
  {
    rank: '07',
    name: 'Bhartiya Janta Party',
    vibeIndex: 22,
    description: 'CricPulse',
    repoLink: 'https://github.com/YusufMali001/CricPulse'
  },
  {
    rank: '08',
    name: 'Rizwan Sheikh',
    vibeIndex: 21,
    description: 'Crowd',
    repoLink: 'https://github.com/Rizwan050505/GDG-APL-'
  },
  {
    rank: '09',
    name: 'Meet Agrawal',
    vibeIndex: 20,
    description: 'Crowd-Pulse',
    repoLink: 'https://github.com/meetagrawal8989-cmyk/crow'
  },
  {
    rank: '10',
    name: 'Krishna Nema',
    vibeIndex: 19,
    description: 'Live Tactile Analysis',
    repoLink: 'https://github.com/Krish09112004/apl-2'
  },
  {
    rank: '11',
    name: 'Siddhi Khatri',
    vibeIndex: 17,
    description: '',
    repoLink: ''
  },
  {
    rank: '12',
    name: 'Havoc Breakers',
    vibeIndex: 17,
    description: 'Roargraph',
    repoLink: 'https://github.com/APL-Heavok-Wreakers/roargraph'
  },
  {
    rank: '13',
    name: 'Vivek Vishwakarma',
    vibeIndex: 15,
    description: 'Crowd Pulse Real-Time',
    repoLink: 'https://github.com/Vivek-2004V/CrowdPulse.git'
  },
  {
    rank: '14',
    name: 'Quantum Arcade',
    vibeIndex: 14,
    description: 'Crowd Pulse',
    repoLink: 'https://github.com/ashudotdev/apl_gdg'
  },
  {
    rank: '15',
    name: 'Imaginary Thinkers',
    vibeIndex: 13,
    description: 'Tactic Graph',
    repoLink: ''
  },
  {
    rank: '16',
    name: 'Devansh Kumar Patidar',
    vibeIndex: 9,
    description: 'Cricket Tactics',
    repoLink: 'https://github.com/DKP-RGB/cricket-tactics'
  },
  {
    rank: '17',
    name: 'Prajwal Singh',
    vibeIndex: 20,
    description: 'Crickty',
    repoLink: 'https://github.com/Mango-Piety/apl-crickty'
  },
  {
    rank: '18',
    name: 'Fellow Dev',
    vibeIndex: 21,
    description: 'Crowd Pulse Real-Time',
    repoLink: 'https://github.com/neeraj5050/APL-22'
  },
  {
    rank: '19',
    name: 'Xcode',
    vibeIndex: 7,
    description: 'ipl22',
    repoLink: 'https://github.com/namdevdivyansh406/ip22.git'
  },
  {
    rank: '20',
    name: 'Aagam',
    vibeIndex: 5,
    description: 'apl predictor',
    repoLink: 'https://github.com/aagamjain-art/APL-Predictor'
  }

  ] satisfies LiveTeam[],
};
