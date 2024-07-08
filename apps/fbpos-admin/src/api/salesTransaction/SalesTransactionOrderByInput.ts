import { SortOrder } from "../../util/SortOrder";

export type SalesTransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  totalAmount?: SortOrder;
  paymentMethod?: SortOrder;
};
