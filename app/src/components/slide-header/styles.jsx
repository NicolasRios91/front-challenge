import styled from "styled-components";

export const SlideHeaderTitle = styled.h3`
  font-size: ${(props) => props.theme.size.l};
  margin: 0px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SlideHeaderButton = styled.button`
  border: none;
  font-size: ${(props) => props.theme.size.s};
  :hover {
    cursor: pointer;
  }
`;
