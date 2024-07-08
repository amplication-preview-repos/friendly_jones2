import { SortOrder } from "../../util/SortOrder";

export type BillingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  paymentMethod?: SortOrder;
  status?: SortOrder;
  orderId?: SortOrder;
};
