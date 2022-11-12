import { v4 as uuidv4 } from "uuid";

export const KITCHEN_RECIPES = "Kitchen Recipes";
export const COOKED_BEFORE = "Cooked before";
export const SEARCH_PLACEHOLDER = "Search";
export const RECIPE_NAME_LABEL = "Recipe name";
export const REVIEWS_LABEL = "Reviews";
export const INGREDIENTS_LABEL = "Ingredients";
export const PREPARATION_LABEL = "Preparation";
export const EDIT_LABEL = "Edit";
export const EDIT_RECIPE_LABEL = "Edit recipe";
export const ALL_VALUE = "all";
export const ACTIVE_VALUE = "active";
export const INACTIVE_VALUE = "inactive";
export const NEW_RECIPE = "New recipe";

export const ADD_RECIPE_MODAL = "ADD_RECIPE";
export const SHOW_RECIPE_MODAL = "SHOW_RECIPE";
export const EDIT_RECIPE_MODAL = "EDIT_RECIPE";

export const FILTER_OPTIONS = [
  { value: ALL_VALUE, label: "All" },
  { value: ACTIVE_VALUE, label: "Active" },
  { value: INACTIVE_VALUE, label: "Inactive" },
];

export const RECIPES = [
  {
    id: "1",
    name: "recipe aaaa",
    reviews: 2,
    ingredients: ["salt", "pepper", "meat"],
    cookedBefore: true,
    preparation:
      "Combine the chia seeds, almond milk and 1 tablespoon of the maple syrup in a large jug. Stand for 3-4 mins or until seeds swell. Meanwhile, finely grate 1 teaspoon rind from 1 orange. Cut the segments from both oranges (see Notes).\n\nCombine the flour, baking powder, orange rind and half the walnuts in a medium bowl. Whisk in the milk mixture until smooth. Stir in the blueberries.\n\nSpray a non-stick frying pan with oil and heat over medium heat. Cook level 1/2 cup measures of mixture, in batches, for 2 mins each side or until golden to make 8 pancakes. Divide among plates. Top with the orange segments, ricotta, remaining syrup and walnuts.",
  },
  {
    id: "2",
    name: "recipe bbbb",
    reviews: 2,
    ingredients: ["salt", "pepper", "meat"],
    cookedBefore: true,
    preparation: "this is an example of preparation",
  },
  {
    id: "3",
    name: "recipe cccc",
    reviews: 4,
    ingredients: ["salt", "pepper", "meat"],
    cookedBefore: false,
    preparation: "this is an example of preparation",
  },
  {
    id: "4",
    name: "recipe aaa",
    reviews: 4,
    ingredients: ["salt", "pepper", "meat"],
    cookedBefore: false,
    preparation: "this is an example of preparation",
  },
];
