import styled from "styled-components";

export const StyledTitle = styled.h2`
  color: ${(props) => props.theme.color.dark};

  @media screen and (max-width: 650px) {
    text-align: center;
  }
`;
