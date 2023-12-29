import React from "react";
import { Image } from "./Image";
import { StyledImageContainer } from "./Image.style";

export default {
  title: "Images",
};

export const SquareImage = () => (
  <StyledImageContainer>
    <Image
      url="https://picsum.photos/352/350/?blur"
      alt="SquareImage"
      shape="square"
    />
    <Image
      url="https://picsum.photos/351/350/?blur"
      alt="SquareImage"
      shape="square"
    />
  </StyledImageContainer>
);

export const CircleImage = () => (
  <StyledImageContainer>
    <Image
      url="https://picsum.photos/355/350/?blur"
      alt="CircleImage"
      shape="circle"
    />
    <Image
      url="https://picsum.photos/357/350/?blur"
      alt="CircleImage"
      shape="circle"
    />
  </StyledImageContainer>
);

export const FullWidthImage = () => (
  <StyledImageContainer>
    <Image
      url="https://picsum.photos/359/350/?blur"
      alt="StyledFullImage"
      shape="full"
    />
  </StyledImageContainer>
);
