import React from "react";
import { AlertStyles } from "./Alert.style";


export const AlertComponent=({color,
    variant,
    text,
    isOutline,
    border,
    })=>{
    return(
        <AlertStyles colorinput={color} 
        variant={variant}
        isOutline={isOutline}
        border={border}>
            {text}
        </AlertStyles>
    )
}