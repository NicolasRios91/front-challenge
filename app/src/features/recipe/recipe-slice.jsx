import { createSlice } from "@reduxjs/toolkit";
import { RECIPES } from "../../utils/constants";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: RECIPES,
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    editRecipe: (state, action) => {
      const { id, preparation, name, reviews, ingredients, cookedBefore } =
        action.payload;
      const foundRecipe = state.find((recipe) => recipe.id === id);
      if (foundRecipe) {
        foundRecipe.preparation = preparation;
        foundRecipe.name = name;
        foundRecipe.reviews = reviews;
        foundRecipe.ingredients = ingredients;
        foundRecipe.cookedBefore = cookedBefore;
      }
    },
  },
});

export const { addRecipe, editRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
