import React from "react";

import {
  Primary,
  Secondary,
  Success,
  Dngr,
  PrimaryOutl,
  SecondaryOutl,
  SuccessOutl,
  DngrOutl,
  Icnoutline,
  Icnfullline,
} from "./buttons.style";

//text button template

const Buttons = ({ message1, message2, message3, message4 }) => {
  return (
    <div>
      <Primary style={{ marginRight: "10px" }}> {message1}</Primary>
      <Secondary style={{ marginRight: "10px" }}>{message2}</Secondary>
      <Success style={{ marginRight: "10px" }}>{message3}</Success>
      <Dngr>{message4}</Dngr>
    </div>
  );
};

export default Buttons;

export const OutlineButton = ({ message1, message2, message3, message4 }) => {
  return (
    <div>
      <PrimaryOutl style={{ marginRight: "10px" }}>{message1}</PrimaryOutl>
      <SecondaryOutl style={{ marginRight: "10px" }}>{message2}</SecondaryOutl>
      <SuccessOutl style={{ marginRight: "10px" }}>{message3}</SuccessOutl>
      <DngrOutl>{message4}</DngrOutl>
    </div>
  );
};

export const IconButton = ({ message1, message2 }) => {
  return (
    <div>
      <Icnoutline style={{ marginRight: "10px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z"
            fill="currentColor"
          ></path>
        </svg>{" "}
        {message1}
      </Icnoutline>

      <Icnfullline style={{ marginRight: "10px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z"
            fill="currentColor"
          ></path>
        </svg>{" "}
        {message2}
      </Icnfullline>
    </div>
  );
};

export const Textbutton = ({ message1, message2, message3, message4 }) => {
  const containerStyle = {
    display: "flex",
    gap: "20px", // Adjust the gap according to your preference
  };

  const secnd = {
    color: "black", // Change the color to your desired color
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
    padding: "0",
  };

  const primar = {
    color: "#ff4e54", // Change the color to your desired color
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
    padding: "0",
  };

  const Dngr = {
    color: "#ff9800", // Change the color to your desired color
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
    padding: "0",
  };

  const sucss = {
    color: "#4caf50", // Change the color to your desired color
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
    padding: "0",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...primar }}> {message1}</h1>
      <h1 style={{ ...secnd }}> {message2} </h1>
      <h1 style={{ ...sucss }}>{message3}</h1>
      <h1 style={{ ...Dngr }}>{message4}</h1>
    </div>
  );
};
