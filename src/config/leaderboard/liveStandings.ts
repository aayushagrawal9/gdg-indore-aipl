export interface LiveTeam {
  rank: string;
  name: string;
  description: string;
  vibeIndex: number;
  accent: 'secondary' | 'tertiary';
  highlighted?: boolean;
}

export const liveStandings = {
  heading: 'Current Match Standings',
  matchId: 'MATCH ID: PPL-992-B',
  teams: [
    {
      rank: '01',
      name: 'Team Neural Nexus',
      description: 'Prompt Engineering Experts',
      vibeIndex: 89.4,
      accent: 'secondary',
      highlighted: true,
    },
    {
      rank: '02',
      name: 'The Silicon Raiders',
      description: 'Security Research Collective',
      vibeIndex: 82.1,
      accent: 'tertiary',
    },
  ] satisfies LiveTeam[],
};
