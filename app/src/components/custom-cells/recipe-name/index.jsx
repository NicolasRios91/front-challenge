import { setSelectedRecipe } from "../../../features/recipe/recipe-slice";
import { SHOW_RECIPE_MODAL } from "../../../utils/constants";
import { openModal } from "../../../features/modals/modal-slice";
import { CustomTd } from "./styles";
import { useDispatch } from "react-redux";

export const CustomNameCell = ({ row }) => {
  const dispatch = useDispatch();
  const handleRowClick = () => {
    dispatch(setSelectedRecipe(row.id));
    dispatch(openModal(SHOW_RECIPE_MODAL));
  };

  return <CustomTd onClick={handleRowClick}>{row.title}</CustomTd>;
};
