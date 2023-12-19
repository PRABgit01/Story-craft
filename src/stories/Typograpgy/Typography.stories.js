import React from "react";
import Typography from "./Typography";
import {TextContainer} from "./Typography.style"

export default {
  title: "Typography Page",
  component: Typography,
};

export const typography = () => (
    <TextContainer>
        <Typography htmltag="h1" text="H1. Adorn Box heading" value={4.8} />
        <Typography htmltag="h2" text="H2. Adorn Box heading"   value={3.6} />
        <Typography htmltag="h3" text="H3. Adorn Box heading"  value={2.8}/>
        <Typography htmltag="h4" text="H4. Adorn Box heading" value={1.8}/>
        <Typography htmltag="h5" text="H5. Adorn Box heading" value={1.4}/>
        <Typography htmltag="h6" text="H6. Adorn Box heading" value={1}/>
    </TextContainer>
)

export const FontColors=()=>(
    <TextContainer>
        <Typography htmltag="p" text="Adorn Box text with primary color" type="primary" />
        <Typography htmltag="p" text="Adorn Box text with primary color" type="primary" />
        <Typography htmltag="p" text="Adorn Box text with success color" type="success" />
        <Typography htmltag="p" text="Adorn Box text with danger color" type="badgeBg" />
        <Typography htmltag="p" text="Adorn Box text with warning color" type="warning" />

    </TextContainer>
)