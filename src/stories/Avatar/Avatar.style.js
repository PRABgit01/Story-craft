import styled, { css } from "styled-components";

const sizes = {
  small: { height: 1.3 },
  medium: { height: 2.3 },
  large: { height: 3.3 },
};

export const AvtarConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ImageCustom = styled.img`
  ${({ type }) => css`
    height: ${sizes[type]?.height}rem;
  `}

  ${({ shape }) => css`
    border-radius: ${shape === "circle" ? "50%" : "20%"};
  `};
`;
