import React, { useState } from 'react';

import { SortingDown, SortingUp } from '../../assets/svg';
import { tableStyles } from '../../Styles';
import { TableColumnProps } from './TableColumn.types';

const TableColumn = (props: TableColumnProps) => {
    const { id, label, sortable = false, onSort, sortOrder } = props;
    const [sortedColumnId, setSortedColumnId] = useState<string | null>(null);

    const handleColumnClick = () => {
        if (sortable) {
            onSort(id);
            setSortedColumnId(id);
        }
    };
    return (
        <th
            className="table-header"
            style={tableStyles.header}
            onClick={handleColumnClick}
        >
            {label}
            {sortable && sortedColumnId === id && (
                <span className="sorting">
                    {sortOrder === 'Up' && <img src={SortingUp} alt="Sorting Up" />}
                    {sortOrder === 'Down' && <img src={SortingDown} alt="Sorting Down" />}
                </span>
            )}
        </th>
    );
};

export default TableColumn;
