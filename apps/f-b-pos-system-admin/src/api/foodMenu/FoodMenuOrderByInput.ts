import { SortOrder } from "../../util/SortOrder";

export type FoodMenuOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  remainingQuantity?: SortOrder;
};
