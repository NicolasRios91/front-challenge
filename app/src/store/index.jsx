import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipe/recipe-slice";
import ModalsReducer from "../features/modals/modal-slice";

export const store = configureStore({
  reducer: { recipe: recipeReducer, modal: ModalsReducer },
});
