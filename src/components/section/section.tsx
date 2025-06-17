import cx from "classnames";
import * as React from "react";
import { Text } from "../text";
import { sectionDetailsStyle, sectionDetailsTitleStyle, sectionHeader } from "./section.css";

interface SectionProps {
  title?: string;
  titleFontStyle?: string;
  children: React.ReactNode;
  className?: string;
  rightContent?: React.ReactNode;
  themeColor?: {
    gradient: string;
    color: string;
  };
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  className,
  titleFontStyle,
  rightContent,
  themeColor,
}) => {
  return (
    <section className={cx(sectionDetailsStyle, className)}>
      <div className={sectionHeader}>
        <div className={cx(sectionDetailsTitleStyle, titleFontStyle)}>
          <Text variant="h4">{title}</Text>
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
