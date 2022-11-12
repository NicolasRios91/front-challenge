import "./ToggleSwitch.css";
import { useMemo } from "react";
import { editRecipe } from "../../../features/recipe/recipe-slice";

export const ToggleSwitch = ({ value, callback }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={value} onChange={callback} />
      <span className="slider round"></span>
    </label>
  );
};

//for add new recipe
export const ToggleAddSlide = ({ value, callback }) => {
  const handleOnChange = () => {
    callback(!value);
  };

  return <ToggleSwitch value={value} callback={handleOnChange} />;
};

//for editing field on table and show slide
export const ToogleEditSlide = ({ row, callback }) => {
  const { id, reviews, ingredients, cookedBefore, preparation, name } = row;

  const isActive = useMemo(() => cookedBefore, [row]);
  const handleOnChange = () => {
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

  return <ToggleSwitch value={isActive} callback={handleOnChange} />;
};
