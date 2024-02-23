// theme.ts
import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";

// Color palette
export const colors = {
  black: `#000`,
  white: `#fff`,
  blueGray: '#F2F5F9',
  orange: '#FF9C1B',
  fireEngineRed: '#E80505',
  lightGray: "#E3E3E3",
};

// Breakpoints for responsive design
export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1200,
};

// Spacing values for margin and padding
export const spacing = {
  none: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
};

// Font sizes for text elements
export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
};

// Font weights for text elements
export const fontWeight = {
    normal: "normal",
    reqular: "",
    bold: "",
  };

// Border radii for rounded corners
export const radii = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
  xxl: '3rem',
};

// Shadows for box elements
export const shadows = {
  sm: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
  md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
  lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
};

// Global theme variables
export const vars = createThemeContract({
  colors,
  spacing,
  fontSizes,
  fontWeight,
  radii,
  shadows,
});

// Common variables for light and dark themes
const commonVars = {
  font: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  },
};

// Light theme variables
export const lightThemeVars = createGlobalTheme(":root", {
  ...commonVars,
  colors: {
    primary: colors.black,
    background: colors.white,
    ...colors,
  },
});

// Dark theme variables
export const darkThemeVars = createGlobalTheme(":root", {
  ...commonVars,
  colors: {
    primary: colors.white,
    background: colors.black,
    ...colors,
  },
});

// Exporting the selected theme
export const isLightTheme = true; // Set to true for light theme, false for dark theme
export const selectedThemeVars = isLightTheme ? lightThemeVars : darkThemeVars;
