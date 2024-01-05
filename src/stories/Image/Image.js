import React from "react";
import {
  StyledImage,
  StyledCircularImage,
  StyledFullImage,
} from "./Image.style";

export const Image = ({ url, alt, shape }) => {
  if (shape === "square") {
    return <StyledImage src={url} alt={alt}></StyledImage>;
  }

  if (shape === "circle") {
    return <StyledCircularImage src={url} alt={alt}></StyledCircularImage>;
  }

  if (shape === "full") {
    return <StyledFullImage src={url} alt={alt}></StyledFullImage>;
  }
  return null;
};
