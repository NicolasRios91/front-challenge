import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalContainer,
  Container,
  SlideActionButton,
  FooterContainer,
} from "../../../components/common/styles";
import { SlideHeader } from "../../../components/slide-header";
import { closeModal, openModal } from "../../../features/modals/modal-silce";
import {
  SHOW_RECIPE_MODAL,
  EDIT_RECIPE_MODAL,
  COOKED_BEFORE,
} from "../../../utils/constants";
import { ToogleEditSlide } from "../../../components/buttons/toggle";

export const ShowRecipeSlide = () => {
  const dispatch = useDispatch();
  const openModals = useSelector((state) => state.modal.open);
  const data = useSelector((state) => state.recipe.data);
  const recipeId = useSelector((state) => state.recipe.selectedRecipeId);

  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState("");
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState(1);
  const [cookedBefore, setCookedBefore] = useState(true);

  const recipe = useMemo(
    () => data.find((recipe) => recipe.id === recipeId),
    [data, recipeId]
  );

  const clearFields = () => {
    setName("");
    setIngredients("");
    setPreparation("");
    setReviews(1);
    dispatch(setSelectedRecipe(null));
  };

  const handleEditButton = () => {
    dispatch(openModal(EDIT_RECIPE_MODAL));
    dispatch(closeModal(SHOW_RECIPE_MODAL));
  };

  const reviewOptions = [1, 2, 3, 4];

  useEffect(() => {
    if (recipe) {
      setIngredients(recipe.ingredients);
      setCookedBefore(recipe.cookedBefore);
      setReviews(recipe.reviews);
      setName(recipe.name);
      setPreparation(recipe.preparation);
    }
  }, [data, recipeId]);

  if (!openModals.includes(SHOW_RECIPE_MODAL)) {
    return null;
  }

  return (
    <ModalContainer>
      <Container>
        <SlideHeader title={name} />
        <p>Ingredients</p>
        {ingredients.length > 1 &&
          ingredients?.map((element) => <li>{element}</li>)}
        <p>Preparation</p>
        <p style={{ fontWeight: "400", fontSize: "14px" }}>{preparation}</p>
        <p>Reviews</p>
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          {reviewOptions.map((option) => (
            <div>
              <input
                type="radio"
                name="review-group"
                key={option}
                value={option}
                checked={option == reviews}
              ></input>
              <label>{option}</label>
            </div>
          ))}
        </div>
        <p>{COOKED_BEFORE}</p>
        <ToogleEditSlide row={recipe} callback={dispatch} />
        <FooterContainer>
          <SlideActionButton onClick={handleEditButton}>Edit</SlideActionButton>
        </FooterContainer>
      </Container>
    </ModalContainer>
  );
};
