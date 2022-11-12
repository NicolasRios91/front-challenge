import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalContainer,
  Container,
  StyledTextArea,
} from "../../../components/common/styles";
import { SlideHeader } from "../../../components/slide-header";
import { addRecipe } from "../../../features/recipe/recipe-slice";
import {
  ADD_RECIPE_MODAL,
  NEW_RECIPE,
  RECIPE_NAME_LABEL,
  COOKED_BEFORE,
} from "../../../utils/constants";

export const AddModal = () => {
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState("");
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState(1);
  const [cookedBefore, setCookedBefore] = useState(true);

  const dispatch = useDispatch();
  const openModals = useSelector((state) => state.modal.open);

  const handleChange = (e, callback) => {
    callback(e.target.value);
  };

  const clearFields = () => {
    setName("");
    setIngredients("");
    setPreparation("");
  };

  const handleCreateRecipe = () => {
    const newRecipe = {
      name,
      preparation,
      ingredients,
      reviews,
      cookedBefore,
    };
    dispatch(addRecipe(newRecipe));
    clearFields();
  };

  const isDisabled = useMemo(
    () =>
      ingredients.length === 0 || preparation.length === 0 || name.length === 0,
    [ingredients, preparation, name]
  );

  const reviewOptions = [1, 2, 3, 4];

  if (!openModals.includes(ADD_RECIPE_MODAL)) {
    return null;
  }

  //todo add styles to components
  return (
    <ModalContainer>
      <Container>
        <SlideHeader title={NEW_RECIPE} callback={clearFields} />
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
            justifyContent: "space-evenly",
          }}
        >
          {reviewOptions.map((option) => (
            <div>
              <label>{option}</label>
              <input
                type="radio"
                name="review-group"
                key={option}
                value={option}
                checked={option == reviews}
                onChange={(event) => handleChange(event, setReviews)}
              ></input>
            </div>
          ))}
        </div>
        <p>{COOKED_BEFORE}</p>
        <button onClick={() => setCookedBefore(!cookedBefore)}>
          {cookedBefore ? "YES" : "NO"}
        </button>
        <button onClick={handleCreateRecipe} disabled={isDisabled}>
          Create
        </button>
      </Container>
    </ModalContainer>
  );
};
