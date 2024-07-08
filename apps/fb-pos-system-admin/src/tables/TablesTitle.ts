import { Tables as TTables } from "../api/tables/Tables";

export const TABLES_TITLE_FIELD = "id";

export const TablesTitle = (record: TTables): string => {
  return record.id?.toString() || String(record.id);
};
