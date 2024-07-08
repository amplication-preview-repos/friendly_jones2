import { SortOrder } from "../../util/SortOrder";

export type SalesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  totalSales?: SortOrder;
  dailyReport?: SortOrder;
};
