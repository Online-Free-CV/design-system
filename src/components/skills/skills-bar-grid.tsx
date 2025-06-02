import React, { useState } from "react";
import { BlockSkillBar } from "./block-skill-bar";
import {
  skillGrid,
  toggleButton,
} from "./skills-bar-grid.css";

interface Skill {
  name: string;
  level: number;
  years: number;
}

interface SkillBarsGridProps {
  skills: Skill[];
  barColor?: string; // default is #59c15d
  onDelete?: (index: number) => void;
}

export const SkillBarsGrid: React.FC<SkillBarsGridProps> = ({
  skills,
  barColor,
  onDelete,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 6);
  const toggleView = () => setShowAll(prev => !prev);

  return (
    <>
      <div className={skillGrid}>
        {visibleSkills.map((skill, index) => (
          <BlockSkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            years={skill.years}
            barColor={barColor}
            onDelete={onDelete ? () => onDelete(index) : undefined}
          />
        ))}
      </div>

      {skills.length > 6 && (
        <button type="button" className={toggleButton} onClick={toggleView}>
          {showAll ? "Show Less" : `Show ${skills.length - 6 } More`}
        </button>
      )}
    </>
  );
};
