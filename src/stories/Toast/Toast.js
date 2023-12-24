import React from "react";
import { ToastStyle } from "./Toast.style";

export const Toast=({type,text})=>{
    return(
        <ToastStyle type={type}>
        {text}
        </ToastStyle>
    )
}