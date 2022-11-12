import { useState } from "react";
import { StyledButton } from "./styles";

export const StatusButton = ({ row, callback }) => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    //todo dispatch edit here
    setIsActive(!isActive);
  };

  return (
    <td>
      <StyledButton isActive={isActive} onClick={handleClick}>
        {row.cookedBefore ? "YES" : "NO"}
      </StyledButton>
    </td>
  );
};
