import styled from "styled-components";

export const StyledInput = styled.input`
  width: 40%;
  background-color: ${(props) => props.theme.color.gray[200]};
  padding: ${(props) => props.theme.space.m};
  margin-right: ${(props) => props.theme.space.m};
  font-size: ${(props) => props.theme.size.s};
  border: none;
  border-radius: ${(props) => props.theme.size.m};

  :focus {
    outline: none;
  }
`;
