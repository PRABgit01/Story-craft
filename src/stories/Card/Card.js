import React from "react";
import {
  BadgeText,
  CardBadge,
  CardBox,
  CardContainer,
  CardPara,
  CardTitle,
  DissMissBadge,
  OutlineButton,
  MiddleText,
  HorizontalCard,
  SmallImage,
} from "./Card.style";

export const Card = ({
  cardTitle,
  cardContent,
  variant,
  url,
  alt,
  BadgeTxt,
  CheckoutText,
  OutOffStock,
}) => {
  if (variant === "SimpleTextCard") {
    return (
      <CardContainer>
        <CardBox>
          <div>
            <CardTitle>{cardTitle}</CardTitle>
            <CardPara>{cardContent}</CardPara>
          </div>
        </CardBox>
      </CardContainer>
    );
  }

  if (variant === "CardWithBadges") {
    return (
      <CardContainer>
        <CardBox>
          <BadgeText>{BadgeTxt}</BadgeText>
          <CardBadge src={url} alt={alt} />
          <div>
            <CardTitle>{cardTitle}</CardTitle>
            <CardPara>{cardContent}</CardPara>
          </div>
        </CardBox>
      </CardContainer>
    );
  }
  if (variant === "CardsWithDismiss") {
    return (
      <CardContainer>
        <CardBox>
          <DissMissBadge>{BadgeTxt}</DissMissBadge>
          <CardBadge src={url} alt={alt} />
          <div>
            <CardTitle>{cardTitle}</CardTitle>
            <CardPara>{cardContent}</CardPara>
            <OutlineButton>{CheckoutText}</OutlineButton>
          </div>
        </CardBox>
      </CardContainer>
    );
  }

  if (variant === "CardsWithTextOverlay") {
    return (
      <CardContainer>
        <CardBox>
          <DissMissBadge>{BadgeTxt}</DissMissBadge>
          <CardBadge src={url} alt={alt} />
          <MiddleText>{OutOffStock}</MiddleText>
          <div>
            <CardTitle>{cardTitle}</CardTitle>
            <CardPara>{cardContent}</CardPara>
            <OutlineButton>{CheckoutText}</OutlineButton>
          </div>
        </CardBox>
      </CardContainer>
    );
  }

  if (variant === "HorizontalCard") {
    return (
      <CardContainer>
        <HorizontalCard>
          <SmallImage src={url} alt={alt} />
          <div>
            <CardTitle>{cardTitle}</CardTitle>
            <CardPara>{cardContent}</CardPara>
            <OutlineButton>{CheckoutText}</OutlineButton>
          </div>
        </HorizontalCard>
      </CardContainer>
    );
  }
};
