import React from "react";
import { Avatar } from "./Avatar";
import { AvtarConatiner } from "./Avatar.style";

export default{
    title:"Avatr ",
    component:Avatar
}

export const CircularProfileAvatar =()=>(
<AvtarConatiner>
<Avatar url="https://i.pravatar.cc/40" size={1.3} alt="avatar-2" variant="circle" />
<Avatar url="https://i.pravatar.cc/90"  size={2.3} alt="avatar-2" variant="circle"/>
<Avatar url="https://i.pravatar.cc/100" size={3.3} alt="avatar-3" variant="circle"/>
</AvtarConatiner>
)

export const SquareProfileAvatar =()=>(
    <AvtarConatiner>
    <Avatar url="https://i.pravatar.cc/10" size={1.3}  alt="avatar-1"/>
    <Avatar url="https://i.pravatar.cc/40"  size={2.3} alt="avatar-2"/>
    <Avatar url="https://i.pravatar.cc/10" size={3.3} alt="avatar-3"/>
    </AvtarConatiner>
    )