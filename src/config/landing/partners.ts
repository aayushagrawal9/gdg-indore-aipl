export interface Partner {
  name: string;
  logo?: string;
}

export const partners = {
  eyebrow: 'Our Ecosystem',
  heading: 'The Pavilion',
  communities: [
    {
      name: 'GDG Indore',
      description: 'The Host & Community Engine',
      logo: '/images/gdg-logo-new.svg',
    },
    {
      name: 'Women Techmakers',
      description: 'Diversity & Inclusion Partner',
      logo: '/images/logo-wtm.svg',
    },
  ],
  sponsors: [
   // { name: 'Manara Labs' },
  //  { name: 'Protonshub' },
   // { name: 'Metafic' },
   // { name: 'TechNext' },
  ] satisfies Partner[],
  venue: {
    eyebrow: 'Venue Partner',
    name: 'Hopin Patio Cafe, Indore',
    icon: 'location_on',
  },
};
