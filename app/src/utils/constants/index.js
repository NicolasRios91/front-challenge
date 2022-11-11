export const KITCHEN_RECIPES = "Kitchen Recipes";
export const COOKED_BEFORE = "Cooked before";
export const SEARCH_PLACEHOLDER = "Search";
export const RECIPE_NAME_LABEL = "Recipe name";
export const REVIEWS_LABEL = "Reviews";
export const INGREDIENTS_LABEL = "Ingredients";
export const PREPARATION_LABEL = "Preparation";
export const EDIT_LABEL = "Edit";
export const EDIT_RECIPE_LABEL = "Edit recipe";
export const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

export const RECIPE = {
  name: "recipe test",
  reviews: 2,
  coockedBefore: true,
  preparation: "this is an example of preparation",
};

export const LIST = Array(20).fill(RECIPE);
