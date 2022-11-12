import { StyledTable, Container } from "./styles";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";
import { CustomNameCell } from "../custom-cells/recipe-name";
import { StatusButton } from "../buttons/status-button";

export const Table = ({ data, columns, callback }) => {
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
                {columns.map((col) => {
                  if (col.field == "name") {
                    return <CustomNameCell callback={callback} row={row} />;
                  }
                  if (col.field == "reviews") {
                    return <td>{}</td>;
                  }

                  if (col.field == "cookedBefore") {
                    return <StatusButton callback={callback} row={row} />;
                  }

                  return <td>{row[col.field]}</td>;
                })}
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </Container>
    // <div
    //   className="ag-theme-alpine"
    //   style={{
    //     height: "60vh",
    //     width: "100%",
    //     marginTop: "20px",
    //     border: "none",
    //   }}
    // >
    //   <StyledTable rowData={data} columnDefs={columns}></StyledTable>
    // </div>
  );
};
