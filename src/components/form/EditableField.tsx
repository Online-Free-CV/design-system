import cx from "classnames";
import * as React from "react";
import { useFormikContext, FormikValues } from "formik";
import { editableFieldStyle } from "./editable-field.css";

interface EditableFieldProps {
  name: string;
}

export const EditableField: React.FC<EditableFieldProps> = ({ name }) => {
  const { values, setFieldValue, errors } = useFormikContext<FormikValues>();
  const [isEditing, setIsEditing] = React.useState(false);
  const editableRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const hasError = errors[name];
    if (hasError) {
      setIsEditing(true);
    }
  }, [values, errors, name]);
  React.useEffect(() => {
    if (isEditing && editableRef.current) {
      editableRef.current.focus();
    }
  }, [isEditing]);

  const hasError = errors[name];
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    setFieldValue(name, e.target.innerText);
    setIsEditing(false);
  };

  return (
      <span
        ref={editableRef}
        data-placeholder={`${name} Required`}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={handleBlur}
        onClick={() => setIsEditing(true)}
        className={cx(editableFieldStyle.default, {
          [editableFieldStyle.editing]: isEditing,
          [editableFieldStyle.error]: hasError,
        })}
      >
        {values[name]}
      </span>
  );
};
