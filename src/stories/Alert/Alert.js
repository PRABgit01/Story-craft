import React from "react";
import { AlertStyles,OutlineAlertStyle } from "./Alert.style";

export const AlertComponent = ({ type, variant, text }) => {

  if(variant=="contained"){
    return(
      <AlertStyles type={type} >{text}</AlertStyles>
    )
  }
  if(variant=="outline"){
    return(
    <OutlineAlertStyle type={type} >{text}</OutlineAlertStyle>)
  }
  return null;
};
