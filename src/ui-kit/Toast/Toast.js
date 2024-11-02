import React from "react";
import ToastWindow from "./ToastWindow";
import { useRef } from "react";
import { StyledButton } from "./Toast.style";

const Toast = ({ timeout, onClick, msg, ...props }) => {
  const toastRef = useRef();
  const handleClick = () => {
    toastRef.current.showToast(msg);
    console.log("msg");
  };
  return (
    <div>
      <ToastWindow
        ref={toastRef}
        timeout={timeout}
        data-testid="toast"
        {...props}
      />
      <StyledButton onClick={handleClick}>Show toast</StyledButton>
    </div>
  );
};

export default Toast;
