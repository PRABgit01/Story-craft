import React from "react";
import { BadgeAvtar } from "./Badges";
import { AvtarConatiner,BadgeIcon,frameContainer } from "./Badges.style";

export default{
    title:"Badge ",
    component:BadgeAvtar
}

export const BadgesOnAvatar =()=>(
<AvtarConatiner>
    <frameContainer>
        <BadgeAvtar url="https://i.pravatar.cc/40" alt="avatar-2" size={2} variant="badgeOnAvtar" />
        <BadgeIcon />     
    </frameContainer>
    <frameContainer>
    <BadgeAvtar url="https://i.pravatar.cc/90" alt="avatar-2" size={3} variant="badgeOnAvtar" />
    <BadgeIcon />     
    </frameContainer>
    <frameContainer> 
    <BadgeAvtar url="https://i.pravatar.cc/60" alt="avatar-2" size={4} variant="badgeOnAvtar" />
    <BadgeIcon />     
    </frameContainer>
</AvtarConatiner>

)
