import styled from "styled-components";

export const StyledButton = styled.button`
  width: 56px;
  height: 56px;
  position: absolute;
  right: 10%;
  bottom: 5%;
  border-radius: 50%;
  border: none;
  background: ${(props) => props.theme.color.darkGreen};
  color: #ffffff;
`;
