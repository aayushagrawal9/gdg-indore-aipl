export interface LiveTeam {
  rank: string;
  name: string;
  description: string;
  vibeIndex: number;
  accent: 'secondary' | 'tertiary';
  highlighted?: boolean;
}

export const liveStandings = {
  heading: 'Current Scoreboard',
  matchId: 'MATCH LSG V/S GT',
  teams: [
     {
      rank: '01',
      name: 'Devesh Talreja',
      vibeIndex: 27,
      description: 'Gamebit',
      accent: 'secondary',
      highlighted: true
    },
    {
      rank: '02',
      name: 'BJP',
      description: 'Bhartiya Janta Party (BJP)',
      vibeIndex: 26,
      accent: 'tertiary'
    },
    {
      rank: '03',
      name: 'Pushparaj Singhal',
      description: '',
      vibeIndex: 25,
      accent: 'tertiary'
    },
    {
      rank: '04',
      name: 'Munish jain',
      description: '',
      vibeIndex: 25,
      accent: 'tertiary'
    },
  ] satisfies LiveTeam[],
};
