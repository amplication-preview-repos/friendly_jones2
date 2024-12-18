import { SortOrder } from "../../util/SortOrder";

export type MenuItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
};
