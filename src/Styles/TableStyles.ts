import defaultTheme from './theme';

const tableStyles = {
    container: {
        borderCollapse: 'collapse',
        boxShadow: defaultTheme.boxShadow,
    },
    header: {
        background: defaultTheme.primaryColor,
        color: defaultTheme.fontColor,
    },
    cell: {
        borderTop: defaultTheme.borderTop,
    },
    selectedRow: {
        backgroundColor: defaultTheme.selectionColor,
    },
} as const;

export default tableStyles;
