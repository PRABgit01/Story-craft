import React from "react";
import { Toast } from "./Toast";
import { ToastContainer } from "./Toast.style";

export default {
  title: "Toast ",
};

export const SimpleActionToast = () => (
  <ToastContainer>
    <Toast text="Successful toast for user action." type="success" />
    <Toast text="Warning toast for user action." type="warning" />
    <Toast text="danger toast for user action." type="dangerHover" />
  </ToastContainer>
);
