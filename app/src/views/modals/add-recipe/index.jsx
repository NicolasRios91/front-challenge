import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalContainer,
  Container,
  StyledTextArea,
} from "../../../components/common/styles";
import { SlideHeader } from "../../../components/slide-header";
import {
  closeAllModals,
  closeModal,
  openModal,
} from "../../../features/modals/modal-silce";
import {
  addRecipe,
  editRecipe,
  setSelectedRecipe,
} from "../../../features/recipe/recipe-slice";
import {
  ADD_RECIPE_MODAL,
  EDIT_RECIPE_LABEL,
  NEW_RECIPE,
  RECIPE_NAME_LABEL,
  COOKED_BEFORE,
  EDIT_RECIPE_MODAL,
  SHOW_RECIPE_MODAL,
} from "../../../utils/constants";
import { v4 as uuid } from "uuid";

export const AddModal = () => {
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState([]);
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState(1);
  const [cookedBefore, setCookedBefore] = useState(true);

  const data = useSelector((state) => state.recipe.data);
  const recipeId = useSelector((state) => state.recipe.selectedRecipeId);

  const dispatch = useDispatch();
  const openModals = useSelector((state) => state.modal.open);
  const isEditModal = openModals.includes(EDIT_RECIPE_MODAL);

  const handleChange = (e, callback) => {
    callback(e.target.value);
  };

  const handleCancel = () => {
    dispatch(closeModal(EDIT_RECIPE_MODAL));
    dispatch(openModal(SHOW_RECIPE_MODAL));
  };

  const clearFields = () => {
    setName("");
    setIngredients("");
    setPreparation("");
    setReviews(1);
  };

  const handleCreateRecipe = () => {
    const newRecipe = {
      name,
      preparation,
      ingredients: [ingredients],
      reviews,
      cookedBefore,
    };

    recipeId
      ? dispatch(editRecipe(newRecipe))
      : dispatch(addRecipe({ id: uuid(), ...newRecipe }));
    //todo add modal for success
    dispatch(closeAllModals());
    dispatch(setSelectedRecipe(null));
    clearFields();
  };

  const isDisabled = useMemo(
    () =>
      ingredients?.length === 0 ||
      preparation?.length === 0 ||
      name?.length === 0,
    [ingredients, preparation, name]
  );

  const reviewOptions = [1, 2, 3, 4];

  useEffect(() => {
    if (isEditModal) {
      const recipe = data.find((recipe) => recipe.id === recipeId);
      setIngredients(recipe?.ingredients);
      setCookedBefore(recipe?.cookedBefore);
      setReviews(recipe?.reviews);
      setName(recipe?.name);
      setPreparation(recipe?.preparation);
    } else {
      clearFields();
    }
  }, [data, recipeId, openModals, isEditModal]);

  if (
    !openModals.includes(ADD_RECIPE_MODAL) &&
    !openModals.includes(EDIT_RECIPE_MODAL)
  ) {
    return null;
  }

  //todo add styles to components
  return (
    <ModalContainer>
      <Container>
        <SlideHeader
          title={isEditModal ? EDIT_RECIPE_LABEL : NEW_RECIPE}
          callback={clearFields}
        />
        <p>{RECIPE_NAME_LABEL}</p>
        <StyledTextArea
          small
          onChange={(event) => handleChange(event, setName)}
          value={name}
        />
        <p>Ingredients</p>
        <input
          type="text"
          onChange={(event) => handleChange(event, setIngredients)}
          value={ingredients}
        ></input>

        <button>+</button>
        <p>Preparation</p>
        <StyledTextArea
          onChange={(event) => handleChange(event, setPreparation)}
          value={preparation}
        />
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
                onChange={(event) => handleChange(event, setReviews)}
              ></input>
              <label>{option}</label>
            </div>
          ))}
        </div>
        <p>{COOKED_BEFORE}</p>
        <button onClick={() => setCookedBefore(!cookedBefore)}>
          {cookedBefore ? "YES" : "NO"}
        </button>
        {isEditModal ? (
          <>
            {" "}
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleCreateRecipe}>Update</button>
          </>
        ) : (
          <button onClick={handleCreateRecipe} disabled={isDisabled}>
            Create
          </button>
        )}
      </Container>
    </ModalContainer>
  );
};
