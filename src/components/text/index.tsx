import { textRecipe } from "./text.css";
import cx from "classnames";
import { TextElements } from "./text.type";
import { ITextProps } from "./text.interface";
import { StringMap } from "interfaces/global.interfaces";

const tagsVariant: StringMap = {
  display: "div",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "span",
  body3: "p",
};

export const Text = ({
  variant,
  children,
  className
}: ITextProps) => {
  let tag = tagsVariant[variant] as keyof Pick<
    JSX.IntrinsicElements,
    TextElements
  >;

  const Tag = tag;

  return (
    <Tag
      className={cx(
        textRecipe({
          variant,
        }),
        className
      )}
    >
      {children}
    </Tag>
  );
};
