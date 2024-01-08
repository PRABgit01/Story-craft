import React from "react";
import {
  StyledDiscription,
  StyledImage,
  StyledTitle,
  StyledBadge,
  StyledDissmiss,
  StyledOverLay,
  StyledContainer,
} from "./Card.style";
import Button from "../Button/Button";

const Card = ({
  title,
  discription,
  alt,
  imageSrc,
  label,
  closeIcon,
  button,
  overlayText,
}) => {
  return (
    <>
      <StyledContainer>
        {label && <StyledBadge>{label}</StyledBadge>}
        {closeIcon && <StyledDissmiss>{closeIcon}</StyledDissmiss>}
        {imageSrc && <StyledImage src={imageSrc} alt={alt}></StyledImage>}
        <StyledTitle>{title}</StyledTitle>
        <StyledDiscription>{discription}</StyledDiscription>
        {button && <Button type="primary" variant="outlined" text={button} />}
        {overlayText && <StyledOverLay>{overlayText}</StyledOverLay>}
      </StyledContainer>
    </>
  );
};

export default Card;
