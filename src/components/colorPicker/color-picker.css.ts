import { style } from "@vanilla-extract/css";

export const dropdownContainer = style({
  position: "relative",
  width: "220px",
});

export const dropdownButton = style({
  width: "100%",
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
});

export const colorSwatch = style({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  border: "1px solid #ccc",
});

export const dropdownMenu = style({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "6px",
  marginTop: "4px",
  zIndex: 10,
  maxHeight: "250px",
  overflowY: "auto",
});

export const dropdownItem = style({
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  transition: "background 0.2s ease-in-out",
  selectors: {
    '&:hover': {
      background: "#f5f5f5",
    },
  },
});

export const selectedItem = style({
  backgroundColor: "#e0f7ff",
});
