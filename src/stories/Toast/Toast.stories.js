import React from "react";
import { Toast } from "./Toast";
import { StyledToastContainer } from "./Toast.style";

export default {
  title: "Toast ",
};

export const SimpleActionToast = () => (
  <StyledToastContainer>
    <Toast text="Successful toast for user action." type="success" />
    <Toast text="Warning toast for user action." type="warning" />
    <Toast text="danger toast for user action." type="dangercolor" />
  </StyledToastContainer>
);
