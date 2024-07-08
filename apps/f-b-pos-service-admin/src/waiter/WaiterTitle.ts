import { Waiter as TWaiter } from "../api/waiter/Waiter";

export const WAITER_TITLE_FIELD = "id";

export const WaiterTitle = (record: TWaiter): string => {
  return record.id?.toString() || String(record.id);
};
