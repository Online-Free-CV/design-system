import React from "react";
import { IconButtonProps } from "./iconButton.interface";
import { iconButton } from "./iconButton.css.ts";
import { Text } from "../text";

const IconButton: React.FC<IconButtonProps> = ({ label, onClick, icon }) => {
  const Icon = icon || defaultIcon;
  return (
    <button className={iconButton} onClick={onClick}>
      <span className="icon">{Icon}</span>
      <Text variant="body2">{label}</Text>
    </button>
  );
};

export default IconButton;
