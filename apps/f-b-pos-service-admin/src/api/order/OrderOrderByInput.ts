import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  items?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  waiter?: SortOrder;
  tableId?: SortOrder;
};
