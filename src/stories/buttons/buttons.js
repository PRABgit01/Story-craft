import React from "react";

import { StyledButtonComponent } from "./buttons.style";

const Buttons = ({ type, variant, text, icon, isOutline, border,disableHover }) => {
  return (
    <StyledButtonComponent
      type={type}
      variant={variant}
      isOutline={isOutline}
      border={border}
      disableHover={disableHover}
    >
      {icon} {text}
    </StyledButtonComponent>
  );
};

export default Buttons;
