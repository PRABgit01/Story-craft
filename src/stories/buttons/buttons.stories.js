import React from "react";
import Buttons, { OutlineButton, IconButton, Textbutton } from "./buttons";

export default {
  title: "Buttons",
  component: Buttons,
};

export const listButton = () => (
  <Buttons
    message1="PRIMARY BUTTON"
    message2="SECONDARY BUTTON"
    message3="SUCCESS BUTTON"
    message4="WARNING BUTTON"
  />
);
export const OutlineButtons = () => (
  <OutlineButton
    message1="PRIMARY BUTTON"
    message2="SECONDARY BUTTON"
    message3="SUCCESS BUTTON"
    message4="WARNING BUTTON"
  />
);
export const IconButtons = () => (
  <IconButton message1="SAVE BUTTON" message2="SAVE BUTTON" />
);

export const TextButtons = () => (
  <Textbutton
    message1="PRIMARY BUTTON"
    message2="SECONDARY BUTTON"
    message3="SUCCESS BUTTON"
    message4="WARNING BUTTON"
  />
);
