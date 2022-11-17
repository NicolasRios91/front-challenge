import "./ToggleSwitch.css";
import { useMemo } from "react";
import { editRecipe } from "../../../features/recipe/recipe-slice";
import { useDispatch } from "react-redux";

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
export const ToggleEditSlide = ({ row }) => {
  const { id, reviews, ingredients, cookedBefore, preparation, name } = row;

  const dispatch = useDispatch();
  const isActive = useMemo(() => cookedBefore, [row]);

  const handleOnChange = () => {
    const status = !isActive;
    dispatch(
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
