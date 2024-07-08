import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  qrCodeUrl?: SortOrder;
  availableItems?: SortOrder;
};
