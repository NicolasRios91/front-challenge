import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space.s};
  padding-left: ${(props) => props.theme.space.xl};

  > div {
    display: flex;
    align-items: center;
  }
`;
