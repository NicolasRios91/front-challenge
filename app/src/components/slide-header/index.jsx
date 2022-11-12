import { useDispatch } from "react-redux";
import { Container, SlideHeaderButton, SlideHeaderTitle } from "./styles";
import { ADD_RECIPE_MODAL } from "../../utils/constants";
import { closeModal } from "../../features/modals/modal-silce";

export const SlideHeader = ({ title, callback }) => {
  const dispatch = useDispatch();
  const handleOnClose = () => {
    dispatch(closeModal(ADD_RECIPE_MODAL));
    callback();
  };
  return (
    <Container>
      <SlideHeaderTitle>{title}</SlideHeaderTitle>
      <SlideHeaderButton onClick={handleOnClose}>X</SlideHeaderButton>
    </Container>
  );
};
