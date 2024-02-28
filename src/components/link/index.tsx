import { LinkProps } from "./link.interface";

export const Link: React.FC<LinkProps> = ({ url, children, ...rest }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);