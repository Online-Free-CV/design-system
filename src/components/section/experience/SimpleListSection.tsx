import React from "react";
import { blockDeleteIcon, simpleListItem, simpleRowListItem, tag } from "./experience.css";
import { ExperienceItem } from "./experience.interface";
import cx from "classnames";

interface SimpleListSectionProps {
  items: ExperienceItem[];
  itemDisplayDirection?: 'row' | 'column';
  themeColor?: {
    gradient: string;
    base: string;
  };
  onDelete?: (index: number) => void;
}

export const SimpleListSection: React.FC<SimpleListSectionProps> = ({
  items,
 itemDisplayDirection = "column",
  themeColor,
  onDelete
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
          className={cx(simpleListItem, {
            [simpleRowListItem]: itemDisplayDirection === "row",
          })}
          style={{
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

           {onDelete && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={blockDeleteIcon}
              onClick={() => onDelete(idx)}
              style={{ marginLeft: "auto", cursor: "pointer" }}
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4h6v2" />
            </svg>
          )}
        </li>
      ))}
    </ul>
  </>
)};
