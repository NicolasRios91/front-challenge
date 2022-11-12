import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipe/recipe-slice";
import ModalsReducer from "../features/modals/modal-silce";

export const store = configureStore({
  reducer: { recipe: recipeReducer, modal: ModalsReducer },
});
