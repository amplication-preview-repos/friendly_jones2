import { Waiter as TWaiter } from "../api/waiter/Waiter";

export const WAITER_TITLE_FIELD = "name";

export const WaiterTitle = (record: TWaiter): string => {
  return record.name?.toString() || String(record.id);
};
