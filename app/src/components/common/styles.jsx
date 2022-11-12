import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: absolute;
  box-sizing: border-box;
  padding: ${(props) => props.theme.space.xl};
  width: 30%;
  height: 100%;
  right: 0;
  background-color: white;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  display: block;
  margin: auto;
  resize: none;
  height: ${(props) => (props.small ? "54px" : "172px")};
`;
