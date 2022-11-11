import { useDispatch } from "react-redux";
import { StyledButton } from "./styles";
import { addRecipe, editRecipe } from "../../../features/recipe/recipe-slice";

export const AddButton = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(
      addRecipe({ name: "redux test", preparation: "test redux preparation" })
    );
  };

  const handleEdit = () => {
    dispatch(
      editRecipe({
        id: "1",
        name: "edited asd",
        preparation: "edited preparation",
        review: 4,
        cookedBefore: false,
      })
    );
  };

  return <StyledButton onClick={handleEdit}>+</StyledButton>;
};
