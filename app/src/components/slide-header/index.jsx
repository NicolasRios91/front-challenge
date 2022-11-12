import { useDispatch } from "react-redux";
import { Container, SlideHeaderButton, SlideHeaderTitle } from "./styles";
import { closeAllModals } from "../../features/modals/modal-silce";
import { setSelectedRecipe } from "../../features/recipe/recipe-slice";

export const SlideHeader = ({ title, callback }) => {
  const dispatch = useDispatch();
  const handleOnClose = () => {
    dispatch(closeAllModals());
    dispatch(setSelectedRecipe(null));
    callback();
  };
  return (
    <Container>
      <SlideHeaderTitle>{title}</SlideHeaderTitle>
      <SlideHeaderButton onClick={handleOnClose}>X</SlideHeaderButton>
    </Container>
  );
};
