import React from "react";
import { IconButtonProps } from "./iconButton.interface";
import { iconButton } from "./iconButton.css.ts";
import { Text } from "../text";
import { Home } from "@assets/icons/Navbar.tsx";

const IconButton: React.FC<IconButtonProps> = ({ label, onClick, icon }) => {
  const Icon = icon || <Home width={20} height={20}/>;
  return (
    <button className={iconButton} onClick={onClick}>
      <span className="icon">{Icon}</span>
      <Text variant="body2">{label}</Text>
    </button>
  );
};

export default IconButton;
