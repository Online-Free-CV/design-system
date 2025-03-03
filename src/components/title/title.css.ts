import { style } from "@vanilla-extract/css";
import "@fontsource/pacifico"; // Import the font

export const titleStyle = style({
  fontFamily: "Pacifico,'Pacifico-fallback', sans-serif", // Ensure fallback font is provided
  fontSize: "xxxl",
  fontStyle: "normal",
});

export const titleLastNameStyle = style({
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "0 0.5rem",
  backgroundImage: "linear-gradient(to bottom, #FFA500, #FF0000)",
});