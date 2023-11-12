import React from 'react';

import Table from './2-Molecules/Table/Table';
import './theme.scss';

export const tableData = [
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

export const tableColumns = [
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
    },
];

export function App() {
    return (
        <div className="App">
            <h2>Table Component</h2>

            <h5> Without Row Selection</h5>
            <Table data={tableData} columns={tableColumns} />

            <h5> With Checkbox </h5>
            <Table data={tableData} columns={tableColumns} selectMode={'CheckBox'} />

            <h5> With Radio Button</h5>

            <Table data={tableData} columns={tableColumns} selectMode={'Radio'} />
        </div>
    );
}
