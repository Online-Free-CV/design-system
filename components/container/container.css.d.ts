export declare const containerRecipe: import('@vanilla-extract/recipes').RuntimeFn<{
    variant: {
        wrapper: {
            width: `var(--${string})`;
            height: `var(--${string})`;
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
            width: `var(--${string})`;
            height: `var(--${string})`;
        };
        half: {
            width: `var(--${string})`;
            height: `var(--${string})`;
        };
        auto: {
            width: `var(--${string})`;
            height: `var(--${string})`;
        };
    };
    gap: {
        none: {
            gap: `var(--${string})`;
        };
        small: {
            gap: `var(--${string})`;
        };
        medium: {
            gap: `var(--${string})`;
        };
        large: {
            gap: `var(--${string})`;
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
