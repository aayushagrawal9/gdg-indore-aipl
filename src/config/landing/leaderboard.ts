export interface LeaderboardEntry {
  rank: number;
  name: string;
  project: string;
  vibePoints: number;
  avatar: string;
  avatarAlt: string;
}

export const leaderboard = {
  eyebrow: 'The Overall Rankings',
  heading: 'The Scoreboard Build With AI - Agentic Premier League',
  tabs: ['Overall Event Series', 'Match-by-Match top 4'],
  entries: [
  {
    rank: 1,
    name: "Ayush Shinde",
    project: "Crowd Pulse",
    vibePoints: 26,
    avatar: "/images/profile-priya.jpg",
    avatarAlt: "Portrait of Priya Patel"
  },
  {
    rank: 2,
    name: "BJP",
    project: "Bhartiya Janta Party (BJP)",
    vibePoints: 26,
    avatar: "/images/profile-rohan.jpg",
    avatarAlt: "Portrait of Rohan Verma"
  },
   {
    rank: 3,
    name: 'Devesh Talreja',
    project: "Gambit",
    vibePoints: 25.5,
      avatar: "/images/profile-rohan.jpg",
    avatarAlt: "Portrait of Rohan Verma"
  },
  {
    rank: 4,
    name: "Munish Jain",
    project: "Crowd Pulse",
    vibePoints: 25,
    avatar: "/images/profile-rohan.jpg",
    avatarAlt: "Portrait of Rohan Verma",
  }

] satisfies LeaderboardEntry[],
};
