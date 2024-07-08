import { SortOrder } from "../../util/SortOrder";

export type SalesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  saleId?: SortOrder;
  date?: SortOrder;
  totalAmount?: SortOrder;
  restaurant?: SortOrder;
};
