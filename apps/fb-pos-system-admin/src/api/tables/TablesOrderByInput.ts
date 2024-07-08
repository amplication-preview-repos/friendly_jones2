import { SortOrder } from "../../util/SortOrder";

export type TablesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tableNumber?: SortOrder;
  status?: SortOrder;
  waiterId?: SortOrder;
};
