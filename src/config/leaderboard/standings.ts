export interface SeasonEntry {
  rank: number;
  name: string;
  team: string;
  vibePoints: number;
  avatar?: string;
  avatarAlt?: string;
  initials?: string;
  winStreak?: boolean[]; // e.g. [true,true,true,true,false]
}

export const seasonStandings = {
  heading: 'Overall Season Standings',
  description:
    "The cumulative 'Total Vibe Points' across all qualifiers and league stages.",
  entries: [
    {
      rank: 1,
      name: "Alex 'PromptKing' Rivera",
      team: 'Team Neural Nexus',
      vibePoints: 14820,
      avatar: '/images/profile-alex.jpg',
      avatarAlt: 'Portrait of Alex Rivera',
      winStreak: [true, true, true, true, false],
    },
    {
      rank: 2,
      name: "Sarah 'Synthesizer' Chen",
      team: 'Silicon Raiders',
      vibePoints: 13105,
      avatar: '/images/profile-sarah.jpg',
      avatarAlt: 'Portrait of Sarah Chen',
      winStreak: [true, true, true, false, false],
    },
    {
      rank: 3,
      name: "Marcus 'Logic' Thorne",
      team: 'The Logic Masters',
      vibePoints: 12540,
      avatar: '/images/profile-marcus.jpg',
      avatarAlt: 'Portrait of Marcus Thorne',
      winStreak: [true, true, false, false, false],
    },
    {
      rank: 4,
      name: "David 'Kernal' Kim",
      team: 'Byte Coders',
      vibePoints: 11900,
      initials: 'DK',
    },
  ] satisfies SeasonEntry[],
};
