import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ variant, direction, justify, align, size, gap, children, className }: import('./container.interface').ContainerProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {};
    tags: string[];
    argTypes: {
        variant: {
            name: string;
            control: string;
            options: string[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        direction: {
            name: string;
            control: string;
            options: string[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        justify: {
            name: string;
            control: string;
            options: string[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        align: {
            name: string;
            control: string;
            options: string[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        size: {
            control: string;
            options: string[];
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        gap: {
            control: string;
            options: string[];
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        className: {
            name: string;
            control: string;
            description: string;
            table: {
                category: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const RowLayout: Story;
export declare const ColumnLayout: Story;
export declare const JustifyVariants: Story;
