// ============================================================
// AIPL — Single Source of Truth for all match events
// Add future events to aiplEvents array. UI auto-updates.
// ============================================================

export interface EventEntry {
  name: string;       // canonical participant/team name
  project: string;    // project name for that event
  repoLink: string;   // repo URL for that specific event
  points: number;     // total vibe points for THIS event
}

export interface AIPLEvent {
  id: string;         // e.g. 'apr12'
  label: string;      // e.g. 'April 12, 2026'
  iplMatch: string;   // e.g. 'LSG vs GT'
  date: string;       // ISO date for sorting
  entries: EventEntry[]; // pre-sorted by points desc
}

// ── CUMULATIVE TYPES ──────────────────────────────────────

export interface CumulativeEntry {
  rank: number;
  name: string;
  project: string;      // from latest event
  repoLink: string;     // from latest event (non-empty preferred)
  totalPoints: number;
  matchesAttended: number;
  averagePoints: number;
  eventScores: { eventId: string; points: number }[];
}

// ── EVENT DATA ────────────────────────────────────────────

export const aiplEvents: AIPLEvent[] = [
  {
    id: 'apr12',
    label: 'April 12, 2026',
    iplMatch: 'LSG vs GT',
    date: '2026-04-12',
    // Source: docs/livestanding ts old file.txt
    // Cleaned: removed duplicate "Ethics" (kept "Team Ethics" 23pts),
    //          removed duplicate Samyak Choudhary 10pts (kept 22pts),
    //          normalised "Prajjwal" → "Prajwal Singh"
    entries: [
      { name: 'Devesh Talreja',      project: 'CricketPulse-Ai',          repoLink: 'https://github.com/devesh-talreja/CricketPulse-Ai',     points: 27 },
      { name: 'Bhartiya Janta Party',project: 'BJP',                       repoLink: '',                                                       points: 26 },
      { name: 'Pushpraj Singhal',    project: 'Crowd Pulse Match',         repoLink: 'https://github.com/pushprajsinghal',                    points: 25 },
      { name: 'Munish Jain',         project: 'Projectt',                  repoLink: '',                                                       points: 25 },
      { name: 'Build Algos',         project: 'Build Algos',               repoLink: '',                                                       points: 24 },
      { name: 'Codex',               project: 'Codex',                     repoLink: '',                                                       points: 24 },
      { name: 'Team Ethics',         project: 'Team Ethics',               repoLink: '',                                                       points: 23 },
      { name: 'Kushagra Misra',      project: 'Pitchside',                 repoLink: 'https://github.com/kush-mish/pitchside',                points: 23 },
      { name: 'StadiumPulse',        project: 'StadiumPulse',              repoLink: '',                                                       points: 23 },
      { name: 'Samyak Choudhary',    project: 'Samyak Project',            repoLink: '',                                                       points: 22 },
      { name: 'Hustlers',            project: 'IPL Knowledge Graph',       repoLink: '',                                                       points: 21 },
      { name: 'Faluda',              project: 'Faluda',                    repoLink: '',                                                       points: 21 },
      { name: 'Byte Avengers',       project: 'Cricfanvibes',              repoLink: 'https://github.com/BikalpShukla/Cricfanvibes.git',       points: 17 },
      { name: 'Rockcode',            project: 'Rockcode',                  repoLink: '',                                                       points: 17 },
      { name: 'Prajwal Singh',       project: 'StadiumPulse',              repoLink: 'https://github.com/Mango-Piety/stadiumpulse',           points: 9  },
      { name: 'Dropcode',            project: 'Dropcode',                  repoLink: '',                                                       points: 9  },
      { name: 'Xcode',               project: 'IPL22',                     repoLink: 'https://github.com/namdevdivyansh406/ip22.git',         points: 7  },
      { name: 'Aagam',               project: 'APL Predictor',             repoLink: 'https://github.com/aagamjain-art/APL-Predictor',        points: 5  },
    ],
  },
  {
    id: 'apr22',
    label: 'April 22, 2026',
    iplMatch: 'LSG vs RR',
    date: '2026-04-22',
    // Source: Google Form Responses image (22 April 2026)
    // 18 entries, sorted by total points desc
    entries: [
      { name: 'Ayush Shinde',        project: 'Crowd Pulse',               repoLink: 'https://github.com/theayushshinde/crowd-pulse',         points: 26 },
      { name: 'Cyber-squad',         project: 'Crowd Pulse',               repoLink: 'https://github.com/Aniket1603/crowd-pulse',             points: 25 },
      { name: 'Devesh Talreja',      project: 'GraphOracle',               repoLink: 'https://github.com/devesh-talreja/GraphOracle',         points: 24 },
      { name: 'Hustlers',            project: 'IPL Knowledge Graph',       repoLink: 'https://github.com/KrishnaG-101/IPL-Knowledge-Graph',   points: 23 },
      { name: 'Bhartiya Janta Party',project: 'CricPulse',                 repoLink: 'https://github.com/YusufMalu001/CricPulse',             points: 22 },
      { name: 'Munish Jain',         project: 'Projectt',                  repoLink: 'https://github.com/munishhhh/Projectt',                 points: 22 },
      { name: 'Fellow Dev',          project: 'APL-22',                    repoLink: 'https://github.com/neeraj5050/APL-22',                  points: 21 },
      { name: 'Rizwan Sheikh',       project: 'GDG APL',                   repoLink: 'https://github.com/Rizwan050505/GDG-APL-',              points: 21 },
      { name: 'Prajwal Singh',       project: 'APL-Crickty',               repoLink: 'https://github.com/Mango-Piety/apl-crickty',           points: 20 },
      { name: 'Meet Agrawal',        project: 'Crowd Pulse',               repoLink: 'https://github.com/meetagrawal8989-cmyk/crowd-pulse.git', points: 20 },
      { name: 'Pushpraj Singhal',    project: 'Crowd Pulse Match',         repoLink: 'https://github.com/pushprajsinghal/crowd-Pulse-match',  points: 20 },
      { name: 'Krishna Nema',        project: 'APL-2',                     repoLink: 'https://github.com/Krish09112004/apl-2',                points: 19 },
      { name: 'Siddhi Khatri',       project: 'Siddhi Project',            repoLink: '',                                                       points: 17 },
      { name: 'Havoc Breakers',      project: 'Roargraph',                 repoLink: 'https://github.com/APL-Heavok-Wreakers/roargraph',      points: 17 },
      { name: 'Vivek Vishwakarma',   project: 'CrowdPulse Real-Time',      repoLink: 'https://github.com/Vivek-2004V/CrowdPulse.git',         points: 15 },
      { name: 'Quantum Arcade',      project: 'APL GDG',                   repoLink: 'https://github.com/ashudotdev/apl_gdg',                 points: 14 },
      { name: 'Imaginary Thinkers',  project: 'Tactic Graph',              repoLink: '',                                                       points: 13 },
      { name: 'Devansh Kumar Patidar',project: 'Cricket Tactics',          repoLink: 'https://github.com/DKP-RGB/cricket-tactics',            points: 9  },
    ],
  },
];

