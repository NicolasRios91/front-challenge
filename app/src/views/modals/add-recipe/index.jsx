import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalContainer,
  Container,
  StyledTextArea,
  SlideActionButton,
  FooterContainer,
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
  TYPE_TITLE,
  TYPE_INGREDIENT,
  TYPE_STEPS,
  INGREDIENTS_LABEL,
  PREPARATION_LABEL,
  REVIEWS_LABEL,
} from "../../../utils/constants";
import { v4 as uuid } from "uuid";
import { ToggleSwitch } from "../../../components/buttons/toggle";
import "../../../components/buttons/toggle/ToggleSwitch.css";

const reviewOptions = [1, 2, 3, 4, 5];

const initialize = {
  title: "",
  ingredients: [],
  preparation: "",
  reviews: 1,
  cookedBefore: true,
};

export const AddRecipeSlide = () => {
  const [formData, setFormData] = useState(initialize);

  const data = useSelector((state) => state.recipe.data);
  const recipeId = useSelector((state) => state.recipe.selectedRecipeId);

  const dispatch = useDispatch();
  const openModals = useSelector((state) => state.modal.open);
  const isEditModal = openModals.includes(EDIT_RECIPE_MODAL);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "reviews") {
      value = Number(value);
    }
    if (name === "ingredients") {
      value = [value];
    }
    if (name === "cookedBefore") {
      value = e.target.checked;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    dispatch(closeModal(EDIT_RECIPE_MODAL));
    dispatch(openModal(SHOW_RECIPE_MODAL));
  };

  const clearFields = () => {
    setFormData(initialize);
  };

  const handleFormRecipe = () => {
    recipeId
      ? dispatch(editRecipe({ id: recipeId, ...formData }))
      : dispatch(addRecipe({ id: uuid(), ...formData }));
    //todo add modal for success
    dispatch(closeAllModals());
    dispatch(setSelectedRecipe(null));
    clearFields();
  };

  const isDisabled = useMemo(
    () =>
      formData.ingredients?.length === 0 ||
      formData.preparation?.length === 0 ||
      formData.name?.length === 0,
    [formData.ingredients, formData.preparation, formData.name]
  );

  useEffect(() => {
    if (isEditModal) {
      const recipe = data.find((recipe) => recipe.id === recipeId);
      setFormData(recipe);
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
        <form onSubmit={handleFormRecipe}>
          <label htmlFor="title">{RECIPE_NAME_LABEL}</label>
          <StyledTextArea
            small
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
            placeholder={TYPE_TITLE}
          />
          <div>
            <label>{INGREDIENTS_LABEL}</label>
            <input
              type="text"
              name="ingredients"
              onChange={handleChange}
              value={formData.ingredients}
              placeholder={TYPE_INGREDIENT}
            ></input>
          </div>
          <label>{PREPARATION_LABEL}</label>
          <StyledTextArea
            name="preparation"
            onChange={handleChange}
            value={formData.preparation}
            placeholder={TYPE_STEPS}
          />
          <label>{REVIEWS_LABEL}</label>
          <div
            style={{
              display: "flex",
              width: "60%",
              justifyContent: "space-between",
            }}
          >
            {reviewOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="reviews"
                  key={option}
                  value={option}
                  checked={option === formData.reviews}
                  onChange={handleChange}
                ></input>
                <label>{option}</label>
              </div>
            ))}
          </div>
          <label>{COOKED_BEFORE}</label>
          <ToggleSwitch onChange={handleChange} value={formData.cookedBefore} />
          {/* <label htmlFor="reviews" className="switch">
          <input
            id="cookedBefore"
            type="checkbox"
            name="cookedBefore"
            checked={formData.cookedBefore}
            value={formData.cookedBefore}
            onChange={handleChange}
          />
          <span className="slider round"></span>
          </label> */}
          <FooterContainer>
            {isEditModal && (
              <SlideActionButton secondary onClick={handleCancel}>
                Cancel
              </SlideActionButton>
            )}
            <SlideActionButton disabled={isDisabled} type="submit">
              {isEditModal ? "Update" : "Create"}
            </SlideActionButton>
          </FooterContainer>
        </form>
      </Container>
    </ModalContainer>
  );
};
