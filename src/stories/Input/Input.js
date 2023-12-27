import React from "react";
import { LabelContainer, LabelInput, LabelText,PasswordText,PasswordInput } from "./Input.style";

export const Input = () => {
  return (
    <LabelContainer>
      <div>
        <LabelText>Username *</LabelText>
        <LabelInput></LabelInput>
        <PasswordText>Password *</PasswordText>
        <PasswordInput></PasswordInput>
        <PasswordText>Password is incorrect</PasswordText>
      </div>
    </LabelContainer>
  );
};
