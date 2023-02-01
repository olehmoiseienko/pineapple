import styled from "styled-components";

export enum ButtonType {
  DEFAULT = "default",
  ERROR = "error",
}


const StyledIconicButton = styled.button`
  display: inline;
  padding: 0 5px;
  height: auto;
  margin: 0 5px;
  color: var(--main-text-color);
  font-weight: 400;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--main-border-color);
  cursor: pointer;
  z-index: 1;
  user-select: none;

  &:hover {
    border-color: var(--main-text-color);
  }
  
  &:disabled {
    opacity: 0.7;
  }
`;

export default StyledIconicButton;
