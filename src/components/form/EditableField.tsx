import cx from "classnames";
import * as React from "react";
import { useFormikContext, FormikValues } from "formik";
import { editableFieldStyle } from "./editable-field.css";

interface EditableFieldProps {
  name: string;
  active?: boolean;
}

export const EditableField: React.FC<EditableFieldProps> = ({ name, active }) => {
  const { values, setFieldValue, errors } = useFormikContext<FormikValues>();
  const [isEditing, setIsEditing] = React.useState(false);
  const editableRef = React.useRef<HTMLDivElement>(null);

  // Function to get value from nested path like "socialProfiles[0].url"
  const getValueByPath = (obj: any, path: string): any => {
    // Handle array notation like "fieldName[0].property"
    const arrayMatch = path.match(/^(.+?)\[(\d+)\]\.(.+)$/);

    if (arrayMatch) {
      const [, arrayName, index, property] = arrayMatch;
      const arr = obj[arrayName];
      return arr && arr[parseInt(index)] ? arr[parseInt(index)][property] : "";
    }

    // For regular dot notation or direct properties
    return path.split(".").reduce((o, i) => (o ? o[i] : ""), obj);
  };

  // Function to get error by path
  const getErrorByPath = (errorsObj: any, path: string): any => {
    const arrayMatch = path.match(/^(.+?)\[(\d+)\]\.(.+)$/);

    if (arrayMatch) {
      const [, arrayName, index, property] = arrayMatch;
      const arr = errorsObj[arrayName];
      return arr && arr[parseInt(index)]
        ? arr[parseInt(index)][property]
        : undefined;
    }

    return path.split(".").reduce((o, i) => (o ? o[i] : undefined), errorsObj);
  };

  React.useEffect(() => {
    const hasError = getErrorByPath(errors, name);
    if (hasError) {
      setIsEditing(true);
    }
  }, [values, errors, name]);

  React.useEffect(() => {
    if (isEditing && editableRef.current) {
      editableRef.current.focus();
    }
  }, [isEditing]);

  const hasError = getErrorByPath(errors, name);
  const value = getValueByPath(values, name);
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    // Remove empty lines and normalize content
    const content = e.target.innerText.trim() === "" ? "" : e.target.innerText;
    setFieldValue(name, content);
    setIsEditing(false);
  };

  return (
      <span
        ref={editableRef}
        data-placeholder={hasError}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onBlur={handleBlur}
        onClick={() => setIsEditing(true)}
        className={cx(editableFieldStyle.default, {
          [editableFieldStyle.editing]: isEditing,
          [editableFieldStyle.error]: hasError,
          [editableFieldStyle.active]: active,
        })}
      >
        {value}
      </span>
  );
};
