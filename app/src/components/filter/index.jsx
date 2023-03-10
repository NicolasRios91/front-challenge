import { useRef } from "react";
import { StyledSelect, OptionsModal, DropDownContainer, Arrow } from "./styles";
import { COOKED_BEFORE, FILTER_OPTIONS } from "../../utils/constants";
import useOutsideClick from "../../utils/helpers/use-outside-click";

export const Filter = ({ props }) => {
  const ref = useRef();

  const {
    isOpen,
    handleOnChange,
    handleOpenDropDown,
    handleCloseDropDown,
    label,
  } = props;

  useOutsideClick(ref, handleCloseDropDown);

  return (
    <div ref={ref} style={{ width: "auto" }}>
      <StyledSelect onClick={handleOpenDropDown}>
        {COOKED_BEFORE}:<span>{label}</span> <Arrow />
      </StyledSelect>
      {FILTER_OPTIONS.length > 0 && isOpen ? (
        <DropDownContainer>
          <div>
            {FILTER_OPTIONS.map((option) => (
              <OptionsModal key={option.value}>
                <label htmlFor="filter-recipe">{option.label}</label>
                <input
                  id="filter-recipe"
                  type="radio"
                  name="filter-recipe"
                  key={option.value}
                  value={option.value}
                  checked={label === option.label}
                  onChange={handleOnChange}
                ></input>
              </OptionsModal>
            ))}
          </div>
        </DropDownContainer>
      ) : null}
    </div>
  );
};
