import {
  FooterContainer,
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

import { useForm } from "./custom-hooks";

const reviewOptions = [1, 2, 3, 4, 5];

export const Form = ({ isEditModal }) => {
  const { formData, isDisabled, handleCancel, handleOnSubmit, handleChange } =
    useForm(isEditModal);

  return (
    <form onSubmit={handleOnSubmit}>
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
