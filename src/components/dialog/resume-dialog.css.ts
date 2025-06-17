import { tokens } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const modal = style({
  background: '#fff',
  borderRadius: '8px',
  padding: '1.5rem',
  maxWidth: '850px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
});

export const closeBtn = style({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  borderRadius: '50%',
  color: tokens.colors.white,
  backgroundColor:"#cd4f4f",
});
