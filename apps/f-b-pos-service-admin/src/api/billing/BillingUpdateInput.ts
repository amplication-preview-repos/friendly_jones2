import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type BillingUpdateInput = {
  amount?: number | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
};
