import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./Button.style";
import { FaPlus } from "react-icons/fa6";

const Button = ({
  onClick,
  isIcon,
  variant,
  label,
  size,
  isDisabled,
  ...props
}) => {
  return (
    <ButtonWrapper
      data-testid="button"
      variant={variant}
      icon={isIcon}
      size={size}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      <FaPlus role="img" />
      {label}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
