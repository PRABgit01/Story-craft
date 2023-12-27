import React from "react";
import { ImageContainer, AvatarImage, BadgeIcon,BadgeForIcon,IconImageBadge } from "./Badge.style";

const Badge = ({ url, type, variant, colorInput,text }) => {
  if (variant === "square") {
    return (
      <ImageContainer>
        <AvatarImage type={type} src={url} alt="avatar" />
        <BadgeIcon colorInput={colorInput} type={type} />
      </ImageContainer>
    );
  }   

  if (variant === "iconBadge") {
    return (
      <ImageContainer>
        <IconImageBadge type={type} src={url} alt="avatar"  />
        <BadgeForIcon colorInput={colorInput} type={type}>{text}</BadgeForIcon>
      </ImageContainer>
    );
  }

  return null;
};

export default Badge;
