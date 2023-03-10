import { useEffect, useState } from "react";
import { FILTER_OPTIONS } from "../../../utils/constants";
import { filterByStatus, filterByTitle } from "../../../utils/helpers/filter";

export const useFilter = ({ data, search }) => {
  const [selectedOption, setSelectedOption] = useState(FILTER_OPTIONS[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleOnChange = (e) => {
    const newValue = FILTER_OPTIONS.find(
      (option) => option.value === e.target.value
    );
    if (newValue) {
      setSelectedOption(newValue);
    }
  };

  const handleOpenDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseDropDown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    let filteredResults = filterByTitle(data, search);
    filteredResults = filterByStatus(filteredResults, selectedOption.value);
    setFilteredData(filteredResults);
  }, [search, data, selectedOption.value]);

  return {
    filteredData,
    isOpen,
    selectedOption,
    handleOnChange,
    handleOpenDropDown,
    handleCloseDropDown,
  };
};
