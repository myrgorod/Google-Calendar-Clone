import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  border: 1px solid transparent;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${(props) => {
    if (props.variant === "primary") {
      return css`
        background-color: #00ae1c;
        color: #fff;
        &:hover {
          background-color: #00ae1c;
          border: 1px solid #5ce171;
		  /* box-shadow: 0 0 0 1px red */
		  /* box-shadow: 0 0 0 3px red; */
        }
        &:disabled {
          background-color: #187727;
          color: #b9b9b9;
          opacity: 0.6;
          cursor: not-allowed;
        }
        &:active {
          background-color: #0cd52b;
          border: 1px solid #5ce171;
        }
      `;
    }
    if (props.variant === "secondary") {
      return css`
        background-color: #fff;
        color: #323749;
        border: 1px solid #dedfe5;
        &:hover {
          background-color: #efefef;
          color: #323749;
          border: 1px solid #dedfe5;
        }
        &:disabled {
          background-color: #c8c8c8;
          color: #323749;
          border: 1px solid #8d8e91;
          opacity: 0.6;
          cursor: not-allowed;
        }
        &:active {
          background-color: #e0e0e0;
          color: #323749;
          border: 1px solid #dedfe5;
        }
      `;
    }
  }}
  ${(props) => {
    if (props.size === "sm") {
      return css`
        font-size: 15px;
        line-height: 20px;
        padding: 10px 15px;
      `;
    }
    if (props.size === "md") {
      return css`
        font-size: 18px;
        line-height: 22px;
        padding: 14px 22px;
      `;
    }
    if (props.size === "lg") {
      return css`
        font-size: 20px;
        line-height: 25px;
        padding: 18px 65px;
        border-radius: 15px;
      `;
    }
  }}
  ${(props) => {
    if (props.icon === true) {
      return css`
        svg {
          margin-right: 5px;
        }
      `;
    }
    if (props.icon === false) {
      return css`
        svg {
          display: none;
        }
      `;
    }
  }}
`;
