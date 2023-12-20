import React from "react";
import  {AlertComponent} from "./Alert";
import {AlertContainer} from './Alert.style';

export default{
    title:"Alerts",
    component:AlertComponent
}

export const SimpleAlert=()=>(
    <AlertContainer> 
    <AlertComponent color="primary" variant="contained" text="Primary! This is a Primary Alert - Check it now!" />
    <AlertComponent color="secondary" variant="contained" text="secondary! This is a Primary Alert - Check it now!" />
    <AlertComponent color="success" variant="contained" text="success! This is a Primary Alert - Check it now!" />
    <AlertComponent color="warning" variant="contained" text="warning! This is a Primary Alert - Check it now!" />
    </AlertContainer>
)

export const OutlineAlert=()=>(
    <AlertContainer> 
    <AlertComponent color="primary" variant="contained" isOutline text="Primary! This is a Primary Alert - Check it now!" />
    <AlertComponent color="secondary" variant="contained" isOutline text="secondary! This is a Primary Alert - Check it now!" />
    <AlertComponent color="success" variant="contained"  isOutline text="success! This is a Primary Alert - Check it now!" />
    <AlertComponent color="warning" variant="contained" isOutline text="warning! This is a Primary Alert - Check it now!" />
    </AlertContainer>
)