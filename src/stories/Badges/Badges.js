import React from "react";
import {ImageCustom} from "./Badges.style"

export const BadgeAvtar=({url,size,alt,variant})=>{
    
    if(variant==="badgeOnAvtar"){
        return(
            <ImageCustom src={url} size={size} ></ImageCustom>
        )
    }   
}