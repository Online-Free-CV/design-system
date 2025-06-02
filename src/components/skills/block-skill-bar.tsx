import React, { useEffect, useState } from "react";
import {
  barBlock,
  blockDeleteIcon,
  blockSkillBar,
} from "./block-skill-bar.css";

interface BlockSkillBarProps {
  name: string;
  barColor?: string; // default is #59c15d
  level: number; // 0–100
  years: number;
  totalBlocks?: number;
  onDelete?: () => void;
}

export const BlockSkillBar: React.FC<BlockSkillBarProps> = ({
  name,
  level,
  years,
  barColor = "#59c15d",
  totalBlocks = 30,
  onDelete,
}) => {
  const targetFilled = Math.round((level / 100) * totalBlocks);
  const [currentFilled, setCurrentFilled] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFilled((prev) => {
        if (prev < targetFilled) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 30); // 30ms per block → adjust speed here

    return () => clearInterval(interval);
  }, [targetFilled]);

  const filled = currentFilled;
  const empty = totalBlocks - filled;

  return (
    <div className={blockSkillBar}>
      <div style={{ fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>
        {name} - <span style={{ fontStyle: "italic", fontWeight: 400, fontSize: "14px" }}>
          {years} year{years !== 1 ? "s" : ""}
        </span>
      </div>
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
            
            className={blockDeleteIcon} onClick={onDelete}
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M9 6V4h6v2" />
          </svg>
      )}
      <div className={barBlock} style={{color: barColor}}>
        {Array.from({ length: filled }).map((_, i) => (
          <span key={`fill-${i}`}>█</span>
        ))}
        {Array.from({ length: empty }).map((_, i) => (
          <span key={`empty-${i}`}>░</span>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          color: "#666",
        }}
      >
        {/* <span>{level}%</span> */}
       
      </div>
    </div>
  );
};
