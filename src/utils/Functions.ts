import { SortOrder } from "./types";

export const sortData = <T>(
  data: T[],
  columnId: keyof T,
  sortOrder: SortOrder
) => {
  const sorted = [...data];

  sorted.sort((a, b) => {
    const aValue = a[columnId];
    const bValue = b[columnId];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortOrder === "Up"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    else if (typeof aValue === "number" && typeof bValue === "number") {
    return sortOrder === "Down"
      ? aValue - bValue
      : bValue - aValue;
    }
  });

  return sorted;
}

export const handleSelection = (
    rowIndex: number,
    selectedRows: number[],
  ) => {
     
    const index = selectedRows.indexOf(rowIndex);
    const updatedSelectedRows = [...selectedRows];
  
    if (index === -1) {
      updatedSelectedRows.push(rowIndex);
    } else {
      updatedSelectedRows.splice(index, 1);
    }
  
    return updatedSelectedRows;
  }
  