import { SalesTransaction as TSalesTransaction } from "../api/salesTransaction/SalesTransaction";

export const SALESTRANSACTION_TITLE_FIELD = "id";

export const SalesTransactionTitle = (record: TSalesTransaction): string => {
  return record.id?.toString() || String(record.id);
};
