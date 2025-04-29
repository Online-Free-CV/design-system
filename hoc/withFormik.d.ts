import * as React from "react";
interface WithFormikProps<T> {
    initialValues: T;
    onSubmit: (values: T, actions: any) => void;
    validationSchema: any;
    children?: React.ReactNode;
}
export declare const withFormik: <T extends object>(WrappedComponent: React.FC<{
    values: T;
}>) => ({ initialValues, onSubmit, validationSchema, children, }: WithFormikProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
