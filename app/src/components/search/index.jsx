import { StyledInput } from "./styles";
import { SEARCH_PLACEHOLDER } from "../../utils/constants";

export const Search = ({ handleOnChange }) => (
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
