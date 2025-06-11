import { tokens } from "@styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const sectionStyle = style({
  flex: 3,
});

export const sectionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: tokens.spacing.md
})

export const sectionDetailsStyle = style({
  backgroundColor: tokens.colors.white,
  borderRadius: tokens.radii.md,
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  marginBottom: tokens.spacing.md,
  border: '2px solid #e9eef8 !important',

});

export const sectionDetailsTitleStyle = style({
  margin: 0,
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing.sm,
  width: "calc(100% - 70px)"
});

globalStyle(`${sectionDetailsTitleStyle} > span`, {
  height: "2px",
  width: "20%",
  backgroundImage: `-webkit-linear-gradient(${tokens.colors.orange}, ${tokens.colors.fireEngineRed})`,
  display: "block",
  borderRadius: tokens.radii.sm
});
