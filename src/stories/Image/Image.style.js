import styled from "styled-components";

export const StyledImageContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  height: 9.3rem;
`;

export const StyledCircularImage = styled(StyledImage)`
  border-radius: 50%;
`;

export const StyledFullImage = styled(StyledImage)`
  height: auto;
  width: 100%;
`;
