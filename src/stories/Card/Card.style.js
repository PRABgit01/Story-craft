import styled, { css } from "styled-components";
import theme from "../theme";

export const StyledCommonCard = css`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${theme.white};
`;

export const StyledTitle = styled.h2`
  color: ${theme.primary};
`;

export const StyledDiscription = styled.p`
  color: ${theme.secondary};
`;

export const StyledSimpleCard = styled.div`
  ${StyledCommonCard}
  max-width: 300px;
  display: block;
  border: 3px solid ${theme.white};

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); 
  }
`;

export const StyledCardBadge = styled.div`
  ${StyledCommonCard}
  max-width: 300px;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); 
  }
`;

export const StyledImage = styled.img`
  border-radius: 5px;
`;

export const StyledBadge = styled.div`
  position: absolute;
  top: 30px;
  left: 16px;
  background-color: ${theme.primary};
  color: ${theme.white};
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
`;

export const StyledDissmiss = styled.div`
  position: absolute;
  top: 37px;
  left: 289px;
  background-color: ${theme.primary};
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
  color: ${theme.white};

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); 
  }
`;

export const StyledOverLay = styled.div`
  position: absolute;
  top: 105px;
  left: 115px;
  text-align: center;
  color: ${theme.white};
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  font-size: 17px;
  padding: 0.5rem 1rem;
`;

export const StyledHorizontalCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  gap: 10px;
  background-color: ${theme.white};
  border-radius: 5px;
  font-size: 12px;
  height: auto;
  padding: 10px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHoriZontalImage = styled.img`
  width: 100%;
  max-width: 100px;
  height: 100%;
  max-height: 80px;
  border-radius: 5px;
  font-size: 6px;
`;
