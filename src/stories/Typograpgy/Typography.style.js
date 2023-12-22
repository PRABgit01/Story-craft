import styled, { css } from "styled-components";
import theme from "../theme";

const baseStyles = css`
  color: ${({ type }) => theme?.[type]};
  font-weight: bold;
  font-family: sans-serif;
`;

const size = {
  h1: {
    fontSize: "3rem",
    lineHeight: "2.05rem",
    fontWeight: "800",
  },
  h2: {
    fontSize: "2.5rem",
    lineHeight: "1.2rem",
    fontWeight: "700",
  },
  h3: {
    fontSize: "1.8rem",
    lineHeight: "1.3rem",
    fontWeight: "600",
  },
  h4: {
    fontSize: "1.4rem",
    lineHeight: "1.4rem",
    fontWeight: "500",
  },
  h5: {
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    fontWeight: "500",
  },
  h6: {
    fontSize: "1rem",
    lineHeight: "1.6rem",
    fontWeight: "400",
  },
};

export const TextType = styled.div`
  ${baseStyles}
  font-size: ${({ as }) => size?.[as]?.fontSize};
  line-height: ${({ as }) => size?.[as]?.lineHeight};
  font-weight: ${({ as }) => size?.[as]?.fontWeight};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
