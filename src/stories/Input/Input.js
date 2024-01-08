import React from "react";
import {
  StyledInputField,
  StyledPrefixIcon,
  StyleComponentInput,
  StyledSuffixIcon,
} from "./Input.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Inputs = ({ type, id, placeholder, prefix, suffix }) => {
  return (
    <>
      <StyleComponentInput>
        {prefix && (
          <StyledPrefixIcon>
            <FontAwesomeIcon icon={prefix} />
          </StyledPrefixIcon>
        )}
        <StyledInputField type={type} placeholder={placeholder} id={id} />
        {suffix && (
          <StyledSuffixIcon>
            <FontAwesomeIcon icon={suffix} />
          </StyledSuffixIcon>
        )}
      </StyleComponentInput>
    </>
  );
};

export default Inputs;
