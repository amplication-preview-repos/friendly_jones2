import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "assignedWaiter";

export const TableTitle = (record: TTable): string => {
  return record.assignedWaiter?.toString() || String(record.id);
};
