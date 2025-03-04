import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ variant, children, className }: import('./text.interface').TextProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            name: string;
            control: string;
            type: {
                name: "string";
                required: true;
            };
            options: string[];
            table: {
                type: {
                    summary: string;
                    detail: string;
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
export declare const TextVariants: Story;
