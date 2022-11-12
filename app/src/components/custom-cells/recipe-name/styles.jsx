import styled from "styled-components";

export const CustomTd = styled.td`
  margin: "0px";
  :first-child:hover {
    color: ${(props) => props.theme.color.gray[600]};
    cursor: pointer;
  }
`;
