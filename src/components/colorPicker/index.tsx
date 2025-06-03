import React, { useState, useEffect, useRef } from "react";
import { useField } from "formik";
import {
  dropdownContainer,
  dropdownButton,
  dropdownMenu,
  dropdownItem,
  selectedItem,
  colorSwatch,
} from "./color-picker.css";

interface ThemeOption {
  name: string;
  base: string;
  gradient: string;
}

interface ColorPickerProps {
  name: string;
}

const gradientThemes: ThemeOption[] = [
  {
    name: "OnlineFreeCV Blue",
    base: "#007BFF",
    gradient: "linear-gradient(to bottom, #007BFF, #0056b3)",
  },
  {
    name: "Sunset",
    base: "#FF5F6D",
    gradient: "linear-gradient(to bottom, #FF5F6D, #FFC371)",
  },
  {
    name: "Ocean Blue",
    base: "#2193b0",
    gradient: "linear-gradient(to bottom, #2193b0, #6dd5ed)",
  },
  {
    name: "Purple Bliss",
    base: "#6a11cb",
    gradient: "linear-gradient(to bottom, #6a11cb, #2575fc)",
  },
  {
    name: "Mint Leaf",
    base: "#00b09b",
    gradient: "linear-gradient(to bottom, #00b09b, #96c93d)",
  },
  {
    name: "Cherry Blossom",
    base: "#f953c6",
    gradient: "linear-gradient(to bottom, #f953c6, #b91d73)",
  },
  {
    name: "Golden Hour",
    base: "#f7971e",
    gradient: "linear-gradient(to bottom, #f7971e, #ffd200)",
  },
  {
    name: "Midnight",
    base: "#232526",
    gradient: "linear-gradient(to bottom, #232526, #414345)",
  },
];


export const ColorPickerDropdown: React.FC<ColorPickerProps> = ({ name }) => {
  const [field, , helpers] = useField<any>(name);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Convert string to theme object if needed
  useEffect(() => {
    if (typeof field.value === "string") {
      const matched = gradientThemes.find((t) => t.name === field.value);
      if (matched) helpers.setValue(matched);
    }
  }, [field.value, helpers]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (theme: ThemeOption) => {
    helpers.setValue(theme);
    setOpen(false);
  };

  return (
    <div className={dropdownContainer} ref={ref}>
      <button
        type="button"
        className={dropdownButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className={colorSwatch}
          style={{ backgroundImage: field.value?.gradient }}
        />
        {field.value?.name || "Select Theme"}
      </button>
      {open && (
        <div className={dropdownMenu}>
          {gradientThemes.map((theme) => (
            <div
              key={theme.name}
              title={theme.name}
              className={`${dropdownItem} ${
                field.value?.name === theme.name ? selectedItem : ""
              }`}
              onClick={() => handleSelect(theme)}
            >
              <span
                className={colorSwatch}
                style={{ backgroundImage: theme.gradient }}
              />
              {theme.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};