import React from "react";
import {
  StyledButtonComponent,
  OutlineButton,
  ButtonText,
} from "./Button.style";

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
  

  return  <ButtonText colorInput={type}>{text}</ButtonText>;;
};

export default Button;
