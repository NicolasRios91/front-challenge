import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    data: JSON.parse(localStorage.getItem("recipes")) || [],
    selectedRecipeId: null,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.data = action.payload;
    },
    addRecipe: (state, action) => {
      state.data.push(action.payload);
    },
    editRecipe: (state, action) => {
      const { id, preparation, title, reviews, ingredients, cookedBefore } =
        action.payload;
      const foundRecipe = state.data.find((recipe) => recipe.id === id);
      if (foundRecipe) {
        foundRecipe.preparation = preparation;
        foundRecipe.title = title;
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

export const { addRecipe, editRecipe, setRecipes, setSelectedRecipe } =
  recipeSlice.actions;
export default recipeSlice.reducer;
