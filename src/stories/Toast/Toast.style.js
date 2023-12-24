import styled from "styled-components";
import theme from "../theme";

export const ToastStyle = styled.button`
  border: 1px solid ${({ type }) => theme?.[type]};
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  color: ${({ type }) => theme?.[type]};
  border-radius: 5px;
  padding: 10px 20px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
`;

export const ToastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
