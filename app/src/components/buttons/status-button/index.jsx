import { useMemo, useState } from "react";
import { editRecipe } from "../../../features/recipe/recipe-slice";
import { StyledButton } from "./styles";

export const StatusButton = ({ row, callback }) => {
  const { id, reviews, ingredients, cookedBefore, preparation, name } = row;

  const isActive = useMemo(() => cookedBefore, [cookedBefore]);

  const handleClick = () => {
    const status = !isActive;
    callback(
      editRecipe({
        id,
        reviews,
        ingredients,
        cookedBefore: status,
        preparation,
        name,
      })
    );
  };

  return (
    <td>
      <StyledButton isActive={isActive} onClick={handleClick}>
        {isActive ? "YES" : "NO"}
      </StyledButton>
    </td>
  );
};
