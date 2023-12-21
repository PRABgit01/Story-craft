import React from "react";
import {
  StyledButtonComponent,
  OutlineButton,
  ButtonText,
} from "./buttons.style";

const Button = ({ type, variant, text, icon }) => {
  if (variant === "contained") {
    return (
      <StyledButtonComponent colorInput={type}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }

  if (variant === "outlined") {
    return (
      <OutlineButton colorInput={type}>
        {icon} {text}
      </OutlineButton>
    );
  }
  if (variant === "TextButton") {
    return <ButtonText colorInput={type}>{text}</ButtonText>;
  }

  return null;
};

export default Button;
