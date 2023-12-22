import React from "react";
import { TextType } from "./Typography.style";

const Typography = ({ htmltag, text, type,  }) => {
  return (
    <TextType as={htmltag}  type={type}>
      {text}
    </TextType>
  );
};

export default Typography;
