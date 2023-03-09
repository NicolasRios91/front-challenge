import "./ToggleSwitch.css";
import { editRecipe } from "../../../features/recipe/recipe-slice";
import { useDispatch } from "react-redux";

export const ToggleSwitch = ({ value, onChange }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        name="cookedBefore"
        checked={value}
        onChange={onChange}
        aria-label="set cooked before"
      />
      <span className="slider round" />
    </label>
  );
};

//for editing field on table and show slide
export const ToggleEditSlide = ({ row }) => {
  const { id, reviews, ingredients, cookedBefore, preparation, title } = row;

  const dispatch = useDispatch();

  const handleOnChange = () => {
    const status = !cookedBefore;
    dispatch(
      editRecipe({
        id,
        reviews,
        ingredients,
        cookedBefore: status,
        preparation,
        title,
      })
    );
  };

  return <ToggleSwitch value={cookedBefore} onChange={handleOnChange} />;
};
