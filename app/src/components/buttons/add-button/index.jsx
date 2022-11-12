import { useDispatch } from "react-redux";
import { PlusSign, StyledButton } from "./styles";
import { openModal } from "../../../features/modals/modal-silce";
import { ADD_RECIPE_MODAL } from "../../../utils/constants";

export const AddButton = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(openModal(ADD_RECIPE_MODAL));
  };

  return (
    <StyledButton onClick={handleOnClick}>
      <PlusSign />
      <PlusSign />
    </StyledButton>
  );
};
