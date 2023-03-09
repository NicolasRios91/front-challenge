import {
  FieldsContainer,
  FooterContainer,
  IngredientsContainer,
  SlideActionButton,
  StyledTextArea,
} from "../common/styles";
import {
  RECIPE_NAME_LABEL,
  COOKED_BEFORE,
  TYPE_TITLE,
  TYPE_INGREDIENT,
  TYPE_STEPS,
  INGREDIENTS_LABEL,
  PREPARATION_LABEL,
  REVIEWS_LABEL,
} from "../../utils/constants";
import { ToggleSwitch } from "../buttons/toggle";
import { AiFillDelete } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { useForm } from "./custom-hooks";

const reviewOptions = [1, 2, 3, 4, 5];

export const Form = ({ isEditModal }) => {
  const {
    formData,
    isDisabled,
    handleCancel,
    handleOnSubmit,
    handleChange,
    handleAddIngredientField,
    handleRemoveIngredient,
  } = useForm(isEditModal);

  return (
    <form onSubmit={handleOnSubmit}>
      <FieldsContainer>
        <label htmlFor="title">{RECIPE_NAME_LABEL}</label>
        <StyledTextArea
          small
          id="title"
          name="title"
          onChange={handleChange}
          value={formData.title}
          placeholder={TYPE_TITLE}
        />
      </FieldsContainer>
      <FieldsContainer>
        <label htmlFor="ingredients">{INGREDIENTS_LABEL}</label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {formData.ingredients.map((ingredient, index) => (
            <IngredientsContainer key={index}>
              <input
                type="text"
                name="ingredients"
                onChange={handleChange}
                value={ingredient}
                placeholder={TYPE_INGREDIENT}
                aria-label="type ingredient"
              ></input>
              {index === formData.ingredients.length - 1 ? (
                <button
                  type="button"
                  onClick={handleAddIngredientField}
                  aria-label="add ingredient"
                >
                  <GrAdd />
                </button>
              ) : null}
              {formData.ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(ingredient)}
                  aria-label="delete ingredient"
                >
                  <AiFillDelete />
                </button>
              )}
            </IngredientsContainer>
          ))}
        </div>
      </FieldsContainer>
      <FieldsContainer>
        <label htmlFor="preparation">{PREPARATION_LABEL}</label>
        <StyledTextArea
          id="preparation"
          name="preparation"
          onChange={handleChange}
          value={formData.preparation}
          placeholder={TYPE_STEPS}
        />
      </FieldsContainer>
      <FieldsContainer>
        <label htmlFor="reviews">{REVIEWS_LABEL}</label>
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          {reviewOptions.map((option, index) => (
            <div key={index}>
              <input
                id="reviews"
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
      </FieldsContainer>
      <FieldsContainer>
        <p>{COOKED_BEFORE}</p>
        <ToggleSwitch onChange={handleChange} value={formData.cookedBefore} />
      </FieldsContainer>
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
  );
};
