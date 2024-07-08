import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "waiter";

export const OrderTitle = (record: TOrder): string => {
  return record.waiter?.toString() || String(record.id);
};
