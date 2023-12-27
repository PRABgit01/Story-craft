import React from "react";
import Typography from "./Typography";
import { TextContainer } from "./Typography.style";

export default {
  title: "Typography Page",
  component: Typography,
};

export const HeadingTypography = () => (
  <TextContainer>
    <Typography htmltag="h1" text="H1. Adorn Box heading"  />
    <Typography htmltag="h2" text="H2. Adorn Box heading"  />
    <Typography htmltag="h3" text="H3. Adorn Box heading"  />
    <Typography htmltag="h4" text="H4. Adorn Box heading"  />
    <Typography htmltag="h5" text="H5. Adorn Box heading" />
    <Typography htmltag="h6" text="H6. Adorn Box heading"  />
  </TextContainer>
);

export const FontColors = () => (
  <TextContainer>
    <Typography
      htmltag="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      htmltag="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      htmltag="p"
      text="Adorn Box text with success color"
      type="success"
    />
    <Typography
      htmltag="p"
      text="Adorn Box text with danger color"
      type="badgeBg"
    />
    <Typography
      htmltag="p"
      text="Adorn Box text with warning color"
      type="warning"
    />
  </TextContainer>
);
