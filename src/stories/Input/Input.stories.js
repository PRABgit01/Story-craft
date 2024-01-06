import React from "react";
import { InputContainer } from "./Input.style";
import Typography from "../Typograpgy/Typography";
import { faOpensuse, faUserNinja } from "@fortawesome/free-solid-svg-icons";

import Inputs from "./Input";

export default {
  title: "Input",
};

export const InputComponent = () => (
  <>
    <InputContainer>
      <Typography htmltag="p" text="Username*"  />
      <Inputs
        type="text"
        placeholder="Enter Your Name"
        id="IDNo."
        prefix={faUserNinja}
      ></Inputs>
      <Typography htmltag="p" text="Password*" type="primary" />
      <Inputs
        type="password"
        placeholder="password here"
        id="IDNo."
        suffix={faUserNinja}
      ></Inputs>
      <Typography htmltag="p" text="Password is incorrect" type="primary" />
    </InputContainer>
  </>
);
