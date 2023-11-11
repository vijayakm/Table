import defaultTheme from './theme';

const tableStyles = {
    container: {
        borderCollapse: 'collapse',
        width: '100%',
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
        background: 'defaultTheme.selectionColor',
    },
} as const;

export default tableStyles;
