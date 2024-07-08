import { SortOrder } from "../../util/SortOrder";

export type BillingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  paymentMethod?: SortOrder;
  billNumber?: SortOrder;
  order?: SortOrder;
  cashierId?: SortOrder;
};
