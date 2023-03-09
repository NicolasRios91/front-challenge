import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalContainer,
  Container,
  SlideActionButton,
  FooterContainer,
} from "../../../components/common/styles";
import { SlideHeader } from "../../../components/slide-header";
import { closeModal, openModal } from "../../../features/modals/modal-slice";
import {
  SHOW_RECIPE_MODAL,
  EDIT_RECIPE_MODAL,
  COOKED_BEFORE,
} from "../../../utils/constants";
import { ToggleEditSlide } from "../../../components/buttons/toggle";
import { CustomReviewCell } from "../../../components/custom-cells/review";

export const ShowRecipeSlide = () => {
  const dispatch = useDispatch();
  const openModals = useSelector((state) => state.modal.open);
  const data = useSelector((state) => state.recipe.data);
  const recipeId = useSelector((state) => state.recipe.selectedRecipeId);

  const recipe = useMemo(
    () => data.find((recipe) => recipe.id === recipeId),
    [data, recipeId]
  );

  const handleEditButton = () => {
    dispatch(openModal(EDIT_RECIPE_MODAL));
    dispatch(closeModal(SHOW_RECIPE_MODAL));
  };

  if (!openModals.includes(SHOW_RECIPE_MODAL)) {
    return null;
  }

  return (
    <ModalContainer>
      <Container>
        <SlideHeader title={recipe.title} />
        <p>Ingredients</p>
        {recipe?.ingredients?.length > 0 &&
          recipe?.ingredients?.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        <p>Preparation</p>
        <p style={{ fontWeight: "400", fontSize: "14px" }}>
          {recipe.preparation}
        </p>
        <p>Reviews</p>
        <div
          style={{
            display: "flex",
            width: "60%",
          }}
        >
          <CustomReviewCell row={recipe}></CustomReviewCell>
        </div>
        <p>{COOKED_BEFORE}</p>
        <ToggleEditSlide row={recipe} />
        <FooterContainer>
          <SlideActionButton onClick={handleEditButton}>Edit</SlideActionButton>
        </FooterContainer>
      </Container>
    </ModalContainer>
  );
};
