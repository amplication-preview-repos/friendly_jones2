import { Cashier as TCashier } from "../api/cashier/Cashier";

export const CASHIER_TITLE_FIELD = "id";

export const CashierTitle = (record: TCashier): string => {
  return record.id?.toString() || String(record.id);
};
