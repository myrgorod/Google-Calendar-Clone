import styled from "styled-components";

export const StyledToast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  color: #323749;
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 240px;
  padding: 18px;
  border-radius: 5px;
  box-shadow: 0px 16px 50px 0px #0000003d;
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  font-family: Inter;
  z-index: 10;
  transform: translateX(-250%);
  transition: 0.4s;

  &.show {
    transform: translateX(0%);
  }
  & svg {
    font-size: 35px;
    font-weight: 400;
    padding: 0 5px;
  }
`;
export const StyledButton = styled.button`
  font-size: 15px;
  background: #fff;
  color: #323749;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0px 16px 50px 0px #0000003d;
`;
