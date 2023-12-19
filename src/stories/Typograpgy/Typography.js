import React from "react";
import { TextType } from "./Typography.style";

const Typography = ({ htmltag ,text,type,value }) => {
  return (<TextType as={htmltag} fontSize={value} type={type} >{text}  </TextType>);
};

export default Typography;