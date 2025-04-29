import { withFormik } from "@hoc/withFormik";

interface MyFormValues {
  firstName: string;
}

const MyForm: React.FC<{ values: MyFormValues }> = () => (
  <>
  </>
);

export const Appform = withFormik(MyForm);
