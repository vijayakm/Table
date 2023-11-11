import React, { ReactNode } from "react";
import { tableStyles } from "../../Styles";
import { TableRowProps } from "./TableRow.types";



const TableRow = <T extends { [id: string]: ReactNode; },>(props : TableRowProps<T> ) => {

    const {
        rowData,
        columns,
        selectMode = "None",
        selected,
        onSelect,
      } = props;
 
  return (
    <tr
      className="table-row"
      style={selected ? tableStyles.selectedRow : null}
      onClick={onSelect}
    >
      {selectMode !== "None" && (
        <td className="table-cell" style={tableStyles.cell}>
          {selectMode === 'CheckBox' ? (
            <input type="checkbox" checked={selected} readOnly />
          ) : (
            <input type="radio" className="none" checked={selected} readOnly />
          )}
        </td>
      )}
      {columns.map(({id}) => (
        <td className="table-cell" key={id} style={tableStyles.cell}>
          {rowData?.[id]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
