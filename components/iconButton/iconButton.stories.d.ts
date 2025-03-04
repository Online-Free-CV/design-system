import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ label, onClick, icon }: import('./iconButton.interface').IconButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {};
    tags: string[];
    argTypes: {
        label: {
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
        onClick: {
            action: string;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        icon: {
            control: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
