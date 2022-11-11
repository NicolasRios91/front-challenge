import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  background: ${(props) => props.theme.color.gray[400]};
  font-size: ${(props) => props.theme.size.s};
  padding: ${(props) => props.theme.space.m} ${(props) => props.theme.space.xl};
  border-radius: ${(props) => props.theme.space.m};
  box-sizing: border-box;
  border: none;

  > span {
    font-weight: bold;
    display: contents;
  }

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Arrow = styled.div`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 5px;

  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export const DropDownContainer = styled.div`
  position: relative;

  > div {
    background: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: ${(props) => props.theme.space.m};
    border-radius: ${(props) => props.theme.space.m};
    box-shadow: 0px 4px 20px rgba(30, 54, 70, 0.5);
  }
`;

export const OptionsModal = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${(props) => props.theme.size.s};
  padding: 16px;
`;
