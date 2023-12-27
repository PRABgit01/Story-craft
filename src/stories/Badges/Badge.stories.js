import React from "react";
import Badge from "./Badge";
import { BadgesContainer } from "./Badge.style";


export default {
  title: "Badge",
  component: Badge,               
};

export const SquareProfileBadge = () => (     
  <BadgesContainer>
    <Badge url="https://i.pravatar.cc/40" type="small" variant="square"  colorInput="success"/>
    <Badge url="https://i.pravatar.cc/60" type="medium" variant="square" colorInput="warning"/>
    <Badge url="https://i.pravatar.cc/80" type="large" variant="square" colorInput="primary" />
  </BadgesContainer>
);

export const BadgeOnIcon = () => (     
  <BadgesContainer>
    <Badge url="https://adorn-components.netlify.app/assets/images/cart.svg" type="small" variant="iconBadge"  colorInput="primary" text="10"/>
    <Badge url="https://adorn-components.netlify.app/assets/images/cart.svg" type="medium" variant="iconBadge" colorInput="primary" text="12"/>
    <Badge url="https://adorn-components.netlify.app/assets/images/cart.svg" type="large" variant="iconBadge" colorInput="primary"  text="15"/>
  </BadgesContainer>
);