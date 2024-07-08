import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  qrCode?: SortOrder;
  menuItems?: SortOrder;
  restaurant?: SortOrder;
};
