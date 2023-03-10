import { useEffect } from "react";

export const useSetLocalRecipes = ({ data }) => {
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);
};
