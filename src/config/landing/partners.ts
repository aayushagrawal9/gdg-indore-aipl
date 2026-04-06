export interface Partner {
  name: string;
}

export const partners = {
  eyebrow: 'Our Ecosystem',
  heading: 'The Pavilion',
  host: {
    name: 'GDG Indore',
    description: 'The Host & Community Engine',
    icon: 'groups',
  },
  sponsors: [
    { name: 'Manara Labs' },
    { name: 'Protonshub' },
    { name: 'Metafic' },
    { name: 'TechNext' },
  ] satisfies Partner[],
  venue: {
    eyebrow: 'Venue Partner',
    name: 'Indore Convention Center',
    icon: 'location_on',
  },
};
