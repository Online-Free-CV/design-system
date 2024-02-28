// Input.tsx
import React from 'react';
import cx from "classnames";
import { inputStyle } from './input.css';
import { InputProps } from './input.interface';

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
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
