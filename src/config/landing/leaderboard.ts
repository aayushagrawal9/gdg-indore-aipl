export interface LeaderboardEntry {
  rank: number;
  name: string;
  project: string;
  vibePoints: number;
  avatar: string;
  avatarAlt: string;
}

export const leaderboard = {
  eyebrow: 'The Rankings',
  heading: 'The Scoreboard',
  tabs: ['Overall Season Rankings', 'Match-by-Match Top 3'],
  entries: [
    {
      rank: 1,
      name: 'Gamebit',
      project: 'Gamebit',
      vibePoints: 27,
      avatar: '/images/profile-aravind.jpg',
      avatarAlt: 'Portrait of Aravind Sharma',
    },
    {
      rank: 2,
      name: 'BJP',
      project: 'Bhartiya Janta Party (BJP)',
      vibePoints: 26,
      avatar: '/images/profile-priya.jpg',
      avatarAlt: 'Portrait of Priya Patel',
    },
    {
      rank: 3,
      name: 'Pushparaj Singhal',
      project: '',
      vibePoints: 25,
      avatar: '/images/profile-rohan.jpg',
      avatarAlt: 'Portrait of Rohan Verma',
    },
    {
      rank: 4,
      name: 'Munish jain',
      project: '',
      vibePoints: 25,
      avatar: '/images/profile-rohan.jpg',
      avatarAlt: 'Portrait of Rohan Verma',
    },
  ] satisfies LeaderboardEntry[],
};
