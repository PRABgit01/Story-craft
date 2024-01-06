import React from "react";
import {
  InputField,
  PrefixIcon,
  StyleComponentInput,
  SuffixIcon,
} from "./Input.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Inputs = ({ type, id, placeholder, prefix, suffix }) => {
  return (
    <>
      <StyleComponentInput>
        {prefix && (
          <PrefixIcon>
            <FontAwesomeIcon icon={prefix} />
          </PrefixIcon>
        )}
        <InputField type={type} placeholder={placeholder} id={id} />
        {suffix && (
          <SuffixIcon>
            <FontAwesomeIcon icon={suffix} />
          </SuffixIcon>
        )}
      </StyleComponentInput>
    </>
  );
};

export default Inputs;
