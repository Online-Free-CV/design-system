import { withFormik } from "@hoc/withFormik";

interface MyFormValues {
  [key: string]: unknown;
}

const MyForm: React.FC<{ values: MyFormValues }> = () => (
  <>
  </>
);

export const Appform = withFormik(MyForm);
