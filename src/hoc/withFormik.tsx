import * as React from "react";
import { Formik, Form, FormikConfig, FormikHelpers } from "formik";
import { FloatingPublishBar } from "@components/form/FloatingPublishBar";

interface WithFormikProps<T> {
  initialValues: T;
  onSubmit: (values: T, actions: FormikHelpers<T>) => void; 
  validationSchema?: FormikConfig<T>["validationSchema"];
  children?: React.ReactNode;
}

export const withFormik = <T extends object>(
  WrappedComponent: React.FC<{ values: T }>
) => {
  return ({
    initialValues,
    onSubmit,
    validationSchema,
    children,
  }: WithFormikProps<T>) => {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnMount={true}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <FloatingPublishBar isSubmitting={isSubmitting} />
            <WrappedComponent values={values} />
            {children} {/* ✅ Pass children inside the Formik wrapper */}
          </Form>
        )}
      </Formik>
    );
  };
};
