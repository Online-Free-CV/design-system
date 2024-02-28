// Input.styles.ts
import { style } from '@vanilla-extract/css';
import { tokens } from '@styles/theme.css'; // Import the theme tokens

export const inputStyle = style({
  padding: tokens.spacing.md,
  fontSize: tokens.fontSize.md,
  border: `1px solid ${tokens.colors.lightGray}`,
  borderRadius: tokens.radii.sm,
  outline: 'none',
  transition: 'border-color 0.3s ease',

  ':focus': {
    borderColor: tokens.colors.blueGray,
  },
});
