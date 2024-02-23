import { globalStyle } from '@vanilla-extract/css';
import { vars } from './tokens.css';

globalStyle('body', {
    backgroundColor: vars.color.primary,
    // other global styles
});
