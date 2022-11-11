import { StyledTable, Container } from "./styles";

export const Table = ({ data, columns }) => {
  return (
    <Container>
      <StyledTable>
        <thead>
          <tr>{columns && columns.map((col) => <th>{col.header}</th>)}</tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr>
                {columns.map((col) => (
                  <td>{row[col.field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};