// ── UTILITY: Compute cumulative standings across all events ─

export function computeStandings(events: AIPLEvent[]): CumulativeEntry[] {
  // Use lowercase-trimmed name as key to handle minor spelling variations
  const map = new Map<string, CumulativeEntry & { _key: string }>();

  for (const event of events) {
    for (const entry of event.entries) {
      const key = entry.name.toLowerCase().trim();

      if (!map.has(key)) {
        map.set(key, {
          rank: 0,
          _key: key,
          name: entry.name,
          project: entry.project,
          repoLink: entry.repoLink,
          totalPoints: 0,
          matchesAttended: 0,
          averagePoints: 0,
          eventScores: [],
        });
      }

      const cum = map.get(key)!;
      cum.totalPoints += entry.points;
      cum.matchesAttended += 1;
      cum.averagePoints = parseFloat(
        (cum.totalPoints / cum.matchesAttended).toFixed(1)
      );
      // Always prefer the latest non-empty repo link
      if (entry.repoLink) cum.repoLink = entry.repoLink;
      if (entry.project)  cum.project  = entry.project;
      cum.eventScores.push({ eventId: event.id, points: entry.points });
    }
  }

  // Sort by totalPoints desc, assign ranks
  const sorted = Array.from(map.values()).sort(
    (a, b) => b.totalPoints - a.totalPoints
  );
  sorted.forEach((e, i) => { e.rank = i + 1; });

  return sorted;
}

// ── UTILITY: Get per-event standings with rank ─────────────

export function getEventStandings(
  events: AIPLEvent[],
  eventId: string
): (EventEntry & { rank: number })[] {
  const event = events.find((e) => e.id === eventId);
  if (!event) return [];
  // entries already sorted; assign rank
  return event.entries.map((e, i) => ({ ...e, rank: i + 1 }));
}
