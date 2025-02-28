import cx from "classnames";
import { ContainerProps } from "./container.interface";
import { containerRecipe } from "./container.css";

export const Container = ({
  variant,
  direction,
  justify,
  align,
  size,
  gap,
  children,
  className
}: ContainerProps) => {
  return (
    <div
      className={cx(
        containerRecipe({
          variant,
          direction,
          justify,
          align,
          size,
          gap,
        }),
        className
      )}
    >
      {children}
    </div>
  );
};
