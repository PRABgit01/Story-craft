import React from "react";
import { ImageStyle, CircularImageStyle, FullImage } from "./Image.style";

export const Image = ({ url, alt, shape }) => {
  if (shape === "Square") {
    return <ImageStyle src={url} alt={alt}></ImageStyle>;
  }

  if (shape === "circle") {
    return <CircularImageStyle src={url} alt={alt}></CircularImageStyle>;
  }

  if (shape === "full") {
    return <FullImage src={url} alt={alt}></FullImage>;
  }
  return null;
};
