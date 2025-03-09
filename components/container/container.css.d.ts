export declare const containerRecipe: import('@vanilla-extract/recipes').RuntimeFn<{
    variant: {
        wrapper: {
            width: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        flexWrap: {
            flexWrap: "wrap";
        };
        row: {
            flexDirection: "row";
        };
        column: {
            flexDirection: "column";
        };
    };
    direction: {
        ltr: {
            flexDirection: "row";
            textAlign: "left";
        };
        rtl: {
            flexDirection: "row-reverse";
            textAlign: "right";
        };
    };
    justify: {
        start: {
            justifyContent: "flex-start";
        };
        center: {
            justifyContent: "center";
        };
        end: {
            justifyContent: "flex-end";
        };
        between: {
            justifyContent: "space-between";
        };
        around: {
            justifyContent: "space-around";
        };
    };
    align: {
        start: {
            alignItems: "flex-start";
        };
        center: {
            alignItems: "center";
        };
        end: {
            alignItems: "flex-end";
        };
        stretch: {
            alignItems: "stretch";
        };
    };
    size: {
        full: {
            width: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        half: {
            width: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        auto: {
            width: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    gap: {
        none: {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        small: {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        medium: {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        large: {
            gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    reverse: {
        row: {
            flexDirection: "row-reverse";
        };
        column: {
            flexDirection: "column-reverse";
        };
    };
}>;
