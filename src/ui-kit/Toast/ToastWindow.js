import React, { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { StyledToast } from "./Toast.style";
import { IoIosClose } from "react-icons/io";

const ToastWindow = ({ timeout }, ref) => {
  const [isShow, setIsShow] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  useImperativeHandle(ref, () => ({
    showToast(msg = "") {
      setIsShow(true);
      setToastMsg(msg);
      setTimeout(() => {
        setIsShow(false);
      }, timeout);
    },
  }));
  return (
    <StyledToast
      aria-label="button"
      onClick={() => setIsShow(false)}
      className={isShow ? "show" : ""}
    >
      {toastMsg} <IoIosClose />
    </StyledToast>
  );
};
ToastWindow.propTypes = {
  isShow: PropTypes.bool,
  timeout: PropTypes.number,
  msg: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default forwardRef(ToastWindow);
