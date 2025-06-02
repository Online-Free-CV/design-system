import React, { useState } from "react";
import { useFormikContext, getIn } from "formik";
import { SkillBarsGrid } from "./skills-bar-grid";
import {
  dynamicSkillsContainer,
  inputRow,
  input,
  addButton,
  inputFieldWrapper,
  label,
} from "./skills-section.css";

interface Skill {
  name: string;
  years: number;
  level: number;
}

interface SkillsSectionProps {
  name: string;
  barColor?: string; // default is #59c15d
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ name, barColor }) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const skills: Skill[] = getIn(values, name) || [];

  const [newSkill, setNewSkill] = useState("");
  const [newLevel, setNewLevel] = useState<number | "">("");
  const [newYears, setNewYears] = useState<number | "">("");
  const [error, setError] = useState<string>("");

  const handleAdd = () => {
    const trimmedName = newSkill.trim();

    if (!trimmedName || newLevel === "" || newYears === "") {
      setError("All fields are required.");
      return;
    }

    const isDuplicate = skills.some(
      (skill) => skill.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (isDuplicate) {
      setError("This skill already exists.");
      return;
    }

    const updated = [
      ...skills,
      {
        name: trimmedName,
        level: Number(newLevel),
        years: Number(newYears),
      },
    ];

    setFieldValue(name, updated);
    setNewSkill("");
    setNewLevel("");
    setNewYears("");
    setError(""); // clear error
  };

  const handleDelete = (indexToRemove: number) => {
    const updated = skills.filter((_, i) => i !== indexToRemove);
    setFieldValue(name, updated);
  };

  return (
    <div className={dynamicSkillsContainer}>
      {/* Skill preview bar with name, progress and years */}
      <SkillBarsGrid skills={skills} onDelete={handleDelete} barColor={barColor} />

      {/* Input Row */}
      <div>
        <div className={inputRow}>
          <div className={inputFieldWrapper}>
            <label className={label}>Skill Name</label>
            <input
              type="text"
              placeholder="e.g. React"
              value={newSkill}
              onChange={(e) => {
                setNewSkill(e.target.value);
                setError(""); // clear error as user types
              }}
              className={input}
            />
          </div>

          <div className={inputFieldWrapper}>
            <label className={label}>Proficiency (%)</label>
            <input
              type="number"
              placeholder="0–100"
              value={newLevel}
              onChange={(e) => setNewLevel(Number(e.target.value))}
              min={0}
              max={100}
              className={input}
            />
          </div>

          <div className={inputFieldWrapper}>
            <label className={label}>Years of Experience</label>
            <input
              type="number"
              placeholder="e.g. 2"
              value={newYears}
              onChange={(e) => setNewYears(Number(e.target.value))}
              min={0}
              max={50}
              className={input}
            />
          </div>

          <button type="button" onClick={handleAdd} className={addButton}>
            Add
          </button>
        </div>
        {error && (
          <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};
