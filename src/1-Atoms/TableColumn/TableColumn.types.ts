import { SortOrder } from '../../utils';

export interface TableColumnProps {
    id: string;
    label: string;
    sortable?: boolean;
    onSort?: (columnId: string) => void;
    sortOrder?: SortOrder;
}
