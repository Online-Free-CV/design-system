import { LinkProps } from "./link.interface";

export const Link = ({ url, children, ...rest }:LinkProps) => (
  <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);