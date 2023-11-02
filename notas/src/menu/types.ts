export type MenuProps = {
  onOrderAsc: (selectedSort: {
    selectedSortBy: "title" | "text" | "dateToCreate";
    selectedOrder: "desc" | "asc";
  }) => void;
};
