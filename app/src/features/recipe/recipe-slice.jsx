import { createSlice } from "@reduxjs/toolkit";
import { LIST } from "../../utils/constants";

export const recipeSlice = createSlice({
  name: "reciper",
  initialState: LIST,
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    editRecipe: (state, action) => {
      const { id, preparation, name, review, ingredients, cookedBefore } =
        action.payload;
      const foundRecipe = state.find((recipe) => recipe.id === id);
      if (foundRecipe) {
        foundRecipe.preparation = preparation;
        foundRecipe.name = name;
        foundRecipe.review = review;
        foundRecipe.ingredients = ingredients;
        foundRecipe.cookedBefore = cookedBefore;
      }
    },
  },
});

export const { addRecipe, editRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
