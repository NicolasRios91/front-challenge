import { StyledTable, Container } from "./styles";

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
            ? data.map((row, index) => (
                <tr key={index}>
                  {columns.map((col) => {
                    return col.Cell ? (
                      <col.Cell key={col.field} row={row} />
                    ) : (
                      <td>{row[col.field]}</td>
                    );
                  })}
                </tr>
              ))
            : null}
        </tbody>
      </StyledTable>
    </Container>
  );
};
