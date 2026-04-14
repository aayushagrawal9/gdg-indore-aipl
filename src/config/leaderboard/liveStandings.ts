export interface LiveTeam {
  rank: string;
  name: string;
  description: string;
  vibeIndex: number;
  accent: 'secondary' | 'tertiary';
  highlighted?: boolean;
  repoLink: string;
}

export const liveStandings = {
  heading: 'Current Scoreboard',
  matchId: 'MATCH LSG V/S GT - 12 April 2026',
  teams: [
     {
      rank: '01',
      name: 'Devesh Talreja',
      vibeIndex: 27,
      description: 'Gambit',
      accent: 'secondary',
      highlighted: true,
      repoLink: 'https://github.com/devesh-talreja/CricketPulse-Ai'
    },
    {
      rank: '02',
      name: 'BJP',
      description: 'Bhartiya Janta Party (BJP)',
      vibeIndex: 26,
      accent: 'tertiary',
      repoLink: ''
    },
    {
      rank: '03',
      name: 'Pushparaj Singhal',
      description: '',
      vibeIndex: 25,
      accent: 'tertiary',
      repoLink: 'https://github.com/pushprajsinghal'
    },
    {
    rank: '04',
    name: 'Munish jain',
    description: '',
    vibeIndex: 25,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '05',
    name: 'Build Algos',
    description: '',
    vibeIndex: 24,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '06',
    name: 'Codex',
    description: '',
    vibeIndex: 24,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '07',
    name: 'Team ethics',
    description: '',
    vibeIndex: 23,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '08',
    name: 'Kushagra misra',
    description: '',
    vibeIndex: 23,
    accent: 'tertiary',
    repoLink: 'https://github.com/kush-mish/pitchside'
  },
  {
    rank: '09',
    name: 'StadiumPulse',
    description: '',
    vibeIndex: 23,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '10',
    name: 'Ethics',
    description: '',
    vibeIndex: 22,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '11',
    name: 'Samyak choudhary ',
    description: '',
    vibeIndex: 22,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '12',
    name: 'Hustlers',
    description: '',
    vibeIndex: 21,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '13',
    name: 'Faluda',
    description: '',
    vibeIndex: 21,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '14',
    name: 'Byte Avengers ',
    description: '',
    vibeIndex: 17,
    accent: 'tertiary',
    repoLink: 'https://github.com/BikalpShukla/Cricfanvibes.git'
  },
  {
    rank: '15',
    name: 'Rockcode',
    description: '',
    vibeIndex: 17,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '16',
    name: 'Samyak Choudhary ',
    description: '',
    vibeIndex: 10,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '17',
    name: 'Dropcode ',
    description: '',
    vibeIndex: 9,
    accent: 'tertiary',
    repoLink: ''
  },
  {
    rank: '18',
    name: 'Prajjwal Singh',
    description: 'UP187',
    vibeIndex: 9,
    accent: 'tertiary',
    repoLink: 'https://github.com/Mango-Piety/stadiumpulse'
  }
  ] satisfies LiveTeam[],
};
