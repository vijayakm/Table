import React, { ReactNode, useState } from 'react';

import { TableColumn, TableRow } from '../../1-Atoms';
import { tableStyles } from '../../Styles';
import { SortOrder } from '../../utils';
import { handleSelection, sortData } from '../../utils/Functions';
import { TableProps } from './Table.types';

const Table = <T extends { [id: string]: ReactNode }>(props: TableProps<T>) => {
    const { data, columns, selectMode = 'None', onSelectionChange } = props;
    const [sortedData, setSortedData] = useState<T[]>(data);
    const [sortOrder, setSortOrder] = useState<SortOrder>('None');
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleSort = (columnId: string) => {
        const newSortOrder = sortOrder === 'Up' ? 'Down' : 'Up';
        setSortOrder(newSortOrder);
        const sorted = sortData(sortedData, columnId, newSortOrder);
        setSortedData(sorted);
    };

    const handleRowSelection = (rowIndex: number) => {
        if (selectMode === 'Radio') {
            setSelectedRows([rowIndex]);
        } else {
            const updatedSelectedRows = handleSelection(rowIndex, selectedRows);
            setSelectedRows(updatedSelectedRows);
            if (onSelectionChange) {
                onSelectionChange(updatedSelectedRows);
            }
        }
    };

    return (
        <table className="table-container" style={tableStyles.container}>
            <thead>
                <tr>
                    <th className="table-header" style={tableStyles.header} />
                    {columns.map((column) => (
                        <TableColumn
                            key={column.id}
                            id={column.id}
                            label={column.label}
                            sortable={column.sortable}
                            onSort={() => handleSort(column.id)}
                            sortOrder={sortOrder === 'None' ? 'Up' : sortOrder}
                        />
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((rowData, index) => (
                    <TableRow
                        key={index}
                        rowData={rowData}
                        columns={columns}
                        selectMode={selectMode}
                        selected={selectedRows.includes(index)}
                        onSelect={() => handleRowSelection(index)}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
