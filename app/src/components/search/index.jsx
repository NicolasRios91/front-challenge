import { StyledInput } from "./styles";
import { SEARCH_PLACEHOLDER } from "../../utils/constants";

// todo add icon and reducer
export const Search = ({ callback }) => {
  //todo add debounce
  const handleOnChange = (e) => {
    callback(e.target.value.trim());
  };

  return (
    <>
      <label htmlFor="search" style={{ display: "none" }}>
        Search
      </label>

      <StyledInput
        id="search"
        type="text"
        placeholder={SEARCH_PLACEHOLDER}
        onChange={handleOnChange}
      />
    </>
  );
};
