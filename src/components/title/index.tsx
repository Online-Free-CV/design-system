import React from "react";
import { TitleProps } from "./title.interface.ts";
import { titleStyle,titleLastNameStyle } from "./title.css.ts";
import { Text } from "@components/text";
const Title: React.FC<TitleProps> = ({ firstName, lastName }) => {
  return (
<Text variant="h2"  className={titleStyle}> {firstName}
<span className={titleLastNameStyle}>{lastName}</span>
</Text>
  );
};

export default Title;
