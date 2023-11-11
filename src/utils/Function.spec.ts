import { sortData, handleSelection } from "./Functions"; // Update with your actual file name

const mockData = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

describe('sortData Utility Function', () => {
  it('sorts string data in ascending order', () => {
    const sorted = sortData(mockData, 'name', 'Up');
    expect(sorted[0].name).toBe('Alice');
    expect(sorted[1].name).toBe('Bob');
    expect(sorted[2].name).toBe('Charlie');
  });

  it('sorts string data in descending order', () => {
    const sorted = sortData(mockData, 'name', 'Down');
    expect(sorted[0].name).toBe('Charlie');
    expect(sorted[1].name).toBe('Bob');
    expect(sorted[2].name).toBe('Alice');
  });

  it('sorts number data in descending order', () => {
    const sorted = sortData(mockData, 'age', 'Down');
    expect(sorted[0].age).toBe(25);
    expect(sorted[1].age).toBe(30);
    expect(sorted[2].age).toBe(35);
  });

  it('sorts number data in  ascending order', () => {
    const sorted = sortData(mockData, 'age', 'Up');
    expect(sorted[0].age).toBe(35);
    expect(sorted[1].age).toBe(30);
    expect(sorted[2].age).toBe(25);
  });
});

describe('handleSelection Utility Function', () => {
  it('adds row index to selected rows if not present', () => {
    const selectedRows = handleSelection(0, [1, 2]);
    expect(selectedRows).toEqual([1, 2, 0]);
  });

  it('removes row index from selected rows if already present', () => {
    const selectedRows = handleSelection(1, [1, 2, 0]);
    expect(selectedRows).toEqual([2, 0]);
  });

  it('handles empty selected rows array correctly', () => {
    const selectedRows = handleSelection(0, []);
    expect(selectedRows).toEqual([0]);
  });
});
