import { style } from '@vanilla-extract/css';
import { tokens } from '@styles/theme.css';

export const accordionContainer = style({
  overflow: 'hidden',
  transition: 'max-height 0.3s ease-in-out',
  maxHeight: '0px',
});

export const accordionContent = style({
  padding: tokens.spacing.md,
  borderRadius: tokens.radii.sm,
  backgroundColor: tokens.colors.white,
});
