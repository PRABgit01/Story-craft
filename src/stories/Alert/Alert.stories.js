import React from "react";
import { AlertComponent } from "./Alert";
import { AlertContainer } from "./Alert.style";

export default {
  title: "Alert",
  component: AlertComponent,
};

export const ContainedAlert = () => (
  <AlertContainer>
    <AlertComponent
      type="primary"
      variant="contained"
      text="Primary! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="secondary"
      variant="contained"
      text="secondary! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="success"
      variant="contained"
      text="success! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="warning"
      variant="contained"
      text="warning! This is a Primary Alert - Check it now!"
    />
  </AlertContainer>
);

export const OutlineAlert = () => (
  <AlertContainer>
    <AlertComponent
      type="primary"
      variant="outline"
      isOutline
      text="Primary! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="secondary"
      variant="outline"
      isOutline
      text="secondary! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="success"
      variant="outline"
      isOutline
      text="success! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="warning"
      variant="outline"
      isOutline
      text="warning! This is a Primary Alert - Check it now!"
    />
  </AlertContainer>
);
