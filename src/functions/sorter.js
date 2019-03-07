export const sorter = sortBy => (a, b) =>
  a[sortBy] == b[sortBy] ? 0 : a[sortBy] < b[sortBy] ? -1 : 1;
