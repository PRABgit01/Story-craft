import styled from "styled-components";
import theme from "../theme";

export const StyleComponentInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const PrefixIcon = styled.span`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SuffixIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const InputField = styled.input`
  width: 100%;
  width:520px;
  padding: 14px 20px;
  border-radius: 5px;
  margin: 10px 0;
  color: #000;
  border: 1px solid
    ${(props) => (props.type === "password" ? theme.primary : "#000")};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
`;
