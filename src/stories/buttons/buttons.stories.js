import React from "react";
import { FaSave } from "react-icons/fa";
import Buttons from "./buttons";

export default {
  title: "Buttons",
  component: Buttons,
};

export const listButton = () => (
  <div>
    <Buttons type="primary" variant="contained" text="PRIMARY BUTTON" />
    <Buttons type="secondary" variant="contained" text="SECONDARY BUTTON" />
    <Buttons type="success" variant="contained" text="SUCCESS BUTTON" />
    <Buttons type="warning" variant="contained" text="WARNING BUTTON" />
  </div>
);

export const OutlineButtons = () => (
  <div>
    <Buttons type="primary" variant="outline" text="PRIMARY BUTTON" isOutline />
    <Buttons
      type="secondary"
      variant="outlined"
      text="SECONDARY BUTTON"
      isOutline
    />
    <Buttons
      type="success"
      variant="outlined"
      text="SUCCESS BUTTON"
      isOutline
    />
    <Buttons
      type="warning"
      variant="outlined"
      text="WARNING BUTTON"
      isOutline
    />
  </div>
);

export const IconButtons = () => (
  <div>
    <Buttons
      type="primary"
      variant="outlined"
      text="SAVE BUTTON"
      isOutline
      icon={<FaSave />}
    />
    <Buttons
      type="primary"
      variant="contained"
      text="SAVE BUTTON"
      icon={<FaSave />}
    />
  </div>
);

export const TextButtons = () => (
  <div>
    <Buttons
      type="primary"
      variant="contained"
      text="PIRMARY LINK BUTTON"
      isOutline
      border
      disableHover
      
    />
    <Buttons
      type="secondary"
      variant="contained"
      text="SECONDARY LINK BUTTON"
      isOutline
      border
      disableHover
    
    />
    <Buttons
      type="success"
      variant="contained"
      text="SUCCESS LINK BUTTON"
      isOutline
      border
      disableHover

    />
    <Buttons
      type="warning"
      variant="contained"
      text="WARNING LINK BUTTON"
      isOutline
      border
      disableHover
    />
  </div>
);
