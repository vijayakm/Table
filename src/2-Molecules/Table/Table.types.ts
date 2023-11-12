import { TableColumnProps } from '../../1-Atoms/TableColumn/TableColumn.types';
import { SelectMode } from '../../utils';

export interface TableProps<T> {
    /** Table to display. */
    data: T[];
    /** Columns of the Table. */
    columns: TableColumnProps[];
    /** Add Radio Button or CheckBox. */
    selectMode?: SelectMode;
    /** Fired when a column is clicked. */
    onSelectionChange?: (selectedRows: number[]) => void;
}
