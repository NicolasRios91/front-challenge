import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => (props.isActive ? "red" : "white")};
`;
