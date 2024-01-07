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

const Cards = ({
  title,
  discription,
  alt,
  imageSrc,
  badge,
  dismiss,
  button,
  overlayText,
}) => {
  return (
    <>
      <StyledContainer>
        {badge && <StyledBadge>{badge}</StyledBadge>}
        {dismiss && <StyledDissmiss>{dismiss}</StyledDissmiss>}
        {imageSrc && <StyledImage src={imageSrc} alt={alt}></StyledImage>}
        <StyledTitle>{title}</StyledTitle>
        <StyledDiscription>{discription}</StyledDiscription>
        {button && <Button type="primary" variant="outlined" text={button} />}
        {overlayText && <StyledOverLay>{overlayText}</StyledOverLay>}
      </StyledContainer>
    </>
  );
};

export default Cards;
