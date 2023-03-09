import { useSelector } from "react-redux";
import { ModalContainer, Container } from "../../../components/common/styles";
import { SlideHeader } from "../../../components/slide-header";

import {
  ADD_RECIPE_MODAL,
  EDIT_RECIPE_LABEL,
  NEW_RECIPE,
  EDIT_RECIPE_MODAL,
} from "../../../utils/constants";

import "../../../components/buttons/toggle/ToggleSwitch.css";
import { Form } from "../../../components/form";

export const AddRecipeSlide = () => {
  const openModals = useSelector((state) => state.modal.open);
  const isEditModal = openModals.includes(EDIT_RECIPE_MODAL);

  if (
    !openModals.includes(ADD_RECIPE_MODAL) &&
    !openModals.includes(EDIT_RECIPE_MODAL)
  ) {
    return null;
  }

  return (
    <ModalContainer>
      <Container>
        <SlideHeader title={isEditModal ? EDIT_RECIPE_LABEL : NEW_RECIPE} />
        <Form isEditModal={isEditModal} />
      </Container>
    </ModalContainer>
  );
};
