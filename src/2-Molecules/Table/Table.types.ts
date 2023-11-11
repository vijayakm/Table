import { TableColumnProps } from '../../1-Atoms/TableColumn/TableColumn.types';
import { SelectMode } from '../../utils';

export interface TableProps<T> {
    data: T[];
    columns: TableColumnProps[];
    selectMode?: SelectMode;
    onSelectionChange?: (selectedRows: number[]) => void;
}
