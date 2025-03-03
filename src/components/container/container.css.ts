import { style } from '@vanilla-extract/css'
import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "@styles/theme.css";

const base = style({
  display: 'flex',
});

export const containerRecipe = recipe({
  base,
  variants: {
    variant: {
      wrapper: {
        width: tokens.size.full,
        height: tokens.size.full,
      },
      flexWrap: {
        flexWrap: "wrap",
      },
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    direction: {
      ltr: { flexDirection: 'row', textAlign: 'left' },
      rtl: { flexDirection: 'row-reverse', textAlign: 'right' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
    },
    size: {
      full: { width: tokens.size.full, height: tokens.size.full },
      half: { width: tokens.size.half, height: tokens.size.half },
      auto: { width: tokens.size.auto, height: tokens.size.auto },
    },
    gap: {
      none: { gap: tokens.size.none },
      small: { gap: tokens.size.sm },
      medium: { gap: tokens.size.md },
      large: { gap: tokens.size.lg },
    },
  },
  defaultVariants: {
    variant: "wrapper",
    direction: "ltr",
    justify: "start",
    align: "stretch",
    size: "auto",
    gap: "none",
  }
});