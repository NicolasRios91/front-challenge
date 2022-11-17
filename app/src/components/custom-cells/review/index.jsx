import star from "../../../assets/star.png";
import darkStar from "../../../assets/darkStar.png";
import { MAX_REVIEWS } from "../../../utils/constants";
import { useMemo } from "react";

export const CustomReviewCell = ({ row }) => {
  const stars = useMemo(() => Array(row.reviews).fill("1"), [row]);
  const darkStars = useMemo(
    () => Array(MAX_REVIEWS - stars.length).fill("1"),
    [row]
  );
  return (
    <>
      {stars?.map((e, index) => (
        <span key={index}>
          <img src={star} />
        </span>
      ))}

      {darkStars?.map((e, index) => (
        <span key={index}>
          <img src={darkStar} />
        </span>
      ))}
    </>
  );
};
