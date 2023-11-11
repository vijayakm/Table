import defaultTheme from "./theme";

const tableStyles = {
  container: {
    borderCollapse: "collapse" as const,
    width: "100%",
    boxShadow: defaultTheme.boxShadow
  },
  header: {
    background: defaultTheme.primaryColor,
    color: defaultTheme.fontColor
  },
  cell: {
    borderTop: defaultTheme.borderTop
  },
  selectedRow: {
    background: "defaultTheme.selectionColor"
  }
};

export default tableStyles;