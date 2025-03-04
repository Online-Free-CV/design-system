import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ url, children, ...rest }: import('./link.interface').LinkProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        url: {
            name: string;
            control: string;
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
        children: {
            name: string;
            control: string;
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
