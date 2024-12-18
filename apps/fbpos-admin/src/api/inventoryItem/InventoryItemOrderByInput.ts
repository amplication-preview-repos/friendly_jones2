import { SortOrder } from "../../util/SortOrder";

export type InventoryItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  alertLevel?: SortOrder;
  name?: SortOrder;
};
