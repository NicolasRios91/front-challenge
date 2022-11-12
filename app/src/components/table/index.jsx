import { StyledTable, Container } from "./styles";
import { CustomNameCell } from "../custom-cells/recipe-name";
import { ToogleEditSlide } from "../buttons/toggle";
import { CustomReviewCell } from "../custom-cells/review";

export const Table = ({ data, columns, callback }) => {
  return (
    <Container>
      <StyledTable>
        <thead>
          <tr>
            {columns &&
              columns.map((col) => <th key={col.field}>{col.header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr>
                {columns.map((col) => {
                  if (col.field == "name") {
                    return <CustomNameCell callback={callback} row={row} />;
                  }
                  if (col.field == "reviews") {
                    return (
                      <td>
                        <CustomReviewCell row={row} />
                      </td>
                    );
                  }

                  if (col.field == "cookedBefore") {
                    return (
                      <td>
                        <ToogleEditSlide callback={callback} row={row} />
                      </td>
                    );
                  }

                  return <td>{row[col.field]}</td>;
                })}
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};
