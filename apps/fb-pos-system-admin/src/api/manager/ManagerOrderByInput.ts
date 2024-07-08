import { SortOrder } from "../../util/SortOrder";

export type ManagerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  restaurant?: SortOrder;
};
