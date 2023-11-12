import { StoryFn, StoryObj } from '@storybook/addons';
import React from 'react';

import '../../theme.scss';
import Table from './Table';
import { TableProps } from './Table.types';

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
    },
];
export default {
    title: 'Components/Table',
    component: Table,
};

const Template: StoryFn<StoryObj<TableProps<(typeof tableData)[0]>>> = (args) => (
    <Table {...args} />
);

export const Default = Template.bind({});
Default.args = {
    data: tableData,
    columns: tableColumns,
};

export const WithSelection = Template.bind({});
WithSelection.args = {
    data: tableData,
    columns: tableColumns,
    selectMode: 'Multiple', // or 'Radio'
    onSelectionChange: (selectedRows) => {
        console.log('Selected Rows:', selectedRows);
    },
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
    data: tableData,
    columns: tableColumns,
    selectMode: 'Multiple', // or 'Radio'
    onSelectionChange: (selectedRows) => {
        console.log('Selected Rows:', selectedRows);
    },
    // Add any custom styles or other props here
};
