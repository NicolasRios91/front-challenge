import { createSlice } from "@reduxjs/toolkit";
import { RECIPES } from "../../utils/constants";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: { data: RECIPES, selectedRecipeId: null },
  reducers: {
    addRecipe: (state, action) => {
      state.data.push(action.payload);
    },
    editRecipe: (state, action) => {
      const { id, preparation, name, reviews, ingredients, cookedBefore } =
        action.payload;
      const foundRecipe = state.data.find((recipe) => recipe.id === id);
      if (foundRecipe) {
        foundRecipe.preparation = preparation;
        foundRecipe.name = name;
        foundRecipe.reviews = reviews;
        foundRecipe.ingredients = ingredients;
        foundRecipe.cookedBefore = cookedBefore;
      }
    },
    setSelectedRecipe: (state, action) => {
      state.selectedRecipeId = action.payload;
    },
  },
});

export const { addRecipe, editRecipe, setSelectedRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
