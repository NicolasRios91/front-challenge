import { CustomNameCell } from "../../../components/custom-cells/recipe-name";
import { CustomReviewCell } from "../../../components/custom-cells/review";
import { ToggleEditSlide } from "../../../components/buttons/toggle";

export const columns = [
  {
    field: "title",
    header: "Recipe name",
    Cell: ({ row }) => {
      return <CustomNameCell row={row} />;
    },
  },
  {
    field: "reviews",
    header: "Reviews",
    Cell: ({ row }) => (
      <td>
        <CustomReviewCell row={row} />
      </td>
    ),
  },
  {
    field: "cookedBefore",
    header: "Cook before",
    Cell: ({ row }) => {
      return (
        <td>
          <ToggleEditSlide row={row} />
        </td>
      );
    },
  },
];
