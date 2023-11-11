import { ReactNode } from 'react';

import { SelectMode } from '../../utils';
import { TableColumnProps } from '../TableColumn/TableColumn.types';

export interface IRowData {
    [id: string]: ReactNode;
}

export interface TableRowProps<T extends IRowData> {
    rowData: T;
    columns: TableColumnProps[];
    selectMode?: SelectMode;
    selected: boolean;
    onSelect: () => void;
}
