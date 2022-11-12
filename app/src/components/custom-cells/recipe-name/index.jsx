import { useEffect } from "react";
import { setSelectedRecipe } from "../../../features/recipe/recipe-slice";
import { SHOW_RECIPE_MODAL } from "../../../utils/constants";
import { openModal } from "../../../features/modals/modal-silce";

export const CustomNameCell = ({ row, callback }) => {
  const handleRowClick = () => {
    callback(setSelectedRecipe(row.id));
    callback(openModal(SHOW_RECIPE_MODAL));
  };

  return (
    <td style={{ margin: "0px" }} onClick={handleRowClick}>
      {row.name}
    </td>
  );
};
