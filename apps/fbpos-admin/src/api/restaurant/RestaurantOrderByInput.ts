import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
};
