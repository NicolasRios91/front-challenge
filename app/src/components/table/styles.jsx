import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  overflow: auto;

  thead tr {
    width: 100%;
    height: 48px;
    font-weight: ${(props) => props.theme.weight[600]};
    color: ${(props) => props.theme.color.gray[800]};
    font-size: ${(props) => props.theme.size.xs};
    border-bottom: 1px solid ${(props) => props.theme.color.gray[600]};

    th:first-child {
      width: 50%;
    }
  }

  tbody tr {
    height: 40px;
    font-size: ${(props) => props.theme.size.s};
    border-bottom: 1px solid ${(props) => props.theme.color.gray[400]};
    font-weight: ${(props) => props.theme.weight[400]};
  }
`;

export const Container = styled.div`
  margin-top: ${(props) => props.theme.space.s};
  height: 65vh;
  overflow: auto;
`;
