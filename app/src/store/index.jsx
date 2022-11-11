import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipe/recipe-slice";

export const store = configureStore({
  reducer: { recipe: recipeReducer },
});
