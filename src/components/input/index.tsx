// Input.tsx
import cx from "classnames";
import { inputStyle } from './input.css';
import { InputProps } from './input.interface';

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cx(
        inputStyle,
        className
      )}
    />
  );
};
