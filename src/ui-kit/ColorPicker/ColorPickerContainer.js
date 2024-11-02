import React, { useContext } from "react";
import ColorPicker from "./ColorPicker";
import { StyledContainerColor } from "./ColorPicker.style";
import GlobalContext from "../../common/context/GlobalContext";
const labelClasses = [
  "#9F2957",
  "#d90056",
  "#e25d33",
  "#dfc45a",
  "#b8c42f",
  "#16af6e",
  "#424988",
  "#397e49",
  "#439bdf",
  "#4254af",
  "#6c7ac4",
  "#8332a4",
];

const ColorPickerContainer = () => {
  const { selectedLabel, setSelectedLabel } = useContext(GlobalContext);
  return (
    <StyledContainerColor>
      <p className="py-2">Color</p>
      <div className="container grid grid-cols-6 grid-rows-2 gap-4 p-2 cursor-pointer">
        {labelClasses.map((lblClass, i) => (
          <div key={i}>
            <ColorPicker
              color={lblClass}
              isSelected={lblClass === selectedLabel}
              onSelect={setSelectedLabel}
            />
          </div>
        ))}
      </div>
    </StyledContainerColor>
  );
};

export default ColorPickerContainer;
