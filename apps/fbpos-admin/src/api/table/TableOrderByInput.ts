import { SortOrder } from "../../util/SortOrder";

export type TableOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  numberField?: SortOrder;
  status?: SortOrder;
  assignedWaiter?: SortOrder;
};
