export declare const containerRecipe: import('@vanilla-extract/recipes').RuntimeFn<{
    variant: {
        wrapper: {
            width: `var(--${string})` | `var(--${string}, ${string})`;
            height: `var(--${string})` | `var(--${string}, ${string})`;
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
            width: `var(--${string})` | `var(--${string}, ${string})`;
            height: `var(--${string})` | `var(--${string}, ${string})`;
        };
        half: {
            width: `var(--${string})` | `var(--${string}, ${string})`;
            height: `var(--${string})` | `var(--${string}, ${string})`;
        };
        auto: {
            width: `var(--${string})` | `var(--${string}, ${string})`;
            height: `var(--${string})` | `var(--${string}, ${string})`;
        };
    };
    gap: {
        none: {
            gap: `var(--${string})` | `var(--${string}, ${string})`;
        };
        small: {
            gap: `var(--${string})` | `var(--${string}, ${string})`;
        };
        medium: {
            gap: `var(--${string})` | `var(--${string}, ${string})`;
        };
        large: {
            gap: `var(--${string})` | `var(--${string}, ${string})`;
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
