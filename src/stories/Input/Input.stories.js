import React from "react";
import { StyledInputContainer } from "./Input.style";
import Typography from "../Typograpgy/Typography";
import { faOpensuse, faUserNinja } from "@fortawesome/free-solid-svg-icons";

import Inputs from "./Input";

export default {
  title: "Input",
};

export const InputComponent = () => (
  <>
    <StyledInputContainer>
      <Typography htmltag="p" text="Username*" />
      <Inputs
        type="text"
        placeholder="Enter Your Name"
        id="Id Name"
        prefix={faUserNinja}
      ></Inputs>
      <Typography htmltag="p" text="Password*" type="primary" />
      <Inputs
        type="password"
        placeholder="password here"
        id="Id Name"
        suffix={faUserNinja}
      ></Inputs>
      <Typography htmltag="p" text="Password is incorrect" type="primary" />
    </StyledInputContainer>
  </>
);
