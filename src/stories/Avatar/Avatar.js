import React from "react";
import {ImageCustom} from "./Avatar.style"

export const Avatar=({url,type,alt,variant})=>{
    return(
        <ImageCustom src={url} type={type} alt={alt} shape={variant}></ImageCustom>
    )
}