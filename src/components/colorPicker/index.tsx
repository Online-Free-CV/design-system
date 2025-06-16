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
  blob?: string;
}

interface ColorPickerProps {
  name: string;
}

const gradientThemes: ThemeOption[] = [
  {
    name: "OnlineFreeCV Blue",
    base: "#a147ef",
    gradient: "linear-gradient(312deg, #ff5cef 5.38%, #5e36f2 113.21%)",
    blob: "rgb(71 26 162)", // soft violet
  },
  {
    name: "Sunset",
    base: "#fe603c",
    gradient: "linear-gradient(to bottom, #FF7F50, #FF0000)",
    blob: "rgb(153 21 4)", // warm coral
  },
  {
    name: "Ocean Blue",
    base: "#00aae8",
    gradient: "linear-gradient(to bottom, #00d4ff , #0082d1)",
    blob: "rgb(9 85 142)", // vibrant aqua
  },
  {
    name: "Purple Bliss",
    base: "#bd76ff",
    gradient: "linear-gradient(to bottom, #bd76ff, #6a0dad)",
    blob: "rgb(69 5 133)", // rich purple
  },
  {
    name: "Mint Leaf",
    base: "#00A884",
    gradient: "linear-gradient(to bottom, #00E676, #00A884)",
    blob: "rgb(12 105 76)", // deep mint green
  },
  {
    name: "Cherry Blossom",
    base: "#f04b89",
    gradient: "linear-gradient(to bottom, #FF6FA1, #D20457)",
    blob: "rgb(175, 1, 69)", // rich rose
  },
  {
    name: "Golden Hour",
    base: "#feaa02",
    gradient: "linear-gradient(to bottom, #FFD700, #FF8C00)",
    blob: "rgb(179 100 0)", // golden orange
  },
  {
    name: "Midnight",
    base: "#2C5364",
    gradient: "linear-gradient(to bottom, #5c9fbc, #0F2027)",
    blob: "rgb(4 51 72)", // dark steel blue
  },
  {
    name: "Bright Flame",
    base: "#ff6d05",
    gradient: "linear-gradient(to bottom, #FFA500, #FF0000)",
    blob: "rgb(127 44 1)", // orange flame
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