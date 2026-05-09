// Single source of truth for design tokens.
// Imported by tailwind.config.mjs AND Astro components (via @config/theme.mjs).

export const colors = {
  primary: 'hsl(var(--color-primary) / <alpha-value>)',
  primaryDim: 'hsl(var(--color-primary-dim) / <alpha-value>)',
  primaryFixed: 'hsl(var(--color-primary-fixed) / <alpha-value>)',
  onPrimary: 'hsl(var(--color-on-primary) / <alpha-value>)',
  onPrimaryContainer: 'hsl(var(--color-on-primary-container) / <alpha-value>)',
  secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
  secondaryContainer: 'hsl(var(--color-secondary-container) / <alpha-value>)',
  tertiary: 'hsl(var(--color-tertiary) / <alpha-value>)',
  surface: 'hsl(var(--color-surface) / <alpha-value>)',
  surfaceLowest: 'hsl(var(--color-surface-lowest) / <alpha-value>)',
  surfaceLow: 'hsl(var(--color-surface-low) / <alpha-value>)',
  surfaceContainer: 'hsl(var(--color-surface-container) / <alpha-value>)',
  surfaceContainerHigh: 'hsl(var(--color-surface-container-high) / <alpha-value>)',
  surfaceContainerHighest: 'hsl(var(--color-surface-container-highest) / <alpha-value>)',
  onSurface: 'hsl(var(--color-on-surface) / <alpha-value>)',
  onSurfaceVariant: 'hsl(var(--color-on-surface-variant) / <alpha-value>)',
  outlineVariant: 'hsl(var(--color-outline-variant) / <alpha-value>)',
  gold: 'hsl(var(--color-gold) / <alpha-value>)',
  silver: 'hsl(var(--color-silver) / <alpha-value>)',
  bronze: 'hsl(var(--color-bronze) / <alpha-value>)',
};

export const fonts = {
  display: '"Plus Jakarta Sans", "Inter", sans-serif',
  headline: '"Inter", sans-serif',
  body: '"Inter", sans-serif',
  label: '"Space Grotesk", sans-serif',
  mono: '"Fira Code", monospace',
};
