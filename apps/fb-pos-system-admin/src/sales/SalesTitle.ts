import { Sales as TSales } from "../api/sales/Sales";

export const SALES_TITLE_FIELD = "saleId";

export const SalesTitle = (record: TSales): string => {
  return record.saleId?.toString() || String(record.id);
};
