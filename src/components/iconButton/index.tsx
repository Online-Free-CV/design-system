import { Home } from "@assets/icons/Navbar.tsx";
import { Text } from "../text";
import { iconButton } from "./iconButton.css.ts";
import { IconButtonProps } from "./iconButton.interface";

export const IconButton = ({ label, onClick, icon }: IconButtonProps) => {
  const Icon = icon || <Home width={20} height={20}/>;
  return (
    <button className={iconButton} onClick={onClick}>
      <span className="icon">{Icon}</span>
      <Text variant="body2">{label}</Text>
    </button>
  );
};