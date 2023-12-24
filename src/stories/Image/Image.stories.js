import React from "react";
import { Image } from "./Image";
import { ImageContainer } from "./Image.style";

export default {
  title: "Images",
};

export const SquareImage = () => (
  <ImageContainer>
    <Image
      url="https://picsum.photos/352/350/?blur"
      alt="squareimage"
      shape="Square"
    />
    <Image
      url="https://picsum.photos/351/350/?blur"
      alt="squareimage"
      shape="Square"
    />
  </ImageContainer>
);

export const CircleImage = () => (
  <ImageContainer>
    <Image
      url="https://picsum.photos/355/350/?blur"
      alt="circleimage"
      shape="circle"
    />
    <Image
      url="https://picsum.photos/357/350/?blur"
      alt="circleimage"
      shape="circle"
    />
  </ImageContainer>
);

export const FullImage = () => (
  <ImageContainer>
    <Image
      url="https://picsum.photos/359/350/?blur"
      alt="fullImage"
      shape="full"
    />
  </ImageContainer>
);
