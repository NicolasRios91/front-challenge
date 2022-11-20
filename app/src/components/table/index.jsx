import { StyledTable, Container } from "./styles";
import { cellRenderer } from "../../utils/helpers/table";

export const Table = ({ data, columns }) => {
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
          {data
            ? data.map((row, index) => {
                return cellRenderer(columns, row, index);
              })
            : null}
        </tbody>
      </StyledTable>
    </Container>
  );
};
