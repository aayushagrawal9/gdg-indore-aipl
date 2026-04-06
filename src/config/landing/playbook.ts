export interface PlaybookPhase {
  phase: string;
  title: string;
  description: string;
  icon: string; // Material Symbols icon name
}

export const playbook = {
  eyebrow: 'The Flow',
  heading: 'The Playbook',
  phases: [
    {
      phase: 'PHASE 01',
      title: 'The Toss',
      description:
        'Team formations and prompt engineering basics. Setting the arena for the match.',
      icon: 'toll',
    },
    {
      phase: 'PHASE 02',
      title: 'Powerplay',
      description:
        'Rapid-fire vibe coding challenges. Speed is key to gaining early momentum.',
      icon: 'bolt',
    },
    {
      phase: 'PHASE 03',
      title: 'Middle Overs',
      description:
        'Complex architectural prompts and logic flow optimization. Consistency wins here.',
      icon: 'insights',
    },
    {
      phase: 'PHASE 04',
      title: 'Death Overs',
      description:
        'The ultimate showdown. Deploying production-ready Gemini apps under high pressure.',
      icon: 'sports_score',
    },
  ] satisfies PlaybookPhase[],
};
