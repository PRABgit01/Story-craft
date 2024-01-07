import React from "react";
import Cards from "./Card";
import {
  StyledSimpleCard,
  StyledCardBadge,
  StyledHorizontalCard,
  StyledHoriZontalImage,
} from "./Card.style";

export default {
  title: "Cards",
};

export const SimpleCard = () => {
  return (
    <>
      <StyledSimpleCard>
        <Cards
          title="Eren Yeager"
          discription="Eren Yeager was a former member of the Survey Corps. He was the main protagonist of Attack on Titan. He lived in Shiganshina District,"
        ></Cards>
      </StyledSimpleCard>
    </>
  );
};

export const CardWithBadges = () => {
  return (
    <>
      <StyledCardBadge>
        <Cards
          badge="The Traning"
          imageSrc="https://picsum.photos/300/200/?blur"
          alt="Badge"
          title="Survey Corps"
          discription="In the year 847, Eren, Mikasa Ackerman, and Armin Arlert joined the 104th Training Corps. The three graduated with Eren ranking 5th best, and they joined the Survey Corps following the battle of Trost District"
        ></Cards>
      </StyledCardBadge>
    </>
  );
};

export const CardWithDismiss = () => {
  return (
    <>
      <StyledCardBadge>
        <Cards
          dismiss="x"
          imageSrc="https://picsum.photos/300/200/?blur"
          alt="Badge"
          title="Survey Corps Story"
          discription="RS. 250"
          button="checkout"
        ></Cards>
      </StyledCardBadge>
    </>
  );
};

export const CardsWithTextOverlay = () => {
  return (
    <>
      <StyledCardBadge>
        <Cards
          dismiss="x"
          imageSrc="https://picsum.photos/300/200/?blur"
          alt="Badge"
          title="Eren Yeager"
          discription="RS. 250"
          button="Out Of stock"
          overlayText="out of stock"
        ></Cards>
      </StyledCardBadge>
    </>
  );
};

export const HorizontalCard = () => {
  return (
    <>
      <StyledHorizontalCard>
        <StyledHoriZontalImage
          img
          src="https://picsum.photos/300/200/?blur"
          alt="Badge"
        ></StyledHoriZontalImage>
        <Cards
          title="Founding Titan"
          discription="Despite having the ability to control the Titans, no Founding Titan of
          royal blood after the Great Titan War expressed any desire to get rid
          of the Titans outside the Walls, even if the inheritor had expressed
          that desire previously."
          button="Read more"
        ></Cards>
      </StyledHorizontalCard>
    </>
  );
};
