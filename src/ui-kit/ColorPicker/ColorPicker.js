import React from "react";
import { BiSolidSquareRounded as Icon } from "react-icons/bi";
import { ColorSVG } from "./ColorSVG";

const ColorPicker = ({ color, isSelected, onSelect }) => {
  return (
    <div onClick={() => onSelect(color)}>
      {" "}
      {isSelected ? (
        <ColorSVG color={color} data-testid="colorsvg" />
      ) : (
        <Icon color={color} role="img" data-testid="icon" />
      )}
    </div>
  );
};

export default ColorPicker;
