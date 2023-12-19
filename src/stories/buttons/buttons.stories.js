import React from "react";
import { FaSave } from "react-icons/fa";
import Button from "./buttons";
import { StyledContainer } from "./buttons.style";

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
    <Button type="primary" variant="outline" text="PRIMARY BUTTON" isOutline />
    <Button
      type="secondary"
      variant="outlined"
      text="SECONDARY BUTTON"
      isOutline
    />
    <Button type="success" variant="outlined" text="SUCCESS BUTTON" isOutline />
    <Button type="warning" variant="outlined" text="WARNING BUTTON" isOutline />
  </StyledContainer>
);

export const IconButtons = () => (
  <StyledContainer>
    <Button
      type="primary"
      variant="outlined"
      text="SAVE BUTTON"
      isOutline
      icon={<FaSave />}
    />
    <Button
      type="primary"
      variant="contained"
      text="SAVE BUTTON"
      icon={<FaSave />}
    />
  </StyledContainer>
);

export const TextButtons = () => (
  <StyledContainer>
    <Button
      type="primary"
      variant="contained"
      text="PIRMARY LINK BUTTON"
      isOutline
      border
      disableHover
    />
    <Button
      type="secondary"
      variant="contained"
      text="SECONDARY LINK BUTTON"
      isOutline
      border
      disableHover
    />
    <Button
      type="success"
      variant="contained"
      text="SUCCESS LINK BUTTON"
      isOutline
      border
      disableHover
    />
    <Button
      type="warning"
      variant="contained"
      text="WARNING LINK BUTTON"
      isOutline
      border
      disableHover
    />
  </StyledContainer>
);
