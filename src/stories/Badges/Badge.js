import React from "react";
import { ImageContainer, AvatarImage, BadgeIcon,BadgeForIcon,IconImageBadge } from "./Badge.style";

const Badge = ({ url, size, variant, colorInput,text }) => {
  if (variant === "square") {
    return (
      <ImageContainer>
        <AvatarImage size={size} src={url} alt="avatar" />
        <BadgeIcon colorInput={colorInput}/>
      </ImageContainer>
    );
  }   

  if (variant === "iconBadge") {
    return (
      <ImageContainer>
        <IconImageBadge size={size} src={url} alt="avatar"  />
        <BadgeForIcon colorInput={colorInput}>{text}</BadgeForIcon>
      </ImageContainer>
    );
  }

  return null;
};

export default Badge;
