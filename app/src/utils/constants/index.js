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
    preparation: "this is an example of preparation",
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
    reviews: 2,
    ingredients: ["salt", "pepper", "meat"],
    cookedBefore: false,
    preparation: "this is an example of preparation",
  },
  {
    id: "4",
    name: "recipe aaa",
    reviews: 2,
    ingredients: ["salt", "pepper", "meat"],
    cookedBefore: false,
    preparation: "this is an example of preparation",
  },
];
