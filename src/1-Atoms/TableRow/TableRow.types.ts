import { ReactNode } from "react";
import { SelectMode } from "../../utils";
import { TableColumnProps } from "../TableColumn/TableColumn.types";

export interface TableRowProps<T extends {[id : string] : ReactNode}> {
    rowData: T;
    columns: TableColumnProps[];
    selectMode ?: SelectMode;
    selected: boolean;
    onSelect: () => void;
  }