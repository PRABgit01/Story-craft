import React from "react";
import {
  StyledImageContainer,
  StyledAvatarImage,
  StyledBadgeIcon,
  StyledBadgeForIcon,
  StyledIconImageBadge,
} from "./Badge.styled";

const Badge = ({ url, type, variant, color, count }) => {
  if (variant === "square") {
    return (
      <StyledImageContainer>
        <StyledAvatarImage type={type} src={url} alt="avatar" />
        <StyledBadgeIcon color={color} type={type} />
      </StyledImageContainer>
    );
  }

  if (variant === "iconBadge") {
    return (
      <StyledImageContainer>
        <StyledIconImageBadge type={type} src={url} alt="avatar" />
        <StyledBadgeForIcon color={color} type={type}>
          {count}
        </StyledBadgeForIcon>
      </StyledImageContainer>
    );
  }
};

export default Badge;
