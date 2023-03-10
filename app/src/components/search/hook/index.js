import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const handleOnSearchChange = (e) => {
    setSearch(e.target.value.trim());
  };

  return { search, handleOnSearchChange };
};
