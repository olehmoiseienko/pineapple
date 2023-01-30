import styled from "styled-components";

export enum ButtonType {
  DEFAULT = "default",
  ERROR = "error",
}

interface ButtonProps {
  readonly buttonType: ButtonType;
}

const getFontColor = (buttonType: ButtonType) => {
  switch (buttonType) {
    case ButtonType.DEFAULT:
      return "var(--main-text-color)";
    case ButtonType.ERROR:
      return "var(--main-error-color)";
    default:
      return "var(--main-text-color)";
  }
};

const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => getFontColor(props.buttonType)};
  font-weight: 400;
  font-size: 14px;
  height: 42px;
  padding: 5px 25px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--main-border-color);
  cursor: pointer;

  &:hover {
    border-color: ${(props) => getFontColor(props.buttonType)};
  }
`;

export default StyledButton;
