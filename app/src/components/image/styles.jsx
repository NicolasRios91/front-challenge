import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 310px;
  img {
    height: calc(100vh - 85px);
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
