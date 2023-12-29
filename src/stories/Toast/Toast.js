import React from "react";
import { StyledToast } from "./Toast.style";

export const Toast = ({ type, text }) => {
  return <StyledToast type={type}>{text}</StyledToast>;
};
