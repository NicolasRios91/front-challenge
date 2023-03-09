export const getFormValues = (event) => {
  let { name, value } = event.target;
  if (name === "reviews") {
    value = Number(value);
  }
  if (name.includes("ingredients")) {
    name = "ingredients";

    const ingredients = document.getElementsByName("ingredients");
    value = [];
    if (ingredients) {
      ingredients?.forEach((element) => {
        value.push(element.value);
      });
    }
  }
  if (name === "cookedBefore") {
    value = event.target.checked;
  }

  return { name, value };
};
