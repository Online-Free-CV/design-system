import type React from "react";
import { withFormik } from "@hoc/withFormik";

export interface MyFormValues {
  [key: string]: unknown;
}

const MyForm: React.FC<{ values: MyFormValues }> = () => (
  <>
  </>
);

export const Appform = withFormik(MyForm);
