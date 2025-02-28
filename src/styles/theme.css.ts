// theme.ts
import {createGlobalTheme } from "@vanilla-extract/css";
import { NumberMap, StringMap } from "interfaces/global.interfaces";

// Color palette
export const colors = {
  black: `#000`,
  white: `#fff`,
  blueGray: "#F2F5F9",
  orange: "#FF9C1B",
  fireEngineRed: "#E80505",
  lightGray: "#E3E3E3",
};

// Breakpoints for responsive design
export const breakpoints: NumberMap = {
  mobile: 0,
  tablet: 768,
  desktop: 1200,
};

// Spacing values for margin and padding
export const size: StringMap = {
  none: "0",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
  full: "100%",
  half: "50%",
  auto: "auto",
};

// Font sizes for text elements
export const fontSize: StringMap = {
  xxs: "0.75",
  xs: `0.8rem`,
  sm: `0.875rem`,
  md: `1rem`,
  lg: `1.25rem`,
  xl: `1.5rem`,
  xxl: `1.75rem`,
  xxxl: `2rem`,
  xxxxl: `2.5rem`,
  
};

// Font weights for text elements
export const fontWeight: StringMap = {
  normal: "normal",
  reqular: "",
  bold: "",
};

// Border radii for rounded corners
export const radii: StringMap = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "3rem",
};

// Shadows for box elements
export const shadows: StringMap = {
  sm: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
  md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
  lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
};

// // Global theme variables
// export const vars = createThemeContract({
//   colors,
//   spacing: size,
//   size,
//   fontSize,
//   fontWeight,
//   radii,
//   shadows,
// });

// Common variables for light and dark themes
const commonVars = {
  font: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  },
  colors,
  spacing: size,
  size,
  fontSize,
  fontWeight,
  radii,
  shadows,
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
export const tokens = isLightTheme ? lightThemeVars : darkThemeVars;
