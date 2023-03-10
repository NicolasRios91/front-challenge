import { ACTIVE_VALUE, ALL_VALUE } from "../../constants";

export const filterByTitle = (data, title) => {
  return title !== ""
    ? data?.filter((recipe) => recipe?.title?.includes(title))
    : data;
};

export const filterByStatus = (data, status) => {
  let filteredData = data;
  if (status === ALL_VALUE) return filteredData;

  filteredData = data.filter((recipe) => {
    if (status === ACTIVE_VALUE) {
      return recipe.cookedBefore && recipe;
    } else {
      return !recipe.cookedBefore && recipe;
    }
  });

  return filteredData;
};
