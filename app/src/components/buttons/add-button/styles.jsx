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
  cursor: pointer;
  color: #ffffff;
`;

export const PlusSign = styled.span`
  position: absolute;
  left: 49%;
  right: 49%;
  top: 30%;
  bottom: 30%;
  background: #ffffff;

  :after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #ffffff;
    transform: rotate(90deg);
  }
`;
