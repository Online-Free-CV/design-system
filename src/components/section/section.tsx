import * as React from "react";
import cx from "classnames";
import { sectionHeader, sectionDetailsStyle, sectionDetailsTitleStyle } from "./section.css";
import { Text } from "../text";
import { useFormikContext } from "formik";

interface SectionProps {
  title?: string;
  titleFontStyle?: string;
  children: React.ReactNode;
  className?: string;
  rightContent?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  className,
  titleFontStyle,
  rightContent,
}) => {
  const themeColor = useFormikContext<any>().values.themeColor;
  return (
    <section className={cx(sectionDetailsStyle, className)}>
      <div className={sectionHeader}>
        <div className={cx(sectionDetailsTitleStyle, titleFontStyle)}>
          <Text variant="h3">{title}</Text>
          <span style={{ backgroundImage: themeColor?.gradient }}></span>
        </div>
        {rightContent && (
          <div>{rightContent}</div>
        )}
      </div>

      {children}
    </section>
  );
};
