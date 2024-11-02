import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { StyledDropdown } from "./Dropdown.style";
import { TiArrowSortedDown } from "react-icons/ti";
import GlobalContext from "../../common/context/GlobalContext";

const Dropdown = ({ label, isOpen, isDisabled, options, ...props }) => {
  const { setView, view } = useContext(GlobalContext);
  const [value, setValue] = useState("Month");
  const toggling = () => setOpen(!open);
  const [open, setOpen] = useState(false);
  const onElementClicked = (option) => {
    setValue(option);
  };

  const onButton = () => {
    setOpen((open) => !open);
  };
  const handleChange = (option) => {
    setView(option);
  };

  return (
    <StyledDropdown $isOpen={open} disabled={isDisabled} {...props}>
      <div
        className="button"
        role="button"
        onClick={!isDisabled ? onButton : () => {}}
      >
        {value}
        <TiArrowSortedDown />
      </div>
      {open && !isDisabled && (
        <div className="content">
          {options.map((option, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  onElementClicked(option);
                  toggling();
                  handleChange(option);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </StyledDropdown>
  );
};
Dropdown.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
  options: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool,
};

export default Dropdown;
