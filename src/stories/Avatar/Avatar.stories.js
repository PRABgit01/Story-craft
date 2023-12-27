import React from "react";
import { Avatar } from "./Avatar";
import { AvtarConatiner } from "./Avatar.style";

export default {
  title: "Avatr ",
  component: Avatar,
};

export const CircularProfileAvatar = () => (
  <AvtarConatiner>
    <Avatar
      url="https://i.pravatar.cc/40"
      type="small"
      alt="CircleAvatarSmall"
      variant="circle"
    />
    <Avatar
      url="https://i.pravatar.cc/90"
      type="medium"
      alt="CircleAvatarMedium"
      variant="circle"
    />
    <Avatar
      url="https://i.pravatar.cc/100"
      type="large"
      alt="CircleAvatarLarge"
      variant="circle"
    />
  </AvtarConatiner>
);

export const SquareProfileAvatar = () => (
  <AvtarConatiner>
    <Avatar
      url="https://i.pravatar.cc/10"
      type="small"
      alt="squareAvatarSmall"
    />
    <Avatar
      url="https://i.pravatar.cc/40"
      type="medium"
      alt="squareAvataMedium"
    />
    <Avatar
      url="https://i.pravatar.cc/10"
      type="large"
      alt="squareAvatarLarge"
    />
  </AvtarConatiner>
);
