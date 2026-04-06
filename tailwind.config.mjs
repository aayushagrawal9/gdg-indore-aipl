import { colors } from './src/config/theme.mjs';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        'primary-dim': colors.primaryDim,
        'primary-fixed': colors.primaryFixed,
        'primary-container': colors.primaryFixed,
        'on-primary': colors.onPrimary,
        'on-primary-container': colors.onPrimaryContainer,
        secondary: colors.secondary,
        'secondary-container': colors.secondaryContainer,
        tertiary: colors.tertiary,
        surface: colors.surface,
        background: colors.surface,
        'surface-container-lowest': '#ffffff',
        'surface-container-low': colors.surfaceLow,
        'surface-container': colors.surfaceContainer,
        'surface-container-high': colors.surfaceContainerHigh,
        'surface-container-highest': colors.surfaceContainerHighest,
        'on-surface': colors.onSurface,
        'on-background': colors.onSurface,
        'on-surface-variant': colors.onSurfaceVariant,
        'outline-variant': colors.outlineVariant,
        gold: colors.gold,
        silver: colors.silver,
        bronze: colors.bronze,
      },
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        label: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};
