import React from "react";
import Badge from "./Badge";
import { BadgesContainer } from "./Badge.style";


export default {
  title: "Badge",
  component: Badge,               
};

export const SquareProfileBadge = () => (     
  <BadgesContainer>
    <Badge url="https://i.pravatar.cc/40" size={2.4} variant="square"  colorInput="success"/>
    <Badge url="https://i.pravatar.cc/60" size={3.4} variant="square" colorInput="warning"/>
    <Badge url="https://i.pravatar.cc/80" size={4.4} variant="square" colorInput="primary" />
  </BadgesContainer>
);

export const BadgeOnIcon = () => (     
  <BadgesContainer>
    <Badge url="https://adorn-components.netlify.app/assets/images/cart.svg" size={2} variant="iconBadge"  colorInput="primary" text="10"/>
    <Badge url="https://adorn-components.netlify.app/assets/images/cart.svg" size={3} variant="iconBadge" colorInput="primary" text="12"/>
    <Badge url="https://adorn-components.netlify.app/assets/images/cart.svg" size={4} variant="iconBadge" colorInput="primary"  text="15"/>
  </BadgesContainer>
);