import React from "react";
import { Card } from "./Card";

export default {
  title: "Cards",
};

export const SimpleTextOnlyCard = () => (
  <Card
    variant="SimpleTextCard"
    cardTitle="Eren Yeager"
    cardContent="Eren Yeager was a former member of the Survey Corps. He was the main protagonist of Attack on Titan. He lived in Shiganshina District,"
  />
);

export const CardWithBadges = () => (
  <Card
    BadgeTxt="The Traning"
    url="https://picsum.photos/300/200/?blur"
    alt="product-image"
    variant="CardWithBadges"
    cardTitle="Survey Corps"
    cardContent="In the year 847, Eren, Mikasa Ackerman, and Armin Arlert joined the 104th Training Corps. The three graduated with Eren ranking 5th best, and they joined the Survey Corps following the battle of Trost District"
  />
);

export const CardsWithDismiss = () => (
  <Card
    BadgeTxt="X"
    url="https://picsum.photos/300/200/?blur"
    alt="product-image"
    variant="CardsWithDismiss"
    cardTitle="Survey Corps Story"
    cardContent="Rs. 250"
    CheckoutText="checkout"
  />
);

export const CardsWithTextOverlay = () => (
  <Card
    BadgeTxt="X"
    url="https://picsum.photos/300/200/?blur"
    alt="product-image"
    variant="CardsWithTextOverlay"
    cardTitle="Survey Corps Story"
    cardContent="Rs. 250"
    CheckoutText="Out Of Stock"
    OutOffStock="Out Of Stock"
  />
);

export const HorizontalCard = () => (
  <Card
    url="https://picsum.photos/300/200/?blur"
    alt="product-image"
    variant="HorizontalCard"
    cardTitle="Founding Titan"
    cardContent="Despite having the ability to control the Titans, no Founding Titan of royal blood after the Great Titan War expressed any desire to get rid of the Titans outside the Walls, even if the inheritor had expressed that desire previously"
    CheckoutText="Read More"
  />
);
