import React from "react";
import { Story, Meta } from "@storybook/react";
import Table from "./Table"; 
import { TableProps } from "./Table.types";
import { JSX } from "react/jsx-runtime";


export const tableData = [
    {
      id: 1,
      operator: "*Celcom Axiata (LTE)",
      headsetDisplay: "CELCOM / My Celcom / 502 19",
      availability: "Yes"
    },
    {
      id: 2,
      operator: "*DiGi Telecom (LTE)",
      headsetDisplay: "DiGi 1800 / DiGi /  MYMY18",
      availability: "No"
    },
    {
      id: 3,
      operator: "*Maxis (LTE)",
      headsetDisplay: "U Mobile / MYS 18 / MY 18",
      availability: "Yes"
    },
    {
      id: 4,
      operator: "U Mobile (LTE)",
      headsetDisplay: "U Mobile / MYS 18 / MY 18",
      availability: "Yes"
    }
  ];
  
  export const tableColumns = [
    {
      id: "operator",
      label: "Operator",
      sortable: true
    },
    {
      id: "headsetDisplay",
      label: "Headset Display",
      sortable: true
    },
    {
      id: "availability",
      label: "3G Availability",
      sortable: true
    }
  ];
  

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {}
} as Meta;

const Template: Story<TableProps<typeof tableColumns>>= (args: JSX.IntrinsicAttributes & TableProps<{ [id: string]: React.ReactNode; }>) => <Table {...args} />;

export const BasicTable = Template.bind({});
BasicTable.args = {
  tableData,
  tableColumns
};

export const TableWithSorting = Template.bind({});
TableWithSorting.args = {
  tableData,
  tableColumns
};

export const TableWithSelection = Template.bind({});
TableWithSelection.args = {
  tableData,
  columns: [
    ...tableColumns,
    {
      id: "selection",
      label: "Select",
      sortable: false,
      renderCell: (rowData: any, onSelect: () => void) => (
        <input type="checkbox" checked={rowData.selected} onChange={onSelect} />
      )
    }
  ],
  selectable: true
};

export const TableWithMultiSelection = Template.bind({});
TableWithMultiSelection.args = {
  tableData,
  columns: [
    ...tableColumns,
    {
      id: "multiSelection",
      label: "Multi Select",
      sortable: false,
      renderCell: (rowData: any, onSelect: () => void) => (
        <input type="checkbox" checked={rowData.selected} onChange={onSelect} />
      )
    }
  ],
  selectable: true,
  multiSelect: true
};

export const CustomThemedTable = Template.bind({});
CustomThemedTable.args = {
  tableData,
  tableColumns,
  theme: {
    primaryColor: "#E91E63",
    secondaryColor: "#9C27B0",
    selectionColor: "#03A9F4"
  }
};
