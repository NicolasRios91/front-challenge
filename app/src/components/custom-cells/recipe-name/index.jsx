import { setSelectedRecipe } from "../../../features/recipe/recipe-slice";
import { SHOW_RECIPE_MODAL } from "../../../utils/constants";
import { openModal } from "../../../features/modals/modal-silce";
import { CustomTd } from "./styles";

export const CustomNameCell = ({ row, callback }) => {
  const handleRowClick = () => {
    callback(setSelectedRecipe(row.id));
    callback(openModal(SHOW_RECIPE_MODAL));
  };

  return <CustomTd onClick={handleRowClick}>{row.name}</CustomTd>;
};
