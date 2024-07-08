import { SortOrder } from "../../util/SortOrder";

export type KitchenStaffOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  restaurant?: SortOrder;
};
