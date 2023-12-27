import React from "react";
import Badge from "./Badge";
import { StyledBadgesContainer } from "./Badge.styled";

export default {
  title: "Badge",
  component: Badge,
};

export const SquareProfileBadge = () => (
  <StyledBadgesContainer>
    <Badge
      url="https://i.pravatar.cc/40"
      type="small"
      variant="square"
      color="success"
    />
    <Badge
      url="https://i.pravatar.cc/60"
      type="medium"
      variant="square"
      color="warning"
    />
    <Badge
      url="https://i.pravatar.cc/80"
      type="large"
      variant="square"
      color="primary"
    />
  </StyledBadgesContainer>
);

export const BadgeOnIcon = () => (
  <StyledBadgesContainer>
    <Badge
      url="https://adorn-components.netlify.app/assets/images/cart.svg"
      type="small"
      variant="iconBadge"
      color="primary"
      count="10"
    />
    <Badge
      url="https://adorn-components.netlify.app/assets/images/cart.svg"
      type="medium"
      variant="iconBadge"
      color="primary"
      count="12"
    />
    <Badge
      url="https://adorn-components.netlify.app/assets/images/cart.svg"
      type="large"
      variant="iconBadge"
      color="primary"
      count="15"
    />
  </StyledBadgesContainer>
);
