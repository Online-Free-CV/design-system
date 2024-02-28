import cx from "classnames";
import { ContainerProps } from "./container.interface";
import { containerRecipe } from "./container.css";

export const Container = ({
  variant,
  children,
  className
}: ContainerProps) => {

  return (
    <div
      className={cx(
        containerRecipe({
          variant,
        }),
        className
      )}
    >
      {children}
    </div>
  );
};
