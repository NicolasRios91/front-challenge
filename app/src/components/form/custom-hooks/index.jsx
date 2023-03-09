import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecipe,
  editRecipe,
  setSelectedRecipe,
} from "../../../features/recipe/recipe-slice";
import { v4 as uuid } from "uuid";
import {
  closeAllModals,
  closeModal,
  openModal,
} from "../../../features/modals/modal-slice";
import { EDIT_RECIPE_MODAL, SHOW_RECIPE_MODAL } from "../../../utils/constants";
import { getFormValues } from "../../../utils/helpers/form";

const initialize = {
  title: "",
  ingredients: [],
  preparation: "",
  reviews: 1,
  cookedBefore: true,
};

export const useForm = (isEditModal) => {
  const [formData, setFormData] = useState(initialize);
  const data = useSelector((state) => state.recipe.data);
  const recipeId = useSelector((state) => state.recipe.selectedRecipeId);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = getFormValues(e);
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    dispatch(closeModal(EDIT_RECIPE_MODAL));
    dispatch(openModal(SHOW_RECIPE_MODAL));
  };

  const handleOnSubmit = () => {
    recipeId
      ? dispatch(editRecipe({ id: recipeId, ...formData }))
      : dispatch(addRecipe({ id: uuid(), ...formData }));
    //todo add modal for success
    dispatch(closeAllModals());
    dispatch(setSelectedRecipe(null));
    setFormData(initialize);
  };

  const isDisabled = useMemo(
    () =>
      formData.ingredients?.length === 0 ||
      formData.preparation?.length === 0 ||
      formData.title?.length === 0,
    [formData.ingredients, formData.preparation, formData.title]
  );

  useEffect(() => {
    if (isEditModal) {
      const recipe = data.find((recipe) => recipe.id === recipeId);
      setFormData(recipe);
    } else {
      setFormData(initialize);
    }
  }, [data, recipeId, isEditModal]);

  return {
    formData,
    isDisabled,
    handleCancel,
    handleOnSubmit,
    handleChange,
  };
};
