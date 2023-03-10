import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    data: JSON.parse(localStorage.getItem("recipes")) || [],
    selectedRecipeId: null,
  },
  reducers: {
    setRecipes: (state, { payload }) => {
      state.data = payload;
    },
    addRecipe: (state, { payload }) => {
      state.data.push(payload);
    },
    editRecipe: (state, { payload }) => {
      const { id, preparation, title, reviews, ingredients, cookedBefore } =
        payload;
      const foundRecipe = state.data.find((recipe) => recipe.id === id);
      if (foundRecipe) {
        foundRecipe.preparation = preparation;
        foundRecipe.title = title;
        foundRecipe.reviews = reviews;
        foundRecipe.ingredients = ingredients;
        foundRecipe.cookedBefore = cookedBefore;
      }
    },
    setSelectedRecipe: (state, { payload }) => {
      state.selectedRecipeId = payload;
    },
  },
});

export const { addRecipe, editRecipe, setRecipes, setSelectedRecipe } =
  recipeSlice.actions;

export default recipeSlice.reducer;
