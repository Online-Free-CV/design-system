import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "./theme.css";

export const textRecipe = recipe({
  base: {
    margin: tokens.size.none,
    padding: tokens.size.none
  },
  variants: {
    variant: {
      body3: {
        fontSize: tokens.fontSize.xxs,
      },
      body2: {
        fontSize: tokens.fontSize.xs,
      },
      body1: {
        fontSize: tokens.fontSize.sm,
      },
      display: {
        fontSize: tokens.fontSize.md,
      },
      h5: {
        fontSize: tokens.fontSize.lg,
      },
      h4: {
        fontSize: tokens.fontSize.xl,
      },
      h3: {
        fontSize: tokens.fontSize.xxl,
      },
      h2: {
        fontSize: tokens.fontSize.xxxl,
      },
      h1: {
        fontSize: tokens.fontSize.xxxxl,
      },
    },
    
  },
  defaultVariants: {
    variant: "display"
  }

});
