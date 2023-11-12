import React from 'react';

import { tableStyles } from '../../Styles';
import { IRowData, TableRowProps } from './TableRow.types';

const TableRow = <T extends IRowData>(props: TableRowProps<T>) => {
    const { rowData, columns, selectMode = 'None', selected, onSelect } = props;

    return (
        <tr
            className="table-row"
            style={selected ? tableStyles.selectedRow : null}
            onClick={onSelect}
        >
            {columns.map(({ id }, index) => (
                <td className="table-cell" key={id} style={tableStyles.cell}>
                    {index === 0 && selectMode !== 'None' ? (
                        selectMode === 'CheckBox' ? (
                            <input type="checkbox" checked={selected} readOnly />
                        ) : (
                            <input
                                type="radio"
                                className="none"
                                checked={selected}
                                readOnly
                            />
                        )
                    ) : null}
                    {rowData?.[id]}
                </td>
            ))}
        </tr>
    );
};

export default TableRow;
