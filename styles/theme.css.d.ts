import { NumberMap, StringMap } from 'interfaces/global.interfaces';
export declare const colors: {
    black: string;
    white: string;
    blueGray: string;
    orange: string;
    fireEngineRed: string;
    lightGray: string;
};
export declare const breakpoints: NumberMap;
export declare const size: StringMap;
export declare const fontSize: StringMap;
export declare const fontWeight: StringMap;
export declare const radii: StringMap;
export declare const shadows: StringMap;
export declare const lightThemeVars: {
    colors: {
        black: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        white: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        blueGray: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        orange: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        fireEngineRed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        lightGray: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    font: {
        body: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    spacing: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    size: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontSize: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontWeight: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    radii: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    shadows: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
export declare const darkThemeVars: {
    colors: {
        black: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        white: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        blueGray: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        orange: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        fireEngineRed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        lightGray: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    font: {
        body: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    spacing: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    size: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontSize: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontWeight: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    radii: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    shadows: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
export declare const isLightTheme = true;
export declare const tokens: {
    colors: {
        black: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        white: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        blueGray: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        orange: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        fireEngineRed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        lightGray: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    font: {
        body: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    spacing: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    size: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontSize: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fontWeight: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    radii: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    shadows: {
        [x: string]: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
