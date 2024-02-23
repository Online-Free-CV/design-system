import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    color: {
        primary: 'blue',
        secondary: 'green',
    },
    // other tokens
});
