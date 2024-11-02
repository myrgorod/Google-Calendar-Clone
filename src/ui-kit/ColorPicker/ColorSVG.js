import React from "react";
import { StyledColorPicker } from "./ColorPicker.style";

export const ColorSVG = ({ color }) => {
  return (
    <StyledColorPicker
      color={color}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="12" height="12" rx="4" fill={color} />
      <rect x="0.5" y="0.5" width="15" height="15" rx="4.5" stroke={color} />
    </StyledColorPicker>
  );
};
