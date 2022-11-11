import { useState, useRef } from "react";
import { StyledSelect, OptionsModal, DropDownContainer, Arrow } from "./styles";
import { COOKED_BEFORE, FILTER_OPTIONS } from "../../utils/constants";
import useOutsideClick from "../../utils/helpers/use-outside-click";

//todo add reducer
export const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(FILTER_OPTIONS[0].label);
  const [isOpen, setIsopen] = useState(false);
  const ref = useRef();

  const handleOnChange = (e) => {
    const newValue = FILTER_OPTIONS.find(
      (option) => option.value === e.target.value
    );
    if (newValue) {
      setSelectedOption(newValue.label);
    }
  };

  const handleOpenModal = () => {
    setIsopen(!isOpen);
  };

  useOutsideClick(ref, () => {
    setIsopen(false);
  });

  return (
    <div ref={ref} style={{ width: "auto" }}>
      <StyledSelect onClick={handleOpenModal}>
        {COOKED_BEFORE}:<span>{selectedOption}</span> <Arrow />
      </StyledSelect>
      {FILTER_OPTIONS.length > 0 && isOpen ? (
        <DropDownContainer>
          <div>
            {FILTER_OPTIONS.map((option) => (
              <OptionsModal key={option.value}>
                <label>{option.label}</label>
                <input
                  type="radio"
                  name="filter-recipe"
                  key={option.value}
                  value={option.value}
                  checked={selectedOption === option.label}
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
