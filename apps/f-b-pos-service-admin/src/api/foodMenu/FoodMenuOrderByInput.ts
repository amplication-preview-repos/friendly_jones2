import { SortOrder } from "../../util/SortOrder";

export type FoodMenuOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  itemName?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  category?: SortOrder;
};
