import styled from "styled-components";

export const StyledDropdown = styled.div`
  width: 80px;
  position: relative;

  .button {
	  width: 80px;
	  border: 1px solid #dedfe5;
	  border-radius: 8px;
	  color: #323749;
	  font-size: 15px;
	  font-weight: 400;
	  line-height: 20px;
	  padding: 12px 10px;
	  box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      background-color: #efefef;
      box-shadow: 0px 1px 2px 0px #454545;
    }
    &:active {
      background-color: #e0e0e0;
      box-shadow: 0px 1px 2px 0px #454545;
    }
  }
  .content {
    width: 100%;
    margin-top: 42px;
    top: 5px;

    position: absolute;
background: #fff;
    color: #323749;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;

    visibility: ${(props) => (props.open ? "visible" : "hidden")};

    & > * {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 13px 8px 12px 8px;
	  box-sizing: border-box;
      cursor: pointer;
      &:hover {
        background-color: #f6f6f6;
      }
      &:active {
        background-color: #e3e3e3;
      }
    }
    & :first-child {
      border-radius: 8px 8px 0 0;
      border: 1px solid #dee0e5;
    }
    & :last-child {
      border-radius: 0 0 8px 8px;
      border: 1px solid #dee0e5;
    }
  }
`;

