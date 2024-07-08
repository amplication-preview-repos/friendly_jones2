import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type BillingCreateInput = {
  amount?: number | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
};
