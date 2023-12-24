import React from "react";
import {
  StyledButtonComponent,
  OutlineButton,
  ButtonText,
} from "./Button.style";

const Button = ({ type, shape, text, icon }) => {
  if (shape === "contained") {
    return (
      <StyledButtonComponent colorInput={type}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }

  if (shape === "outlined") {
    return (
      <OutlineButton colorInput={type}>
        {icon} {text}
      </OutlineButton>
    );
  }
  if (shape === "TextButton") {
    return <ButtonText colorInput={type}>{text}</ButtonText>;
  }

  return null;
};

export default Button;
