export const getFormValues = (event) => {
  let { name, value } = event.target;
  if (name === "reviews") {
    value = Number(value);
  }
  if (name === "ingredients") {
    value = [value];
  }
  if (name === "cookedBefore") {
    value = event.target.checked;
  }

  return { name, value };
};
