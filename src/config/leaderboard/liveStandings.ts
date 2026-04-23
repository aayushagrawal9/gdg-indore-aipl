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
  teams: [
  {
    rank: '01',
    name: 'Devesh Talreja',
    vibeIndex: 27,
    description: 'Gambit',
    highlighted: true,
    accent: 'secondary',
    repoLink: 'https://github.com/devesh-talreja/CricketPulse-Ai'
  },
  {
    rank: '02',
    name: 'Ayush Shinde',
    vibeIndex: 26,
    description: 'Crowd Pulse',
    highlighted: false,
    accent: 'tertiary',
    repoLink: 'https://github.com/theayushshinde/crowd-pulse'
  },
  {
    rank: '03',
    name: 'BJP',
    vibeIndex: 26,
    description: 'Bhartiya Janta Party (BJP)',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '04',
    name: 'Pushparaj Singhal',
    vibeIndex: 25,
    description: 'Crowd Pulse Real-Time',
    highlighted: false,
    accent: 'tertiary',
    repoLink: 'https://github.com/pushprajsinghal/crowd-Pulse-'
  },
  {
    rank: '05',
    name: 'Munish Jain',
    vibeIndex: 25,
    description: 'Crowd Pulse',
    highlighted: false,
    accent: 'tertiary',
    repoLink: 'https://github.com/munishhhh/Projectt'
  },
  {
    rank: '06',
    name: 'Build Algos',
    vibeIndex: 24,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '07',
    name: 'Codex',
    vibeIndex: 24,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '08',
    name: 'Cyber-squad',
    vibeIndex: 25,
    description: 'Crowd Pulse Real-Time',
    highlighted: false,
    accent: 'tertiary',
    repoLink: 'https://github.com/Aniket1603/crowd-pulse'
  },
  {
    rank: '09',
    name: 'Team ethics',
    vibeIndex: 23,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '10',
    name: 'Kushagra misra',
    vibeIndex: 23,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: 'https://github.com/kush-mish/pitchside'
  },
  {
    rank: '11',
    name: 'StadiumPulse',
    vibeIndex: 23,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '12',
    name: 'Devesh talreja',
    vibeIndex: 24,
    description: 'GraphOracle',
    highlighted: false,
    accent: 'tertiary',
    repoLink: 'https://github.com/devesh-talreja/GraphOracle'
  },
  {
    rank: '13',
    name: 'Ethics',
    vibeIndex: 22,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '14',
    name: 'Samyak choudhary',
    vibeIndex: 22,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '15',
    name: 'Hustlers',
    vibeIndex: 21,
    description: 'CricGraph',
    highlighted: false,
    accent: 'tertiary',
    repoLink: 'https://github.com/KrishnaG-101/IPL-Knowledge'
  },
  {
    rank: '16',
    name: 'Faluda',
    vibeIndex: 21,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '17',
    name: 'Byte Avengers',
    vibeIndex: 17,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: 'https://github.com/BikalpShukla/Cricfanvibes.git'
  },
  {
    rank: '18',
    name: 'Rockcode',
    vibeIndex: 17,
    description: '',
    highlighted: false,
    accent: 'tertiary',
    repoLink: ''
  }
  ] satisfies LiveTeam[],
};
