import { SelectMode } from "../../utils";
import { TableColumnProps } from "../../1-Atoms/TableColumn/TableColumn.types";


export interface TableProps<T> {
  data: T[];
  columns: TableColumnProps[];
 selectMode ?: SelectMode;
  onSelectionChange?: (selectedRows: number[]) => void;
}
