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
    <Button type="primary" variant="contained" text="Primary Button" />
    <Button type="secondary" variant="contained" text="SECONDARY BUTTON" />
    <Button type="success" variant="contained" text="SUCCESS BUTTON" />
    <Button type="warning" variant="contained" text="WARNING BUTTON" />
  </StyledContainer>
);

export const OutlineButtons = () => (
  <StyledContainer>
    <Button type="primary" variant="outlined" text="PRIMARY BUTTON" />
    <Button type="secondary" variant="outlined" text="SECONDARY BUTTON" />
    <Button type="success" variant="outlined" text="SUCCESS BUTTON" />
    <Button type="warning" variant="outlined" text="WARNING BUTTON" />
  </StyledContainer>
);

export const IconButtons = () => (
  <StyledContainer>
    <Button
      type="primary"
      variant="outlined"
      text="save button"
      icon={<FaSave />}
    />
    <Button
      type="primary"
      variant="contained"
      text="save button"
      icon={<FaSave />}
    />
  </StyledContainer>
);

export const TextButtons = () => (
  <StyledContainer>
    <Button type="primary"  text="PIRMARY LINK BUTTON" />
    <Button
      type="secondary"
      variant="TextButton"
      text="SECONDARY LINK BUTTON"
    />
    <Button type="success" variant="TextButton" text="SUCCESS LINK BUTTON" />
    <Button type="warning" variant="TextButton" text="WARNING LINK BUTTON" />
  </StyledContainer>
);
