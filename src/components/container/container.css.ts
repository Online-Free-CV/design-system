
import { style } from '@vanilla-extract/css'
import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "@styles/theme.css";

const base = style({
  display: 'flex',
})

export const containerRecipe = recipe({
  base,
  variants: {
    variant: {
      wrapper: {
        width: tokens.size.full,
        height: tokens.size.full
      },
      flexWrap: {
        flexWrap: "wrap",
      },
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "row",
      },
    },
  },
  defaultVariants: {
    variant: "wrapper"
  }
});
