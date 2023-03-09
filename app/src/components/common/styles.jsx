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

  p {
    font-weight: ${(props) => props.theme.weight[600]};
    margin-bottom: ${(props) => props.theme.space.m};
  }

  label {
    font-size: ${(props) => props.theme.size.s};
    font-weight: ${(props) => props.theme.weight[600]};
  }

  textarea,
  input {
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme.color.lightBlue};
    border-radius: 4px;
    padding: ${(props) => props.theme.space.xs};
    :focus {
      outline: none;
    }
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin: auto;
  resize: none;
  height: ${(props) => (props.small ? "54px" : "172px")};
  padding: ${(props) => props.theme.space.xs};
`;

export const SlideActionButton = styled.button`
  width: 120px;
  height: 48px;
  border-radius: 25px;
  border: ${(props) =>
    props.secondary ? `2px solid ${props.theme.color.darkGreen}` : "none"};
  background: ${(props) =>
    props.secondary ? "#ffffff" : `${props.theme.color.darkGreen}`};
  color: ${(props) =>
    props.secondary ? `${props.theme.color.darkGreen}` : "#ffffff"};
  margin-right: ${(props) => props.theme.space.l};
  font-size: ${(props) => props.theme.size.m};
  font-weight: ${(props) => props.theme.weight[600]};

  :hover {
    cursor: pointer;
  }

  :disabled {
    background: #b2b2b3;
    color: #ffffff;
    border: none;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.space.xl};
`;
