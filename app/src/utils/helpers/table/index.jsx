// To not return a tr tag when no row field matches any column
export const checkRowField = (columns, row) => {
  let foundField = false;
  const rowKeys = Object.keys(row);

  for (let i = 0; i < columns.length; i++) {
    foundField = rowKeys.includes(columns[i].field);
    if (foundField) {
      break;
    }
  }
  return foundField;
};

export const cellRenderer = (columns, row, index) => {
  const foundField = checkRowField(columns, row);
  const rowKeys = Object.keys(row);

  if (!foundField) return null;
  return foundField ? (
    <tr key={index}>
      {columns.map((col) =>
        col.Cell && rowKeys.includes(col.field) ? (
          <col.Cell key={col.field} row={row} />
        ) : (
          <td>{row[col.field]}</td>
        )
      )}
    </tr>
  ) : null;
};
