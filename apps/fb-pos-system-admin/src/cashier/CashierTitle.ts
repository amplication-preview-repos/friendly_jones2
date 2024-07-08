import { Cashier as TCashier } from "../api/cashier/Cashier";

export const CASHIER_TITLE_FIELD = "name";

export const CashierTitle = (record: TCashier): string => {
  return record.name?.toString() || String(record.id);
};
