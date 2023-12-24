import React from "react";
import { FaSave } from "react-icons/fa";
import Button from "./Button";
import { StyledContainer } from "./Button.style";

export default {
  title: "Buttons",
  component: Button,
};

export const listButton = () => (
  <StyledContainer>
    <Button type="primary" shape="contained" text="Primary Button" />
    <Button type="secondary" shape="contained" text="SECONDARY BUTTON" />
    <Button type="success" shape="contained" text="SUCCESS BUTTON" />
    <Button type="warning" shape="contained" text="WARNING BUTTON" />
  </StyledContainer>
);

export const OutlineButtons = () => (
  <StyledContainer>
    <Button type="primary" shape="outlined" text="PRIMARY BUTTON" />
    <Button type="secondary" shape="outlined" text="SECONDARY BUTTON" />
    <Button type="success" shape="outlined" text="SUCCESS BUTTON" />
    <Button type="warning" shape="outlined" text="WARNING BUTTON" />
  </StyledContainer>
);

export const IconButtons = () => (
  <StyledContainer>
    <Button
      type="primary"
      shape="outlined"
      text="save button"
      icon={<FaSave />}
    />
    <Button
      type="primary"
      shape="contained"
      text="save button"
      icon={<FaSave />}
    />
  </StyledContainer>
);

export const TextButtons = () => (
  <StyledContainer>
    <Button type="primary" shape="TextButton" text="PIRMARY LINK BUTTON" />
    <Button type="secondary" shape="TextButton" text="SECONDARY LINK BUTTON" />
    <Button type="success" shape="TextButton" text="SUCCESS LINK BUTTON" />
    <Button type="warning" shape="TextButton" text="WARNING LINK BUTTON" />
  </StyledContainer>
);
