import React from "react";
import { tag } from "./experience.css";
import { ExperienceItem } from "./experience.interface";

interface SimpleListSectionProps {
  items: ExperienceItem[];
  itemDisplayDirection?: 'row' | 'column';
  themeColor?: {
    gradient: string;
    base: string;
  };
}

export const SimpleListSection: React.FC<SimpleListSectionProps> = ({
  items,
 itemDisplayDirection = "column",
  themeColor,
}) => {
    debugger;
    return(
  <>
    <ul
      style={{
        paddingLeft: 0,
        listStyle: "none",
        display: itemDisplayDirection === "column" ? "flex" : undefined,
        columnGap: itemDisplayDirection === "column" ? "2rem" : undefined,
        flexWrap: itemDisplayDirection === "column" ? "wrap" : undefined,
      }}
    >
      {items.map((item, idx) => (
        <li
          key={idx}
          style={{
            marginBottom: "1rem",
            display: itemDisplayDirection === "column" ? "flex" : undefined,
            alignItems: itemDisplayDirection === "column" ?  "center" : undefined,
            gap: itemDisplayDirection === "column" ?  "10px" : undefined,
          }}
        >
          <strong>{item.title}</strong>
          {item.tags && (
            <div
              style={{
                marginTop: 4,
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {item.tags.map((t, i) => (
                <span
                  key={i}
                  className={tag}
                  style={{ backgroundColor: themeColor?.base, color: "white" }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          {item.description && (
            <p style={{ margin: "0.5rem 0 0" }}>{item.description}</p>
          )}
        </li>
      ))}
    </ul>
  </>
)};
