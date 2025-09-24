import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ initialValues, onSubmit, validationSchema, children, }: import('../../hoc/withFormik').WithFormikProps<import('./Appform').MyFormValues>) => import("react/jsx-runtime").JSX.Element;
    parameters: {};
    tags: string[];
    argTypes: {
        onSubmit: {
            action: string;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        children: {
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
