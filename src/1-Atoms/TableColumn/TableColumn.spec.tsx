import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import TableColumn from './TableColumn';
import { TableColumnProps } from './TableColumn.types';

const mockProps: TableColumnProps = {
    id: 'columnId',
    label: 'Column Label',
    sortable: true,
    onSort: jest.fn(),
    sortOrder: 'None',
};

describe('TableColumn Component', () => {
    it('renders the column label', () => {
        const { getByText } = render(
            <table>
                <thead>
                    <tr>
                        <TableColumn {...mockProps} />
                    </tr>
                </thead>
            </table>,
        );
        expect(getByText('Column Label')).toBeInTheDocument();
    });

    it('handles column click for sortable columns', () => {
        const { getByText } = render(
            <table>
                <thead>
                    <tr>
                        <TableColumn {...mockProps} />
                    </tr>
                </thead>
            </table>,
        );
        fireEvent.click(getByText('Column Label'));
        expect(mockProps.onSort).toHaveBeenCalledWith('columnId');
    });

    it('does not display sorting icon for non-sorted columns', () => {
        const { getByText, queryByAltText } = render(
            <table>
                <thead>
                    <tr>
                        <TableColumn {...mockProps} />
                    </tr>
                </thead>
            </table>,
        );
        expect(getByText('Column Label')).toBeInTheDocument();
        expect(queryByAltText('Sorting Up')).toBeNull();
        expect(queryByAltText('Sorting Down')).toBeNull();
    });

    it('does not call onSort for non-sortable columns', () => {
        const { getByText } = render(
            <table>
                <thead>
                    <tr>
                        <TableColumn {...mockProps} sortable={false} />
                    </tr>
                </thead>
            </table>,
        );
        fireEvent.click(getByText('Column Label'));
        expect(mockProps.onSort).not.toHaveBeenCalled();
    });
});
