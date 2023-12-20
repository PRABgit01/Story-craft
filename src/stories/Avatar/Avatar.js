import React from "react";
import {ImageCustom} from "./Avatar.style"

export const Avatar=({url,size,alt,variant})=>{
    return(
        <ImageCustom src={url} size={size} alt={alt} shape={variant}></ImageCustom>
    )
}