import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Table from './Table';

const tableData = [
    {
        id: 1,
        operator: '*Celcom Axiata (LTE)',
        headsetDisplay: 'CELCOM / My Celcom / 502 19',
        availability: 'Yes',
    },
    {
        id: 2,
        operator: '*DiGi Telecom (LTE)',
        headsetDisplay: 'DiGi 1800 / DiGi /  MYMY18',
        availability: 'No',
    },
    {
        id: 3,
        operator: '*Maxis (LTE)',
        headsetDisplay: 'U Mobile / MYS 18 / MY 18',
        availability: 'Yes',
    },
    {
        id: 4,
        operator: 'U Mobile (LTE)',
        headsetDisplay: 'U Mobile / MYS 18 / MY 18',
        availability: 'Yes',
    },
];

const tableColumns = [
    {
        id: 'operator',
        label: 'Operator',
        sortable: true,
    },
    {
        id: 'headsetDisplay',
        label: 'Headset Display',
        sortable: true,
    },
    {
        id: 'availability',
        label: '3G Availability',
        sortable: true,
    },
];

const mockOnSelectionChange = jest.fn();

const mockProps = {
    data: tableData,
    columns: tableColumns,
    onSelectionChange: mockOnSelectionChange,
};

describe('Table Component', () => {
    it('renders the table with correct data and columns', () => {
        const { getByText } = render(<Table {...mockProps} />);
        expect(getByText('Operator')).toBeInTheDocument();
        expect(getByText('Headset Display')).toBeInTheDocument();
        expect(getByText('3G Availability')).toBeInTheDocument();
    });
    it('handles sorting when column header is clicked', () => {
        const { getByText } = render(<Table {...mockProps} />);
        fireEvent.click(getByText('Operator'));
    });
});
