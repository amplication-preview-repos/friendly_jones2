import { SortOrder } from "../../util/SortOrder";

export type BillingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  totalAmount?: SortOrder;
  paymentMethod?: SortOrder;
  status?: SortOrder;
};
