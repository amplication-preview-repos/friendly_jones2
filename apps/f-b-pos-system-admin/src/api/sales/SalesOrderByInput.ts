import { SortOrder } from "../../util/SortOrder";

export type SalesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  saleDate?: SortOrder;
  totalAmount?: SortOrder;
  itemsSold?: SortOrder;
};
