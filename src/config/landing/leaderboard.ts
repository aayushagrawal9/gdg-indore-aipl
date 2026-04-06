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
      name: 'Aravind Sharma',
      project: 'Project: CricketInsight AI',
      vibePoints: 12450,
      avatar: '/images/profile-aravind.jpg',
      avatarAlt: 'Portrait of Aravind Sharma',
    },
    {
      rank: 2,
      name: 'Priya Patel',
      project: 'Project: Gemini Overs Analytics',
      vibePoints: 10120,
      avatar: '/images/profile-priya.jpg',
      avatarAlt: 'Portrait of Priya Patel',
    },
    {
      rank: 3,
      name: 'Rohan Verma',
      project: 'Project: Playback Predictor',
      vibePoints: 9840,
      avatar: '/images/profile-rohan.jpg',
      avatarAlt: 'Portrait of Rohan Verma',
    },
  ] satisfies LeaderboardEntry[],
};
