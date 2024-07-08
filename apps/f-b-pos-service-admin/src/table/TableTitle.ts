import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "assignedTo";

export const TableTitle = (record: TTable): string => {
  return record.assignedTo?.toString() || String(record.id);
};
